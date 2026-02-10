import validator from "validator";
import React, { useState } from "react";

const PasswordValidator = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Is Strong Password");
    } else {
      setErrorMessage("Is Weak Password");
    }
  };

  return (
    <div
      style={{
        marginLeft: "200px",
      }}
    >
      <pre>
        <h2>Checking Password Strength</h2>
        <span>enter password</span>
        <input
          label="password"
          type="text"
          onChange={(e) => validate(e.target.value)}
        ></input>
        <br />
        {errorMessage == "" ? null : (
          <span
            style={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            {errorMessage}
          </span>
        )}
      </pre>
    </div>
  );
};
export default PasswordValidator;