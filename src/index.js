import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const container = document.getElementById('root');
const root = createRoot(container);
const theme = createTheme({
  palette: {
    primary: {
      light: '#f2aeae',
      main: '#ef9a9a',
      dark: '#a76b6b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffd7db',
      main: '#fff',
      dark: '#b28f93',
      contrastText: '#000',
    },
  },
  layout: {
    drawerWidth: 232
  }
});

root.render(
  <React.StrictMode>
    <Provider store={store}>¿
      <ThemeProvider theme={theme}>
      <CssBaseline/>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
