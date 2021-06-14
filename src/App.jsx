/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import styles from './App.module.scss';
import Titulo from './Titulo';

function App() {
  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    setInterval(() => setTime(Date.now()), 1000);
  }, []);
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          Edit&nsbp;
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <button type="button" onClick={() => setTime(Date.now())}>Set time</button>
        <Titulo mensaje={time} />
        <p>{process.env.REACT_APP_NOT_SECRET_CODE}</p>
        <p>{process.env.NODE_ENV}</p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
