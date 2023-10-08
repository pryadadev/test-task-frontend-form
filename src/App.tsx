import MyInput from "@components/MyInput.tsx";
import MyCheckbox from "@components/MyCheckbox.tsx";
import React, { useState } from "react";
import MyToggle from "@components/MyToggle.tsx";

/*
 * Для решения задачи использую стандартный подход управляемых компонентов
 * с помощью useState для каждого элемента формы
 */

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [inputTextLabel, setInputTextLabel] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [off, setOff] = useState(false);

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

  return (
    <div className="bg-accentColor bg-opacity-20">
      <div className="bg-backgroundColor min-h-[100dvh] w-[760px] px-[98px] pt-[96px] pb-[100px] m-auto flex flex-col gap-8">
        {/* TODO: TEMP DEV BUTTON */}
        <button
          className="p-4 border-2 border-borderColor rounded-lg"
          onClick={() => {
            console.log("------------- NEW RESULTS -------------")
            console.log("username", username);
            console.log("password", password);
            console.log("inputTextLabel", inputTextLabel);
            console.log("rememberMe", rememberMe);
            console.log("off", off);
          }}
        >
          DEV SHOW VALUES
        </button>
        {/* TODO: TEMP DEV BUTTON */}

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
          validation={{ minLength: 4, maxLength: 12 }}
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
      </div>
    </div>
  );
};

export default App;
