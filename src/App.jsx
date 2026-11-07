import React from 'react';
import { AuthProvider } from './AuthContext'; 
import { Layout } from './Layouts'; 

function App() {
  return (
    <AuthProvider>
      <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '500px' }}>
        <h2>Главная страница</h2>

        <Layout />
        
      </div>
    </AuthProvider>
  );
}

export default App;