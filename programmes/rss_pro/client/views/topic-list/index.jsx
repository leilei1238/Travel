import React,{Component} from 'react';
import {observer, inject} from 'mobx-react';
import Proptypes from 'prop-types';
import Helmet from 'react-helmet';

import Button from 'material-ui/Button';

@inject('appState') @observer
export default class TopicList extends Component {
    constructor(props) {
        super(props);
        this.changeName = this.changeName.bind(this);
    }

    bootstrap() {
        return new Promise(resolve => {
            setTimeout(() => {
                this.props.appState.count = 3;
                resolve(true)
            })
        })
    }

    changeName(e) {
        this.props.appState.changeName(e.target.value)
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>This is topic list</title>
                    <meta name="description" content="This is description"/>
                </Helmet>
                <span>{this.props.appState.msg}</span>
            </div>
        )
    }
}
TopicList.propTypes = {
    msg: Proptypes.object
};