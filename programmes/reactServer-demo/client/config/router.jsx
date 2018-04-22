import React from 'react';
import {
    Route,
    Redirect,
} from 'react-router-dom';

import TopicList from '../views/topic-list';
import TopicDetail from '../views/topic-detail';
import TestApi from '../views/test/api.test';

export default () => [
    <Route path="/" render={()=><Redirect to="/list"/>} key="index" exact></Route>,// push={true}回退功能
    <Route path="/list" component={TopicList} key="list"/>,
    <Route path="/detail" component={TopicDetail} key="detail"/>,
    <Route path="/test" component={TestApi} key="test"/>,
]