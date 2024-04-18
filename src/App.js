import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleEvaluate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <br />
      <div className="buttons">
        {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"].map(
          (button, index) => (
            <button
              key={index}
              onClick={() => {
                if (button === "C") {
                  handleClear();
                } else if (button === "=") {
                  handleEvaluate();
                } else {
                  handleButtonClick(button);
                }
              }}
            >
              {button}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default App;