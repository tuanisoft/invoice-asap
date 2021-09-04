import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthService } from "../../services/auth.service";
import Dashboard from "../views/Dashboard/Dashboard";
import Login from "../views/Login/Login";

const Routes: React.FC = () => {
    const isLogged = AuthService.IsLoggedIn();

    if (isLogged) {
        return (
            <Switch>
                <Route exact path="/home" component={Dashboard} />
                <Redirect to="/home" from="*" />
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