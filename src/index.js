import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import store from "./store"
import { HashRouter as Router,
        Route,
        Switch
} from 'react-router-dom';

import {noLayoutRouteComponent} from '@route';
import routerEach from "@utils/routerEach"
const pages=routerEach(noLayoutRouteComponent)
ReactDOM.render(
    <Provider store={store}>
            <Router>
                <Switch>
                    {
                        pages
                    }
                    <Route path="/" component={App}/>
                </Switch>
            </Router> 
    </Provider>
    , 
    document.getElementById('root')
);


