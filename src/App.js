import React from 'react';
import './App.css';
import styles from './app.module.css';
const App = () => {
  const myCss = { color: 'red', padding: '50px', fontSize: '24px', fontWeight: '900' };

  return (
    <div align="center" >
      <h1 style={{ color: 'green' }}>React Styles</h1>
      <p style={myCss}>Inline and Object styling</p>
      <hr />
      <p className="heading">External styling</p>
      <hr />
      <div className={styles.heading}>Module styling</div>


    </div >
  )
}

export default App;
