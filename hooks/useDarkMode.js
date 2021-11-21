import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.dataset.theme = 'dark';
      setMode('dark');
    } else {
      document.documentElement.dataset.theme = 'light';
      setMode('light');
    }
  };

  useEffect(() => {
    // const localTheme = window.localStorage.getItem('theme');
    // if (
    //   window.matchMedia &&
    //   window.matchMedia('(prefers-color-scheme: dark)').matches &&
    //   !localTheme
    // ) {
    //   setMode('dark');
    //   document.documentElement.dataset.theme = 'dark';
    // } else if (localTheme) {
    //   document.documentElement.dataset.theme = localTheme;
    //   setTheme(localTheme);
    // } else {
    //   document.documentElement.dataset.theme = 'light';
    //   setMode('light');
    // }

    document.documentElement.dataset.theme = 'light';
    setMode('light');
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
