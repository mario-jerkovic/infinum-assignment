/* eslint-disable no-underscore-dangle, global-require, import/no-extraneous-dependencies */
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const MOUNT_NODE = document.getElementById('app');

function render() {
    const Routes = require('./routes').default;

    ReactDOM.render(
        <AppContainer>
            <Routes />
        </AppContainer>
        , MOUNT_NODE);
}


if (module.hot) {
    module.hot.accept('./routes', () => {
        setImmediate(() => {
            ReactDOM.unmountComponentAtNode(MOUNT_NODE);
            render();
        });
    });
}

render();
