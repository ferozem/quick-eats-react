import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    console.log('[AppContext] Theme changed:', theme);
  }, [theme]);

  useEffect(() => {
    console.log('[AppContext] Cart items updated:', cartItems);
  }, [cartItems]);

  console.log('[AppContext] AppProvider rendered');

  return (
    <AppContext.Provider value={{ cartItems, setCartItems, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  console.log('[AppContext] useAppContext hook called');
  return context;
}