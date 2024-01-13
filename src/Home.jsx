import React from "react";

function Home() {

  const styles = {
    container: {
      textAlign: "center",
      paddingTop: "20px",
      border: "4px solid #2196F3", 
      borderRadius: "10px",
      padding: "20px",
      margin: "20px auto",
      maxWidth: "800px", 
      marginTop: "70px",
    },
    heading: {
      fontSize: "36px",
      color: "#333",
      marginBottom: "10px",
      textTransform: "uppercase",
    },
    paragraph: {
      fontSize: "18px",
      color: "#555",
      lineHeight: "1.5",
      marginBottom: "20px",
    },
    highlight: {
      color: "#FF5733", 
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Doppler Weather Radar (DWR) </h2>
      <p style={styles.paragraph}>
        Doppler Weather Radar (<span style={styles.highlight}>DWR</span>) has a
        significant presence in India's meteorological infrastructure. These
        radar systems are strategically located across the country to monitor
        and predict weather patterns.
      </p>
      <p style={styles.paragraph}>
        India's meteorological department employs DWR technology to track
        monsoons, cyclones, and other weather phenomena. The data collected by
        these radar systems is instrumental in issuing timely warnings and
        forecasts, especially during the monsoon season when the country
        experiences heavy rainfall and the risk of flooding.
      </p>
      <p style={styles.paragraph}>
        The DWR network in India is continually expanding to improve weather
        forecasting capabilities and enhance disaster preparedness. These radar
        systems provide real-time information on rainfall intensity, wind
        patterns, and storm movements, contributing to public safety and
        agricultural planning.
      </p>
      <p style={styles.paragraph}>
        The first use of weather radar on television in the United States was in
        September 1961. During the 1970s, radars began to be standardized and
        organized into networks. The first devices to capture radar images were
        developed. The number of scanned angles was increased to get a
        three-dimensional view of the precipitation, so that horizontal
        cross-sections (CAPPI) and vertical cross-sections could be performed.
      </p>
      <p style={styles.paragraph}>
        Weather radars send directional pulses of microwave radiation, on the
        order of one microsecond long, using a cavity magnetron or klystron tube
        connected by a waveguide to a parabolic antenna.
      </p>
    </div>
  );
}

export default Home;
