import React from 'react'
import { BreadCrumbs, CampaignExpansion, Navbar, sharedUtilValue } from '../vp-components';
import { Switch, Route } from "react-router-dom";
import s from './app.module.css';
import PPL from '../ppl';
import Listings from '../listings';

const ContainerApp = () => {
    return (
        <div>
            <Navbar />
            <div className={s.container}>
                <BreadCrumbs />
                <Switch>
                    <Route path="/" exact>
                        <>
                            <h1>Dashboard</h1>
                            <hr />
                            <div className="alert">{ sharedUtilValue }</div>
                            <CampaignExpansion />
                        </>
                    </Route>
                    <Route path="/vp/ppl">
                        <PPL />
                    </Route>
                    <Route path="/vp/listings">
                        <Listings />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default ContainerApp
