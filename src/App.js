// Pages
import React from 'react';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Switch} from "react-router-dom";


// auth & redux
import { connect } from "react-redux";
import AuthRoute from "./components/AuthRoute";
import BasicRoute from "./components/BasicRoute";

function App({ checked }) {
  return (
    <Router>
      {checked && (

          <Switch>
            <BasicRoute exact path="/">
              <Login />
            </BasicRoute>
            <AuthRoute path="/dashboard">
              <Dashboard />
            </AuthRoute>          
          </Switch>

      )}
    </Router>
  );
}
const mapStateToProps = ({ session }) => ({
  checked: session.checked,
});

export default connect(mapStateToProps)(App);
