import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import styles from './App.module.scss';

function App() {
  const [paises, setPaises] = useState([]);
  const [error, setError] = useState('');

  // Se inicializa el componente App
  useEffect(() => {
    // Llamo al endpoint https://restcountries.eu/rest/v2/all?fields=name
    const getPaises = async () => {
      // Capturo los posibles errores con try/catch
      try {
        const response = await axios.get('https://restcountriddes.eu/rest/v2/all?fields=name');
        setPaises(response.data);
        // const pais = new Country();
        // const nombrePais = pais.
      } catch (err) {
        setError('Hubo un error al traer los paises');
      }
    };
    getPaises();
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
        <p>{process.env.REACT_APP_NOT_SECRET_CODE}</p>
        <p>{process.env.NODE_ENV}</p>
        {error}
        Hola
        {paises.map((pais) => (
          <p>{pais.name}</p>
        ))}
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
