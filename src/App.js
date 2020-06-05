import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import usePersistedState from './utils/usePersistedState';
import Header from './components/Header';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import './Config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ThemeProvider theme={theme}>
            <Header toggleTheme={toggleTheme} />
            <Routes toggleTheme={toggleTheme} />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
