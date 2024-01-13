import React, { useState } from "react";

function SPSettings() {
  const [clutterRejection, setClutterRejection] = useState("ON");

  const containerStyle = {
    width: "90%",
    height: "83vh",
    border: "4px solid blue",
    padding: "10px",
    marginTop: "80px",
  };

  const subContainerStyle1 = {
    width: "40%",
    border: "3px solid black",
    padding: "5px",
    float: "left",
    height: "200px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const subContainerStyle2 = {
    width: "40%",
    border: "3px solid black",
    padding: "5px",
    float: "left",
    height: "250px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const subContainerStyle3 = {
    width: "40%",
    border: "3px solid black",
    padding: "5px",
    float: "left",
    height: "100px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const subContainerStyle4 = {
    width: "40%",
    border: "3px solid black",
    padding: "5px",
    float: "left",
    height: "100px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const subContainerStyle5 = {
    width: "40%",
    border: "3px solid black",
    padding: "5px",
    float: "left",
    height: "100px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const subContainerStyle6 = {
    width: "40%",
    border: "3px solid black",
    padding: "5px",
    float: "left",
    height: "100px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const subContainerStyle8 = {
    width: "90%",
    border: "3px solid black",
    padding: "10px",
    float: "left",
    height: "190px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const headingStyle = {
    fontSize: "18px",
    margin: "0",
    background: "white",
    color: "#007acc",
    padding: "2px",
    textDecoration: "underline",
  };

  const inputTextStyle = {
    width: "70px",
    fontSize: "16px",
    marginRight: "10px",
  };

  const inputNumberStyle = {
    width: "100px",
    fontSize: "16px",
  };

  const selectStyle = {
    width: "100px",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <div style={subContainerStyle1}>
        <h3 style={headingStyle}>Quality Checks</h3>
        <div>
          <label htmlFor="sqi" style={{ ...inputTextStyle, marginTop: "10px" }}>
            SQI:
          </label>
          <input
            type="number"
            id="sqi"
            name="sqi"
            style={{ ...inputNumberStyle, marginTop: "10px" }}
            min="0"
            max="0.99"
            step="0.01"
          />
        </div>
        <div>
          <label
            htmlFor="ccor"
            style={{ ...inputTextStyle, marginTop: "10px" }}
          >
            CCOR:
          </label>
          <input
            type="number"
            id="ccor"
            name="ccor"
            style={{ ...inputNumberStyle, marginTop: "10px" }}
            min="0"
            max="200"
            step="1"
          />
        </div>
        <div>
          <label htmlFor="snr" style={{ ...inputTextStyle, marginTop: "10px" }}>
            SNR:
          </label>
          <input
            type="number"
            id="snr"
            name="snr"
            style={{ ...inputNumberStyle, marginTop: "10px" }}
            min="0"
            max="200"
            step="1"
          />
        </div>
        <div>
          <label htmlFor="csr" style={{ ...inputTextStyle, marginTop: "10px" }}>
            CSR (db):
          </label>
          <input
            type="number"
            id="csr"
            name="csr"
            style={{ ...inputNumberStyle, marginTop: "10px" }}
            min="0"
            max="32"
            step="1"
          />
        </div>
        <div>
          <label htmlFor="log" style={{ ...inputTextStyle, marginTop: "10px" }}>
            LOG (db):
          </label>
          <input
            type="number"
            id="log"
            name="log"
            style={{ ...inputNumberStyle, marginTop: "10px" }}
            min="0.0"
            max="10.0"
            step="0.1"
          />
        </div>
      </div>
      <div style={subContainerStyle2}>
        <h3 style={headingStyle}>Clutter Rejection</h3>
        <div>
          <label
            htmlFor="clutterRejection"
            style={{ ...inputTextStyle, marginTop: "10px" }}
          >
            Clutter Rejection:
          </label>
          <select
            id="clutterRejection"
            name="clutterRejection"
            style={{ ...selectStyle, marginTop: "10px" }}
            value={clutterRejection}
            onChange={(e) => setClutterRejection(e.target.value)}
          >
            <option value="OFF">OFF</option>
            <option value="ON">ON</option>
          </select>
        </div>
        <div style={subContainerStyle8}>
          <h4 style={headingStyle}></h4>
          <div>
            <label
              htmlFor="windowSelection"
              style={{ ...inputTextStyle, marginTop: "10px" }}
            >
              Window Selection:
            </label>
            <select
              id="windowSelection"
              name="windowSelection"
              style={{ ...selectStyle, marginTop: "10px" }}
            >
              <option value="Rectangle">Rectangle</option>
              <option value="Square">Square</option>
              <option value="Ellipse">Ellipse</option>
              <option value="Circular">Circular</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="clutterStdDev"
              style={{ ...inputTextStyle, marginTop: "10px" }}
            >
              Clutter Std Dev (m/s):
            </label>
            <input
              type="number"
              id="clutterStdDev"
              name="clutterStdDev"
              style={{ ...inputNumberStyle, marginTop: "10px" }}
              min="0.0"
              max="2.0"
              step="0.01"
            />
          </div>
          <div>
            <label
              htmlFor="widthClutterPoint"
              style={{ ...inputTextStyle, marginTop: "10px" }}
            >
              Width Clutter Point:
            </label>
            <input
              type="number"
              id="widthClutterPoint"
              name="widthClutterPoint"
              style={{ ...inputNumberStyle, marginTop: "10px" }}
              min="0.0"
              max="100.0"
              step="0.01"
            />
          </div>
          <div>
            <label
              htmlFor="noseClutterPoint"
              style={{ ...inputTextStyle, marginTop: "10px" }}
            >
              Nose Clutter Point:
            </label>
            <input
              type="number"
              id="noseClutterPoint"
              name="noseClutterPoint"
              style={{ ...inputNumberStyle, marginTop: "10px" }}
              min="0.0"
              max="100.0"
              step="0.01"
            />
          </div>
        </div>
      </div>
      <div style={subContainerStyle3}>
        <h3 style={headingStyle}>Selection</h3>
        <div>
          <label
            htmlFor="productSelection"
            style={{ ...inputTextStyle, marginTop: "10px" }}
          >
            Product Selection:
          </label>
          <select
            id="productSelection"
            name="productSelection"
            style={{ ...selectStyle, marginTop: "10px" }}
            disabled={clutterRejection === "OFF"}
          >
            <option value="8-bit">8-bit</option>
            <option value="16-bit">16-bit</option>
            <option value="32-bit">32-bit</option>
            <option value="64-bit">64-bit</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="iqDataCapture"
            style={{ ...inputTextStyle, marginTop: "10px" }}
          >
            IQ Data Capture:
          </label>
          <select
            id="iqDataCapture"
            name="iqDataCapture"
            style={{ ...selectStyle, marginTop: "10px" }}
            disabled={clutterRejection === "OFF"}
          >
            <option value="OFF">OFF</option>
            <option value="ON">ON</option>
          </select>
        </div>
      </div>

      <div style={subContainerStyle4}>
        <h3 style={headingStyle}>Filters</h3>
        <div>
          <label
            htmlFor="speckleFilterState"
            style={{ ...inputTextStyle, marginTop: "10px" }}
          >
            Speckle Filter State:
          </label>
          <select
            id="speckleFilterState"
            name="speckleFilterState"
            style={{ ...selectStyle, marginTop: "10px" }}
            disabled={clutterRejection === "OFF"}
          >
            <option value="Disabled">Disabled</option>
            <option value="Enabled">Enabled</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="interfaceFilter"
            style={{ ...inputTextStyle, marginTop: "10px" }}
          >
            Interface Filter:
          </label>
          <select
            id="interfaceFilter"
            name="interfaceFilter"
            style={{ ...selectStyle, marginTop: "10px" }}
            disabled={clutterRejection === "OFF"}
          >
            <option value="OFF">OFF</option>
            <option value="ON">ON</option>
          </select>
        </div>
      </div>

      <div style={subContainerStyle5}>
        <h3 style={headingStyle}>Clutter Micro Suppression</h3>
        <div>
          <label
            htmlFor="cmsState"
            style={{ ...inputTextStyle, marginTop: "10px" }}
          >
            CMS State:
          </label>
          <select
            id="cmsState"
            name="cmsState"
            style={{ ...selectStyle, marginTop: "10px" }}
            disabled={clutterRejection === "OFF"}
          >
            <option value="8-bit">8-bit</option>
            <option value="16-bit">16-bit</option>
            <option value="32-bit">32-bit</option>
            <option value="64-bit">64-bit</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="cmsProvince"
            style={{ ...inputTextStyle, marginTop: "10px" }}
          >
            CMS Province:
          </label>
          <select
            id="cmsProvince"
            name="cmsProvince"
            style={{ ...selectStyle, marginTop: "10px" }}
            disabled={clutterRejection === "OFF"}
          >
            <option value="OFF">OFF</option>
            <option value="ON">ON</option>
          </select>
        </div>
      </div>

      <div style={subContainerStyle6}>
        <h3 style={headingStyle}>Point Clutter Remover</h3>
        <div>
          <label
            htmlFor="pcrState"
            style={{ ...inputTextStyle, marginTop: "10px" }}
          >
            PCR State:
          </label>
          <select
            id="pcrState"
            name="pcrState"
            style={{ ...selectStyle, marginTop: "10px" }}
            disabled={clutterRejection === "OFF"}
          >
            <option value="Disabled">Disabled</option>
            <option value="Enabled">Enabled</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="pcrOffset"
            style={{ ...inputTextStyle, marginTop: "10px" }}
          >
            PCR Offset:
          </label>
          <select
            id="pcrOffset"
            name="pcrOffset"
            style={{ ...selectStyle, marginTop: "10px" }}
            disabled={clutterRejection === "OFF"}
          >
            <option value="OFF">OFF</option>
            <option value="ON">ON</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SPSettings;
