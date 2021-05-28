import React from "react";
import {Redirect, Route, Switch } from "react-router-dom";
import {ConnectedPurchasesList} from "../purchasesList/ConnectedPurchasesList";
import {ConnectedAuthentication} from "../authentication/ConnectedAuthentication";
import {ConnectedPurchase} from "../purchase/ConnectedPurchase";

export const CustomContent = () => (
    <Switch>
        <Route path="/" exact>
            <Redirect to="/purchases" />
        </Route>
        <Route path="/purchases" exact>
            <ConnectedPurchasesList />
        </Route>
        <Route path="/purchases/:id" exact>
            <ConnectedPurchase id={0} description={""} name={""} createdAt={""} />
        </Route>
        <Route path="/auth" exact>
            <ConnectedAuthentication />
        </Route>
    </Switch>
);