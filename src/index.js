import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';  // eslint-disable-line import/no-extraneous-dependencies

import App from './components/App';

function render(Component) {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>
        , document.getElementById('app'));
}


if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default; // eslint-disable-line global-require

        render(NextApp);
    });
}

render(App);
