import React from "react";

function CalibrationSettings() {
  const containerStyle = {
    width: "60%", 
    height: "80vh",
    border: "4px solid blue",
        padding: "10px",
    marginTop: "80px", 
  };

  const subContainer1Style = {
    width: "50%",
    border: "3px solid black",
    padding: "10px",
    float: "left",
    height: "40px",
    marginBottom: "20px",
  };
  
  const subContainer2Style = {
    width: "60%",
    border: "3px solid black",
    paddingTop: "0px",
    float: "left",
    height: "260px",
    marginBottom: "20px",
    padding: "10px",
  };
  
  const headingStyle = {
    background: "#007acc",
    color: "white",
    textAlign: "center",
    padding: "10px",
    margin: "0px",
  };
  
  const subContainer3Style = {
    width: "40%",
    border: "3px solid black",
    padding: "10px",
    float: "left",
    height: "40px",
    marginBottom: "10px",
    marginRight: "10px",
  };
  
  const subContainer4Style = {
    width: "40%",
    border: "3px solid black",
    padding: "10px",
    float: "left",
    height: "40px",
    marginBottom: "30px",
  };
  
  const subContainer5Style = {
    width: "40%",
    border: "3px solid black",
    padding: "10px",
    float: "left",
    height: "40px",
    marginBottom: "10px",
    marginLeft: "190px",
  };
  

  const labelStyle = {
    fontSize: "20px",
    marginRight: "10px",
  };

  const selectStyle = {
    fontSize: "20px",
  };

  return (
    <div style={containerStyle}>
      <div style={subContainer1Style}>
        <label htmlFor="simulation" style={labelStyle}>
          Simulation:
        </label>
        <select id="simulation" name="simulation" style={selectStyle}>
          <option value="OFF">OFF</option>
          <option value="ON">ON</option>
        </select>
      </div>
      <div style={subContainer2Style}>
        <h2 style={headingStyle}>Simulation Parameters</h2>
        <label htmlFor="calZee" style={{ ...labelStyle, marginTop: "10px" }}>
          Cal Zee (db):
        </label>
        <input
          type="number"
          id="calZee"
          name="calZee"
          style={{ ...selectStyle, marginTop: "10px" }}
          min="-110"
          max="-10"
          step="0.1"
        />
        <br />
        <br />
        <label htmlFor="calVel" style={{ ...labelStyle, marginTop: "10px" }}>
          Cal Vel (m/s):
        </label>
        <input
          type="number"
          id="calVel"
          name="calVel"
          style={{ ...selectStyle, marginTop: "10px" }}
          min="-60"
          max="60"
          step="0.1"
        />
        <br />
        <br />
        <label
          htmlFor="calRangeStart"
          style={{ ...labelStyle, marginTop: "10px" }}
        >
          Cal Range Start (km):
        </label>
        <input
          type="number"
          id="calRangeStart"
          name="calRangeStart"
          style={{ ...selectStyle, marginTop: "10px" }}
          min="0"
          max="100"
          step="1"
        />
        <br />
        <br />
        <label
          htmlFor="calRangeBins"
          style={{ ...labelStyle, marginTop: "10px" }}
        >
          Cal Range Bins:
        </label>
        <input
          type="number"
          id="calRangeBins"
          name="calRangeBins"
          style={{ ...selectStyle, marginTop: "10px" }}
          min="0"
          max="100"
          step="1"
        />
      </div>
      <div style={subContainer3Style}>
        <label htmlFor="zdr" style={{ ...labelStyle, marginTop: "10px" }}>
          ZDR (db):
        </label>
        <input
          type="number"
          id="zdr"
          name="zdr"
          style={{ ...selectStyle, marginTop: "10px" }}
          min="-3"
          max="8"
          step="0.1"
        />
      </div>
      <div style={subContainer4Style}>
        <label htmlFor="phidp" style={{ ...labelStyle, marginTop: "10px" }}>
          PHIDP (dg):
        </label>
        <input
          type="number"
          id="phidp"
          name="phidp"
          style={{ ...selectStyle, marginTop: "10px" }}
          min="0"
          max="100"
          step="1"
        />
      </div>
      <div style={subContainer5Style}>
        <label
          htmlFor="ldrSimulation"
          style={{ ...labelStyle, marginTop: "10px" }}
        >
          LDR Simulation (db):
        </label>
        <input
          type="number"
          id="ldrSimulation"
          name="ldrSimulation"
          style={{ ...selectStyle, marginTop: "10px" }}
          min="-40"
          max="8"
          step="0.1"
        />
      </div>
    </div>
  );
}

export default CalibrationSettings;
