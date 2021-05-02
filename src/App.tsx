import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { LoginView, RegisterView }  from "./views";
// import { NavBar, Card } from './components';
import GlobalStyle from './global/globalStyle';
import { colors } from './global/tools';
import { StylesProvider } from '@material-ui/core'
function App() {
  return (
    <StylesProvider injectFirst>
      <BrowserRouter>
        <ThemeProvider theme={{ main: { colors } }}>
          {/* <NavBar/> */}
          <Switch>
            <Route exact path="/" component={LoginView} />
            <Route exact path="/registrar" component={RegisterView} />
          </Switch>
          <GlobalStyle/>
        </ThemeProvider>
      </BrowserRouter>
    </StylesProvider>
  );
}

export default App;
