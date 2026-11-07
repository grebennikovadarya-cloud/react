import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Главная страница</h1>;
}
function About() {
  return <h1>О нас</h1>;
}

function Contacts() {
  return <h1>Контакты</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        
        <nav style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
          <Link to="/">Главная</Link>
          <Link to="/about">О нас</Link>
          <Link to="/contacts">Контакты</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;