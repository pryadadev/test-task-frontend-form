import React, { useState } from "react";
import MyInput from "@components/MyInput.tsx";
import MyCheckbox from "@components/MyCheckbox.tsx";
import MyToggle from "@components/MyToggle.tsx";
import MyRadio from "@components/MyRadio.tsx";
import MyDropdown from "@components/MyDropdown.tsx";
import MyButton from "@components/MyButton.tsx";

/*
 * Для решения задачи использую стандартный подход управляемых компонентов
 * с помощью useState для каждого элемента формы
 */

const App = () => {
  const [username, setUsername] = useState("");

  const [passwordMinLength, passwordMaxLength] = [4, 12];
  const [password, setPassword] = useState("");
  const [inputTextLabel, setInputTextLabel] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [off, setOff] = useState(false);

  const radioSelectionOptions = [
    "Radio selection 1",
    "Radio selection 2",
    "Radio selection 3"
  ];
  const [radioSelection, setRadioSelection] = useState(1);

  const dropdownTitleOptions = [
    "Dropdown option",
    "Dropdown option 1",
    "Dropdown option 2"
  ];
  const [dropdownTitle, setDropdownTitle] = useState(0);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleInputTextLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTextLabel(event.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleOffChange = () => {
    setOff(!off);
  };

  const handleRadioSelectionChange = (value: number) => {
    setRadioSelection(value);
  };

  const handleDropdownTitleChange = (value: number) => {
    setDropdownTitle(value);
  };

  const handleShowJson = () => {
    alert(JSON.stringify({
      "username": username,
      "password": password,
      "inputTextLabel": inputTextLabel,
      "rememberMe": rememberMe,
      "off": off,
      "radioSelection": radioSelection,
      "dropdownTitle": dropdownTitle
    }));
  };

  const isNextButtonDisabled = () => !(password.length >= passwordMinLength && password.length <= passwordMaxLength);

  return (
    <div className="bg-accentColor bg-opacity-20">
      <div className="bg-backgroundColor min-h-[100dvh] w-[760px] px-[98px] pt-[96px] pb-[100px] m-auto flex flex-col gap-8">
        {/* TEMP DEV BUTTON */}
        {/*<button*/}
        {/*  className="p-4 border-2 border-borderColor rounded-lg"*/}
        {/*  onClick={() => {*/}
        {/*    console.log("------------- NEW RESULTS -------------")*/}
        {/*    console.log("username", username);*/}
        {/*    console.log("password", password);*/}
        {/*    console.log("inputTextLabel", inputTextLabel);*/}
        {/*    console.log("rememberMe", rememberMe);*/}
        {/*    console.log("off", off);*/}
        {/*    console.log("radioSelection", radioSelection);*/}
        {/*    console.log("dropdownTitle", dropdownTitle);*/}
        {/*  }}*/}
        {/*>*/}
        {/*  DEV SHOW VALUES*/}
        {/*</button>*/}
        {/* TEMP DEV BUTTON */}

        <MyInput
          label="Username"
          assistText=""
          placeholder="Enter username"
          value={username}
          onChange={handleUsernameChange}
        />
        <MyInput
          label="Password"
          assistText="Your password is between 4 and 12 characters"
          validation={{ minLength: passwordMinLength, maxLength: passwordMaxLength }}
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
        />
        <MyInput
          value={inputTextLabel}
          onChange={handleInputTextLabelChange}
        />
        <MyCheckbox
          label="Remember me"
          checked={rememberMe}
          onChange={handleRememberMeChange}
        />
        <MyToggle
          label="Off"
          toggled={off}
          onChange={handleOffChange}
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
