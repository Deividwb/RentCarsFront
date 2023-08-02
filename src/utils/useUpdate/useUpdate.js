import { useMemo, useCallback } from "react";

import { useDispatch } from "react-redux";

import { messagesError } from "../constants";

const useUpdate = (updateForm, updateMessage) => {
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

  const isContextAPI = updateMessage.isContext || updateForm.isContext;
  const dispatchRedux = useDispatch();

  const dispatch = useMemo(
    () => (isContextAPI ? (func) => func : dispatchRedux),
    [dispatchRedux, isContextAPI]
  );

  const update = useCallback(
    (field, value, func) => {
      if (typeof field === "string") {
        dispatch(
          func({
            [field]: value,
          })
        );
        return;
      }
      dispatch(func(field));
    },
    [dispatch]
  );

  return useMemo(
    () =>
      new (class Update {
        getClass = () => {
          return Update;
        };

        dispatchUpdateForm = (field, value) => {
          update(field, value, updateForm);
        };

        dispatchUpdateMessage = (field, value = "") => {
          update(field, value, updateMessage);
        };

        dispatchRequiredError = (field) => {
          update(field, messagesError.requiredField, updateMessage);
        };
      })(),
    [update, updateForm, updateMessage]
  );
};

export default useUpdate;
