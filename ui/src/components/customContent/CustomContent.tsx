import React from "react";
import { Route, Switch } from "react-router-dom";
import {ConnectedPurchasesList} from "../purchasesList/ConnectedPurchasesList";

export const CustomContent = () => (
    <Switch>
        <Route path="/" exact>
            Index page
        </Route>
        <Route path="/purchases" exact>
            <ConnectedPurchasesList />
        </Route>
    </Switch>
);