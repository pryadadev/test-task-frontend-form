import { Validation } from "@types.ts";
import React, { useState } from "react";
import ErrorIcon from "@icons/ErrorIcon.tsx";

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  assistText?: string;
  errorText?: string;
  validation?: Validation;
  isValidValue?: (value: string, validation: Validation) => boolean | 0 | undefined;
  type?: string;
}

const MyInput = (props: Props) => {
  const {
    value,
    onChange,
    label = "Input Text Label",
    placeholder = "Type here",
    assistText = "Assistive Text",
    errorText = "Error message informing me of a problem",
    validation = {
      minLength: 0,
      maxLength: Infinity,
      pattern: /^[\s\S]*$/
    },
    isValidValue,
    type = "text"
  } = props;

  const [error, setError] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isValidValue) {
      if (isValidValue(event.target.value, validation)) {
        setError(false);
      } else {
        setError(true);
      }
    }
    onChange(event);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="font-semibold text-[12px]">{label}</div>

      <div className="relative">
        <input
          className={`h-14 w-full flex flex-col rounded-lg p-4 pr-12 gap-2.5 border-[1px] border-borderColor placeholder-textDisabledColor
          text-textColor focus:outline-0 ${
            error
              ? "border-errorColor border-2 p-[15px]"
              : "focus:border-2 focus:border-accentColor focus:p-[15px]"
          }`}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleInputChange}
        />
        {error && (
          <div className="absolute top-4 right-4">
            <ErrorIcon />
          </div>
        )}
      </div>

      {assistText !== "" && (
        <div className="text-[12px]">
          {error ? (
            <span className="text-errorColor">{errorText}</span>
          ) : (
            assistText
          )}
        </div>
      )}
    </div>
  );
};

export default MyInput;
