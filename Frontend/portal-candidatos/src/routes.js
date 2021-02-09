import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

const PrivateRoute = ({component: Component, ...rest }) => (
    <Route
    {...rest}
    render={props => isAuthenticated() ? (
        <Component {...props}/>
    ) : (
        <Redirect to={{ pathname: "/home", state:{ from:props.location}}}   />
    )}
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/home" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Routes;