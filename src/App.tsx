import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { LoginView }  from "./views";
import { NavBar, Card } from './components';
import GlobalStyle from './global/globalStyle';
import { colors } from './global/tools';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={{ main: { colors } }}>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={LoginView} />
        </Switch>
        <GlobalStyle/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
