import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavBar from "./react/NavBar";
import styled from "styled-components";
import Home from "./react/Home";
import Cart from "./react/Cart";
import Search from "./react/Search";
import Account from "./react/Account";
import About from "./react/About";
import Messages from "./react/Messages";

const Page = styled.div`
  margin-top: 50px;
`;

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar></NavBar>
          <Page>
            <Switch>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/account">
                <Account />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/messages">
                <Messages />
              </Route>
              <Route path="/">
                <Redirect to="/home"></Redirect>
              </Route>
            </Switch>
          </Page>
        </div>
      </Router>
    </div>
  );
};

export default App;
