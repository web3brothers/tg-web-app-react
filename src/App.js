import React, { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';

function App() {

  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);


  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <button onClick={close}>Close</button>
    </div>
  );
}

export default App;
