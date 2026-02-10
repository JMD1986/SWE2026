import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FormContainer from "./projects/basicForm/FormContainer";
function App() {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <>
      <button onClick={() => setShowPanel(true)}>Show Panel</button>
      {showPanel && <FormContainer />}{" "}
    </>
  );
}

export default App;
