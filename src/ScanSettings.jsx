import React from "react";

function ScanSettings() {
  const containerStyle = {
    width: "93%",
    height: "70vh",
    border: "4px solid blue",
    padding: "10px",
    marginTop: "80px",
    marginLeft: "20px",
    marginRight: "20px",
    paddingTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  };

  const subContainerStyle = {
    marginBottom: "20px",
    flex: "6",
    boxSizing: "border-box",
  };

  const scanCategoryStyle = {
    height: "30vh",
    marginTop: "60px",
    marginBottom: "10px",
    border: "2px solid black",
  };

  const volumeScanStyle = {
    height: "30vh",
    marginTop: "60px",
    border: "2px solid black",
    marginRight: "10px",
  };

  const elevationParamsStyle = {
    width: "80%",
    height: "67vh",
    marginLeft: "10px",
    border: "2px solid black",
    marginTop: "10px",
  };

  const headingStyle = {
    margin: "0",
    padding: "10px 20px",
    background: "#007acc", 
    color: "white",
    textAlign: "center",
  };

  const labelStyle = {
    fontSize: "25px",
    margin: "25px",
  };

  const selectStyle = {
    fontSize: "25px",
  };

  const inputStyle = {
    fontSize: "25px",
    width: "80px",
    textAlign: "center",
  };

  const decimalInputStyle = {
    fontSize: "25px",
    width: "80px",
    textAlign: "center",
  };

  const scanProfileOptions = [
    "max_velocity1",
    "max_velocity2",
    "max_range1",
    "max_range2",
    "range_velocity1",
    "range_velocity2",
  ];

  return (
    <div style={containerStyle}>
      <h2>Basic</h2>

      {/* Subcontainer 1: Scan Category */}
      <div style={{ ...subContainerStyle, ...scanCategoryStyle }}>
        <h3 style={{ ...headingStyle, padding: "15px 20px" }}>Scan Category</h3>
        {/* Polarisation dropdown */}
        <br />
        <label htmlFor="polarisation" style={labelStyle}>
          Polarisation:
        </label>
        <select id="polarisation" name="polarisation" style={selectStyle}>
          <option value="horizontal">Horizontal</option>
          <option value="vertical">Vertical</option>
        </select>
        <br />
        <br /> {/*  line break */}
        {/* Scan type dropdown */}
        <label htmlFor="scanType" style={labelStyle}>
          Scan type:
        </label>
        <select id="scanType" name="scanType" style={selectStyle}>
          <option value="volumeScan">Volume Scan</option>
          <option value="sectorAZ">Sector AZ</option>
          <option value="sectorEin">Sector Ein</option>
          <option value="designateScan">Designate Scan</option>
        </select>
      </div>

      {/* Subcontainer 2: Volume Scan Parameters */}
      <div style={{ ...subContainerStyle, ...volumeScanStyle }}>
        <h3 style={{ ...headingStyle, padding: "15px 20px" }}>
          Volume Scan Parameters
        </h3>
        {/*  Number of Elevations */}
        <br />
        <br />
        <label htmlFor="numElevations" style={labelStyle}>
          Number of Elevations:
        </label>
        <input
          type="number"
          id="numElevations"
          name="numElevations"
          style={inputStyle}
          min="1"
          max="10"
        />
      </div>

      {/* Subcontainer 3: Elevation Parameters */}
      <div style={{ ...subContainerStyle, ...elevationParamsStyle }}>
        <h3 style={{ ...headingStyle, padding: "10px 20px" }}>
          Elevation Parameters
        </h3>
        {/* Table for Elevation Parameters */}
        <table>
          <thead>
            <tr>
              <th>ELN_ID</th>
              <th>ELN</th>
              <th>RPM RATE</th>
              <th>SCAN PROFILE</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, index) => (
              <tr key={index}>
                <td>ELN_{index + 1}</td>
                <td>
                  <input
                    type="number"
                    style={inputStyle}
                    step="any"
                    min="1"
                    max="10"
                  />
                </td>
                <td>
                  <input type="number" style={decimalInputStyle} step="0.01" />
                </td>
                <td>
                  <select style={selectStyle}>
                    {scanProfileOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ScanSettings;
