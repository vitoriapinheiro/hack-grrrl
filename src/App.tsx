import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { LoginView, RegisterView, FeedView, ProfileView }  from "./views";
// import { NavBar, Card } from './components';]
import GlobalStyle from './global/globalStyle';
import { colors } from './global/tools';
import { StylesProvider } from '@material-ui/core';
import LoginProvider from './hook/LoggedProvider';

function App() {
  return (
    <StylesProvider injectFirst>
      <BrowserRouter>
        <LoginProvider>
          <ThemeProvider theme={{ main: { colors } }}>
            <Switch>
              <Route exact path="/" component={LoginView} />
              <Route exact path="/registrar" component={RegisterView} />
              <Route exact path="/feed" component={FeedView} />
              <Route exact path="/perfil" component={ProfileView} />
            </Switch>
            <GlobalStyle/>
          </ThemeProvider>
        </LoginProvider>
      </BrowserRouter>
    </StylesProvider>
  );
}

export default App;
