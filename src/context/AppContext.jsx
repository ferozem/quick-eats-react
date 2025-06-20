import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Theme change side effects could be handled here
  }, [theme]);

  useEffect(() => {
    // Cart items update side effects could be handled here
  }, [cartItems]);

  return (
    <AppContext.Provider value={{ cartItems, setCartItems, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  return context;
}