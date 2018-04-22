import React, {Component} from 'react';

const axios = require('axios');

export default class TestApi extends React.Component {
    constructor(props) {
        super(props);
    }

    getTopics() {
        axios.get('/api/topics')
            .then(resp => {
                console.log(resp.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    login() {
        axios.post('/api/user/login', {
            accessToken: 'ef35af2e-95b4-4062-badc-419d3b'
        })
            .then(resp => {
                console.log(resp)
            })
            .catch(err => {
                console.log(err);
            })
    }

    markAll() {
        axios.post('/api/message/mark_all?needAccessToken=true')
            .then(resp => {
                console.log(resp.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.getTopics}>topics</button>
                <button onClick={this.login}>login</button>
                <button onClick={this.markAll}>markAll</button>
            </div>
        )
    }
}