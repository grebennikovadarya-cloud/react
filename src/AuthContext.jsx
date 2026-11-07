import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userName, setUserName] = useState('');

  const login = (name) => {
    setUserName(name);
  };

  const logout = () => {
    setUserName('');
  };

  return (
    <AuthContext.Provider value={{ userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}