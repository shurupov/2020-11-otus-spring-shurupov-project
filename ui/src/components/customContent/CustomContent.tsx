import React from "react";
import { Route, Switch } from "react-router-dom";
import {PurchasesList} from "../purchasesList/PurchasesList";

export const CustomContent = () => (
    <Switch>
        <Route path="/" exact>
            Index page
        </Route>
        <Route path="/purchases" exact>
            <PurchasesList />
        </Route>
    </Switch>
);