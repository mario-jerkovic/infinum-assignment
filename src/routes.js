import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Root from './pages';
import Home from './pages/Home';
import Details from './pages/Details';
import Favorites from './pages/Favorites';

const routes = (
    <Route path="/" component={Root}>
        <IndexRoute
            component={Home}
        />
        <Route
            path="pokemon/:name"
            component={Details}
        />
        <Route
            path="myPokemons"
            component={Favorites}
        />
    </Route>
);

function router() {
    return (
        <Router
            routes={routes}
            history={browserHistory}
        />

    );
}

export default router;
