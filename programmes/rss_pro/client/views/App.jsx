import React,{Component} from 'react';
import Routes from '../config/router';
import {Link} from 'react-router-dom';

export default class App extends Component {
    render() {
        return [
            <div key="div">
                <Link to="/">首页</Link><br/>
                <Link to="/detail">详情页</Link>
            </div>,
            <Routes key="routes"/>
        ]
    }
}
