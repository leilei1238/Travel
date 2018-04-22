import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'mobx-react';

import App from './views/App';
import AppState from './store/app-state';


const root = document.getElementById('root');
const initialState = window.__INITIAL__STATE__ || {};
const render = Component => {
    ReactDOM.hydrate(
        <AppContainer>
            <Provider appState={new AppState(initialState.appState)}>
                <BrowserRouter>
                    <MuiThemeProvider theme={theme}>
                        <Component/>
                    </MuiThemeProvider>
                </BrowserRouter>
            </Provider>
        </AppContainer>
        ,
        root
    )
};
render(App);

if (module.hot) {
    module.hot.accept('./views/App', () => {
        const NextApp = require('./views/App').default;
        ReactDOM.hydrate(<NextApp/>, document.getElementById('root'));
    })
}