import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FormContainer from "./projects/basicForm/FormContainer";
import PasswordValidator from "./projects/passwordValidator/PasswordValidator";
function App() {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <>
      <button onClick={() => setShowPanel(true)}>Show Form</button>
      {showPanel && <FormContainer />}{" "}
      <button onClick={() => setShowPanel(false)}>Hide Form</button>
      <button onClick={() => setShowPanel(true)}>Show Password Validator</button>
      {showPanel && <PasswordValidator />}{" "}
    </>
  );
}

export default App;
