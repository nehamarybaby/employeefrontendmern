import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
return (
<Router>
<Switch>
<Route exact path="/login" component={Login} />
<PrivateRoute exact path="/dashboard" component={Dashboard} />
</Switch>
</Router>
);
};

export default App;