import { useMemo, useCallback } from "react";

import moment from "moment";
import { unstable_batchedUpdates } from "react-dom";

import { messagesError } from "../constants";
import useUpdate from "../useUpdate/useUpdate";

const useHandlers = (updateForm, updateMessage, messages) => {
  if (typeof updateForm !== "function" || typeof updateMessage !== "function") {
    const parameters = [updateForm, updateMessage];
    const errorParameters = (parameter) => typeof parameter !== "function";
    parameters.map((parameter) => {
      if (errorParameters(parameter)) {
        throw Error(
          `TypeError: "${parameter}" is not a function, expected to be of type function but receive ${typeof parameter}.`
        );
      }
    });
  }

  const { dispatchUpdateForm, dispatchUpdateMessage, dispatchRequiredError } =
    useUpdate(updateForm, updateMessage);

  const verifyCallback = (func) =>
    typeof func === "function" ? func : () => {};

  const clearMessageToEmpty = useCallback(
    (field) =>
      messages && messages[field] ? dispatchUpdateMessage(field) : null,
    [dispatchUpdateMessage, messages]
  );

  const change = useCallback(
    (field, value, callback) => {
      callback = verifyCallback(callback);

      unstable_batchedUpdates(() => {
        clearMessageToEmpty(field);
        dispatchUpdateForm(field, value);
        callback(field, value, dispatchUpdateForm, dispatchUpdateMessage);
      });

      return;
    },
    [clearMessageToEmpty, dispatchUpdateForm, dispatchUpdateMessage]
  );

  const blur = useCallback(
    (field, value, callback, validZero = true) => {
      callback = verifyCallback(callback);

      if (messages) {
        if (
          value?.length === 0 ||
          value === "" ||
          (validZero ? !value : value === null)
        ) {
          unstable_batchedUpdates(() => {
            dispatchRequiredError(field);
            callback(field, value, dispatchUpdateForm, dispatchUpdateMessage);
          });
          return;
        }
        if (messages[field]) {
          clearMessageToEmpty(field);
        }
      }

      callback(field, value, dispatchUpdateForm, dispatchUpdateMessage);

      return;
    },
    [dispatchRequiredError, dispatchUpdateForm, dispatchUpdateMessage, messages]
  );

  const dateNotValid = (date) => {
    const dateMin = "1899-12-31";
    const dateMax = "2099-12-31";
    return (
      !date ||
      !moment(date).isValid() ||
      moment(date).isBefore(dateMin) ||
      moment(date).isAfter(dateMax)
    );
  };

  return useMemo(
    () =>
      new (class Handle {
        getClass = () => {
          return Handle;
        };

        handleChange = (callback) => (event) => {
          change(event.target?.name, event.target?.value, callback);
        };

        handleChangeCurrency = (callback) => (event, value) => {
          change(event.target?.name, value, callback);
        };

        handleChangeToggle = (callback) => (event) => {
          change(event.target?.name, !!event.target?.checked, callback);
        };

        handleChangeDate = (field, callback) => (date) => {
          if (!date) {
            change(field, date, callback);
            return;
          }

          if (dateNotValid(date)) {
            dispatchUpdateMessage(field, messagesError.invalidDate);
            return;
          }

          change(field, date, callback);
        };

        handleChangeAutocomplete = (field, callback) => (evnt, value) => {
          if (value === null) {
            change(field, value, callback);
            return;
          }
          change(field, value instanceof Array ? value : value?.id, callback);
        };

        handleChangeAutocompleteReferenceId =
          (field, callback) => (evnt, value) => {
            if (value === null) {
              change(field, value, callback);
              return;
            }
            change(
              field,
              value instanceof Array ? value : value?.referenceId,
              callback
            );
          };

        handleChangeFile =
          (callback) =>
          ({ name, value }) => {
            change(name, value, callback);
          };

        handleBlur =
          (...args) =>
          (event) => {
            const { callback, validZero } = args.reduce((acc, cur) => {
              if (cur === false) return { ...acc, validZero: false };
              if (typeof cur === "function") return { ...acc, callback: cur };
              return acc;
            }, {});

            blur(event.target?.name, event.target?.value, callback, validZero);
          };

        handleBlurCurrency = (callback) => (event) => {
          if (!parseFloat(event.target.value.replace(",", "."))) {
            dispatchRequiredError(event.target.name);
            return;
          }

          blur(event.target?.name, event.target?.value, callback, false);
        };

        handleBlurDate = (callback) => (event) => {
          const field = event.target?.name;
          const value = event.target?.value.split("/").reverse().join("-");
          const date = moment(value).toISOString();
          if (dateNotValid(value)) {
            dispatchUpdateMessage(field, messagesError.invalidDate);
            return;
          }
          blur(field, date, callback);
        };

        handleBlurAutocomplete = (field, callback) => (event) => {
          blur(field, event.target?.value, callback);
        };
      })(),
    [blur, change, dispatchRequiredError, dispatchUpdateMessage]
  );
};

export default useHandlers;
