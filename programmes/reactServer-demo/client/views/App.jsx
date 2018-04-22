//声明整个应用的页面上的内容；
import React, {Component} from 'React';
import Routes from '../config/router';
import {
    Link,
} from 'react-router-dom';

export default class App extends Component {
    render() {//代表要渲染组件，生成的html代码；
        return [
            <div key="banner">
                <Link to="/">首页</Link><br/>
                <Link to="/detail">详情页</Link>
            </div>,
            <Routes key="routes"/>,
        ]
    }
}