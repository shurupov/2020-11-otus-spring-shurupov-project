import React from "react";
import {Redirect, Route, Switch } from "react-router-dom";
import {ConnectedPurchasesList} from "../purchasesList/ConnectedPurchasesList";
import {ConnectedAuthentication} from "../authentication/ConnectedAuthentication";

export const CustomContent = () => (
    <Switch>
        <Route path="/" exact>
            <Redirect to="/purchases" />
        </Route>
        <Route path="/purchases" exact>
            <ConnectedPurchasesList />
        </Route>
        <Route path="/auth" exact>
            <ConnectedAuthentication />
        </Route>
    </Switch>
);