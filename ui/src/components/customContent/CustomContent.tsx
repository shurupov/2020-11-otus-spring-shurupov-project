import React from "react";
import { Route, Switch } from "react-router-dom";
import {ConnectedPurchasesList} from "../purchasesList/ConnectedPurchasesList";
import {ConnectedAuthentication} from "../authentication/ConnectedAuthentication";

export const CustomContent = () => (
    <Switch>
        <Route path="/" exact>
            Index page
        </Route>
        <Route path="/purchases" exact>
            <ConnectedPurchasesList />
        </Route>
        <Route path="/auth" exact>
            <ConnectedAuthentication />
        </Route>
    </Switch>
);