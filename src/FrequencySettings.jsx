import React from "react";

function FrequencySettings() {
  const containerStyle = {
    width: "50%",
    height: "55vh",
    border: "4px solid blue",
    padding: "10px",
    marginTop: "80px",
    marginLeft: "20px",
    marginRight: "20px",
    paddingTop: "10px",
    display: "flex",
    alignItems: "left",
    justifyContent: "",
  };

  const innerContainerStyle = {
    width: "100%",
    border: "2px solid black",
    padding: "0px",
    height: "52vh",

    justifyContent: "flex-start",
  };

  const headingStyle = {
    background: "#007acc",
    color: "white",
    padding: "10px",
    marginTop: "0",
    textAlign: "center",
  };

  const labelStyle = {
    fontSize: "20px",
    margin: "10px",
  };

  const selectStyle = {
    fontSize: "20px",
    width: "150px", 
    marginLeft: "10px", 
  };

  const inputStyle = {
    fontSize: "20px",
    width: "150px", 
    marginLeft: "10px", 
  };

  return (
    <div style={containerStyle}>
      <div style={innerContainerStyle}>
        <h2 style={headingStyle}>Frequency Selection</h2>

        <br />

        {/* Frequency Agility */}
        <label htmlFor="frequencyAgility" style={labelStyle}>
          Frequency Agility:
        </label>
        <select
          id="frequencyAgility"
          name="frequencyAgility"
          style={selectStyle}
        >
          <option value="fixed">FIXED</option>
          <option value="nonFixed">NON-FIXED</option>
        </select>
        <br />
        <br />
        <br />

        {/* Operating frequency (GHz) */}
        <label htmlFor="operatingFrequency" style={labelStyle}>
          Operating frequency (GHz):
        </label>
        <input
          type="number"
          id="operatingFrequency"
          name="operatingFrequency"
          style={inputStyle}
          min="0"
          step="0.01"
        />
        <br />
        <br />
        <br />

        {/* Agility */}
        <label htmlFor="agility" style={labelStyle}>
          Agility:
        </label>
        <select id="agility" name="agility" style={selectStyle}>
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
        <br />
        <br />
        <br />

        {/* Agility Step Size */}
        <label htmlFor="agilityStepSize" style={labelStyle}>
          Agility Step Size:
        </label>
        <input
          type="number"
          id="agilityStepSize"
          name="agilityStepSize"
          style={inputStyle}
          min="0"
          step="0.01"
        />

        {}
      </div>
    </div>
  );
}

export default FrequencySettings;
