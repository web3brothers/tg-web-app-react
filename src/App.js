import React, { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  }, []);


  const close = () => {
    tg.close();
  }

  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <button onClick={close}>Close</button>
    </div>
  );
}

export default App;
