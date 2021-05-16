import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CreatePoint from './pages/CreatePoint/CreatePoint'
import Home from './pages/Home/Home'


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/create-point" exact component={ CreatePoint } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
