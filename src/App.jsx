import { useState } from 'react';
import './App.css';

let clickCount = 0;

function App() {
  const [isHovered, setIsHovered] = useState(false);

  function handleClick() {
    clickCount++;
    console.log('Нажатий:', clickCount);
  }

  function handleChange(event) {
    console.log('Текущий ввод:', event.target.value);
  }

  function handleMouseOver() {
    console.log('Мышь наведена!');
    setIsHovered(true); 
  }

  function handleMouseOut() {
    setIsHovered(false); 
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Практика событий в React</h1>

      <section style={{ marginBottom: '30px' }}>
        <h2>1. Кнопка-счетчик</h2>
        <button onClick={handleClick}>Нажми меня</button>
        <p>Количество нажатий смотрите в консоли</p>
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>2. Поле ввода</h2>
        <input 
          type="text" 
          placeholder="Введите имя" 
          onChange={handleChange} 
        />
        <p>Смотрите имя в консоли</p>
      </section>

      <section>
        <h2>3. Наведение мыши</h2>
        <div 
          onMouseOver={handleMouseOver} 
          onMouseOut={handleMouseOut}
          className={isHovered ? 'highlight' : ''}
        >
          Наведи на меня
        </div>
      </section>
    </div>
  );
}

export default App;