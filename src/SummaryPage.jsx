import React from 'react';

function SummaryPage() {
 
  const styles = {
    container: {
      textAlign: 'center',
      paddingTop: '20px',
      border: '4px solid #2196F3', 
      borderRadius: '10px',
      padding: '20px',
      margin: '20px auto',
      maxWidth: '300px', 
      marginTop: '210px',
      height: '130px',
    },
    buttonContainer: {
      marginTop: '20px',
    },
    button: {
      display: 'block', 
      margin: '10px auto', 
      width: '80%', 
      backgroundColor: '#4CAF50', 
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      cursor: 'pointer',
    },
    resetButton: {
      backgroundColor: '#FF5733', 
    },
  };

  return (
   
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>DOWNLOAD CONFIG</button>
        <button style={{ ...styles.button, ...styles.resetButton }}>RESET CONFIG</button>
      </div>
    </div>
    
  );
}

export default SummaryPage;
