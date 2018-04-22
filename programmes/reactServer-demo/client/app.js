//应用入口，完成应用，amount到html的过程；
import React from 'react';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'mobx-react';
import {BrowserRouter} from 'react-router-dom';
import ReactDom from 'react-dom';

import App from './views/App.jsx';
import appState from './store/app-state';

const root = document.getElementById('root');
const render = Component => {
    ReactDom.hydrate(
        <AppContainer>
            <Provider appState={appState}>
                <BrowserRouter>
                    <Component/>
                </BrowserRouter>
            </Provider>
        </AppContainer>,
        root
    )
};
render(App);
if (module.hot) {
    module.hot.accept('./views/App.jsx', () => {
        const NextApp = require('./views/App.jsx').default;
        render(NextApp);
    })
}
