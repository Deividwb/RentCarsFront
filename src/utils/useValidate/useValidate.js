import { useMemo } from "react";

import { messagesError } from "../constants";
import useUpdate from "../useUpdate/useUpdate";
import ReactDOM from "react-dom";

const useValidate = ({
  state: { data: dataState = {}, messages: messagesState = {} },
  requiredFields = [],
  validateFields = [],
  updateMessage,
}) => {
  const { dispatchUpdateMessage } = useUpdate(() => {}, updateMessage);

  return useMemo(
    () =>
      new (class Validate {
        getClass = () => {
          return Validate;
        };

        verifyFieldsAndClear = (
          messages = messagesState,
          requireds = requiredFields,
          validations = validateFields
        ) => {
          requireds
            .filter(
              ({ condition, name }) =>
                Boolean(condition) && !condition(dataState[name], dataState)
            )
            .map(({ name }) => {
              messages[name] && dispatchUpdateMessage(name);
            });

          validations
            .filter(
              ({ validation, name }) =>
                Boolean(validation) && validation(dataState[name], dataState)
            )
            .map(({ name }) => {
              messages[name] && dispatchUpdateMessage(name);
            });

          return;
        };

        validate = (
          data = dataState,
          requireds = requiredFields,
          validations = validateFields
        ) => {
          const required = requireds
            .filter(
              ({ name, condition }) =>
                (data[name] === null ||
                  data[name] === undefined ||
                  data[name] === "") &&
                (!condition || condition(data[name], data))
            )
            .map(({ name, message }) => [
              name,
              message || messagesError.requiredField,
            ]);

          const validation = validations
            .filter(
              ({ validation, name }) =>
                Boolean(validation) && !validation(data[name], data)
            )
            .map(({ name, message }) => [name, message]);

          const messages = [...validation, ...required];
          return Object.fromEntries(messages);
        };

        hasError = () => {
          this.verifyFieldsAndClear();

          const messages = this.validate();

          dispatchUpdateMessage(messages);

          const errorMessageIndex = Object.values(messages).findIndex(
            (message) => !message || message !== ""
          );

          if (errorMessageIndex >= 0) {
            const fieldNames = Object.keys(messages);
            const fieldNameWithError = fieldNames[errorMessageIndex];

            const nameInput = ReactDOM.findDOMNode(
              document.getElementById(fieldNameWithError)
            );
            nameInput.focus();
          }

          return errorMessageIndex >= 0;
        };

        convertToNullable = (data = dataState) => {
          return Object.keys(data).reduce((acc, item) => {
            if (data[item] === "") {
              return { ...acc, [item]: null };
            }
            return { ...acc, [item]: data[item] };
          }, {});
        };

        prepareData = (data = dataState) => ({
          ...this.convertToNullable(data),
        });
      })(),
    [
      dataState,
      dispatchUpdateMessage,
      messagesState,
      requiredFields,
      validateFields,
    ]
  );
};

export default useValidate;
