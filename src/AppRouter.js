import React from "react";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import nationsReducer from "redux/reducers/nationsReducer";

const store = configureStore({
  reducer:{
    nations : nationsReducer,
  }
})

const AppRouter = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default AppRouter;
