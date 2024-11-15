import { useState } from 'react';
import AppContext from './AppContext';

export const AppContextProvider = ({ children }) => {
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [databaseResponse, setDatabaseResponse] = useState(true);

  const value = {
    isLoggingIn,
    setIsLoggingIn,
    username,
    setUsername,
    password,
    setPassword,
    passwordRepeat,
    setPasswordRepeat,
    databaseResponse,
    setDatabaseResponse
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};