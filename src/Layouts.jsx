import React from 'react';
import UserPanel from './UserPanel';

export function Header() {
  return (
    <header style={{ border: '1px solid #999', padding: '10px', marginTop: '20px' }}>
      <h3 style={{ margin: '0 0 10px 0' }}>Панель пользователя</h3>
      <UserPanel />
    </header>
  );
}

export function Layout() {
  return (
    <div>
      <Header />
    </div>
  );
}