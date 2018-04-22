import React from 'react';
import ReactDom from 'react-dom';

import App from './views/App.jsx';

export default <App suppressHydrationWarning={true}/> //服务端没有document,导出JSX；server-entry不能在服务器端直接执行，因为它用es6module && 是JSX代码
