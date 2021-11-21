import '@/styles/index.scss';
import Layout from '@/layout';
import { Provider } from 'react-redux';
import store from '../store';
import { lightTheme, darkTheme } from '@/styles/theme';
import { useDarkMode } from '@/hooks/useDarkMode';

export const ThemeContext = React.createContext({});

function App({ Component, pageProps }) {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const useTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <Provider store={store}>
        <ThemeContext.Provider value={{ useTheme, toggleTheme }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeContext.Provider>
      </Provider>
      <style global jsx>{`
        body {
          background: var(--cr-background-primary);
        }
      `}</style>
    </>
  );
}

export default App;
