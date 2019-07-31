import React, { Component } from 'react';
import authRoute from "@components/authRoute"
import LayoutCom from "@layout"
import {layoutRouteComponent}  from "@route"
import {Switch,Redirect} from "react-router-dom"
import routerEach from "@utils/routerEach"

const pages = routerEach(layoutRouteComponent)

class App extends Component {
    render() {
        return (
            <Switch>
                <LayoutCom>
                        <Redirect from="/" to="/home" exact/>
                        {
                            pages
                        }
                </LayoutCom>    
            </Switch>
        );
    }
}

export default authRoute(App);
