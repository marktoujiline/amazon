import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/account">Account</Link>
              </li>
            </ul>
          </nav>

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
        </div>
      </Router>
    </div>
  );
};

export default App;
