import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/lazy1" activeClassName="nav-active" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" activeClassName="nav-active" exact>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" activeClassName="nav-active" exact>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/lazy1">
            <h1>About</h1>
          </Route>
          <Route path="/lazy2">
            <h1>Users</h1>
          </Route>
          <Route path="/lazy3">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
