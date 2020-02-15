import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./react/NavBar";
import styled from "styled-components";

const Home = () => {
  return <h2>Home</h2>;
};

const Cart = () => {
  return <h2>Cart</h2>;
};

const Search = () => {
  return <h2>Search</h2>;
};

const Account = () => {
  return <h2>Account</h2>;
};

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
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Page>
        </div>
      </Router>
    </div>
  );
};

export default App;
