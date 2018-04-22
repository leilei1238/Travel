import React from 'react';
import App from './views/App';
import {StaticRouter} from 'react-router-dom';
import {Provider, useStaticRendering} from 'mobx-react';

useStaticRendering(true)//让mobx在服务端渲染的时候，不会重复的数据变换；

import {createStoreMap} from './store/store';

export default (stores, routerContext, url) => (
    <Provider {...stores}>
        <StaticRouter context={routerContext} location={url}>
            <App/>
        </StaticRouter>
    </Provider>
)
export {createStoreMap}