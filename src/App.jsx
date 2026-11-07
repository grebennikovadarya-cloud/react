import React, { useState, useRef } from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);

  const timerRef = useRef(null);

  const handleStart = () => {
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
  };

  const handleStop = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null; 
    }
  };

  const handleReset = () => {
    handleStop();
    setSeconds(0);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Секундомер (useRef + setInterval)</h2>
      
      <p style={{ fontSize: '18px' }}>
        Прошло секунд: <strong>{seconds}</strong>
      </p>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={handleStart} style={{ padding: '5px 15px', cursor: 'pointer' }}>
          Старт
        </button>
        <button onClick={handleStop} style={{ padding: '5px 15px', cursor: 'pointer' }}>
          Стоп
        </button>
        <button onClick={handleReset} style={{ padding: '5px 15px', cursor: 'pointer' }}>
          Сброс
        </button>
      </div>
    </div>
  );
}

export default App;