import React, { lazy } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthService } from "../../services/auth.service";

const Routes: React.FC = () => {
    const isLogged = AuthService.IsLoggedIn();

    if (isLogged) {
        return (
            <Switch>
                <Route exact path="/dashboard" component={lazy(() => import("../views/Dashboard/Dashboard"))} />
                <Route exact path="/invoice/new" component={lazy(() => import("../views/Invoice/Invoice"))} />
                <Route exact path="/invoice/:invoiceId" component={lazy(() => import("../views/Invoice/Invoice"))} />
                <Route exact path="/profile" component={lazy(() => import("../views/Profile/Profile"))} />
                <Redirect to="/dashboard" from="*" />
            </Switch>
        );
    }

    return (
        <Switch>
            <Route exact path="/login" component={lazy(() => import("../views/Login/Login"))} />
            <Redirect to="/login" from="*" />
        </Switch>
    );

}

export default Routes;