import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthService } from "../../services/auth.service";
import Dashboard from "../views/Dashboard/Dashboard";
import Login from "../views/Login/Login";
import Profile from "../views/Profile/Profile";

const Routes: React.FC = () => {
    const isLogged = AuthService.IsLoggedIn();

    if (isLogged) {
        return (
            <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/profile" component={Profile} />
                <Redirect to="/dashboard" from="*" />
            </Switch>
        );
    }

    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            <Redirect to="/login" from="*" />
        </Switch>
    );

}

export default Routes;