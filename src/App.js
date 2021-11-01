import React, { useState } from "react";
import "./App.css";

export function replaceCamelWithSpace(colorName) {
  const result = colorName.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult.trim();
}
function App() {
  const [color, setColor] = useState("mediumVioletRed");
  const [checked, setChecked] = useState(false);
  const newColor =
    color === "midnightBlue" ? "mediumVioletRed" : "midnightBlue";
  const handleCheckBox = () => {
    setChecked(!checked);
  };
  const disabledButton = checked ? "disabled" : "";
  const appStyle = {
    margin: "20px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "space-around",
  };
  return (
    <div style={appStyle}>
      <button
        className={`ui primary button ${disabledButton}`}
        data-testid="change-color-button"
        style={{ backgroundColor: color }}
        type="button"
        onClick={() => {
          setColor(newColor);
        }}
        disabled={checked}
      >
        Change to {replaceCamelWithSpace(newColor)}
      </button>
      <form
        className="ui checkbox"
        style={{
          marginTop: "5px",
        }}
      >
        <input
          className="ui checkbox"
          type="checkbox"
          checked={checked}
          id="disable-button"
          onChange={handleCheckBox}
        />
        <label htmlFor="disable-button">Disable button</label>
      </form>
    </div>
  );
}

export default App;
