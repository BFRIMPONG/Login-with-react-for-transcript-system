// Pages
import React from 'react';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

// auth & redux
import { connect } from "react-redux";

function App({ checked }) {
  return (
    <Router>
      {checked && (

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>          
          </Switch>

      )}
    </Router>
  );
}
const mapStateToProps = ({ session }) => ({
  checked: session.checked,
});

export default connect(mapStateToProps)(App);
