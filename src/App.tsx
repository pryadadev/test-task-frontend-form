import React, { useState } from "react";
import MyInput from "@components/MyInput.tsx";
import MyCheckbox from "@components/MyCheckbox.tsx";
import MyToggle from "@components/MyToggle.tsx";
import MyRadio from "@components/MyRadio.tsx";
import MyDropdown from "@components/MyDropdown.tsx";
import MyButton from "@components/MyButton.tsx";
import { Validation } from "@types.ts";

/*
 * Для решения задачи использую стандартный подход управляемых компонентов
 * с помощью useState для каждого элемента формы
 */

const App = () => {
  const [username, setUsername] = useState("");
  const usernameValidation: Validation = {
    minLength: 4,
    maxLength: 32,
    pattern: /^[a-zA-Z0-9\-_]+$/,
  };
  const usernameAssistText = `Your username must be between ${usernameValidation.minLength} and
    ${usernameValidation.maxLength} characters long and can only contain ${usernameValidation.pattern}`;

  const [password, setPassword] = useState("");
  const passwordValidation: Validation = {
    minLength: 4,
    maxLength: 24,
    pattern: /^[a-zA-Z0-9!@#$%^&*\-_]+$/,
  };
  const passwordAssistText = `Your username must be between ${passwordValidation.minLength} and
    ${passwordValidation.maxLength} characters long and can only contain ${passwordValidation.pattern}`;

  const [email, setEmail] = useState("");
  const emailValidation: Validation = {
    minLength: 4,
    maxLength: 64,
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  };

  const [rememberMe, setRememberMe] = useState(false);
  const [receiveNews, setReceiveNews] = useState(false);

  const radioSelectionOptions = [
    "Radio selection 1",
    "Radio selection 2",
    "Radio selection 3",
  ];
  const [radioSelection, setRadioSelection] = useState(1);

  const dropdownTitleOptions = [
    "Dropdown option",
    "Dropdown option 1",
    "Dropdown option 2",
  ];
  const [dropdownTitle, setDropdownTitle] = useState(0);

  const isValidValue = (value: string, validation: Validation) => {
    // Сначала проверяется наличие требования, а потом соответствие требованию
    return (
      (validation.minLength && value.length >= validation.minLength) &&
      (validation.maxLength && value.length <= validation.maxLength) &&
      (validation.pattern && validation.pattern.test(value))
    );
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setEmail(event.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleReceiveNewsChange = () => {
    setReceiveNews((prev) => !prev);
  };

  const handleRadioSelectionChange = (value: number) => {
    setRadioSelection(value);
  };

  const handleDropdownTitleChange = (value: number) => {
    setDropdownTitle(value);
  };

  const handleShowJson = () => {
    alert(
      JSON.stringify({
        username: username,
        password: password,
        email: email,
        rememberMe: rememberMe,
        receiveNews: receiveNews,
        radioSelection: radioSelection,
        dropdownTitle: dropdownTitle,
      }),
    );
  };

  const isNextButtonDisabled = () => {
    return (
      username.length + password.length + email.length === 0 ||
      !isValidValue(username, usernameValidation) ||
      !isValidValue(password, passwordValidation) ||
      !isValidValue(email, emailValidation)
    );
  };

  return (
    <div className="bg-accentColor bg-opacity-20">
      <div className="bg-backgroundColor min-h-[100dvh] w-[760px] px-[98px] pt-[96px] pb-[100px] m-auto flex flex-col gap-8">
        <MyInput
          label="Username"
          assistText={usernameAssistText}
          errorText={"Your username doesn't meet requirements: " + usernameAssistText}
          validation={usernameValidation}
          placeholder="Enter username"
          value={username}
          onChange={handleUsernameChange}
          isValidValue={isValidValue}
        />
        <MyInput
          label="Password"
          assistText={passwordAssistText}
          errorText={"Your password doesn't meet requirements: " + passwordAssistText}
          validation={passwordValidation}
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
          isValidValue={isValidValue}
        />
        <MyInput
          label="Email"
          assistText={"Enter a valid email"}
          errorText={"You have entered an invalid email"}
          validation={emailValidation}
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
          isValidValue={isValidValue}
        />
        <MyCheckbox
          label="Remember me"
          checked={rememberMe}
          onChange={handleRememberMeChange}
        />
        <MyToggle
          label="Receive news by email"
          toggled={receiveNews}
          onChange={handleReceiveNewsChange}
        />
        <MyRadio
          options={radioSelectionOptions}
          selected={radioSelection}
          onChange={handleRadioSelectionChange}
        />
        <MyDropdown
          label="Dropdown Title"
          options={dropdownTitleOptions}
          selected={dropdownTitle}
          onChange={handleDropdownTitleChange}
        />
        <div className="flex justify-between">
          <MyButton label="Cancel" secondary />
          <MyButton
            label="Next"
            primary
            onClick={handleShowJson}
            disabled={isNextButtonDisabled()}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
