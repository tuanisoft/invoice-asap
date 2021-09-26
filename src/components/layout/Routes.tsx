import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthService } from "../../services/auth.service";

// Components
import Login from "../views/Login/Login";
import Dashboard from "../views/Dashboard/Dashboard";
import Invoice from "../views/Invoice/Invoice";
import Profile from "../views/Profile/Profile";


const Routes: FC = () => {
    const isLogged = AuthService.IsLoggedIn();

    if (isLogged) {
        return (
            <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/invoice/new" component={Invoice} />
                <Route exact path="/invoice/:invoiceId" component={Invoice} />
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