import React from 'react';
import axios from 'axios';

export default class TestApi extends React.Component {
    getTopics() {
        axios.get('/api/topics')
            .then(resp => {
                console.log(resp.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    login() {
        axios.post('/api/user/login', {
            accessToken: '56a24cdf-db41-47cd-b085-e340edaa14a1'
        }).then(resp => {
            console.log(resp.data)
        }).catch(err => {
            console.log(err)
        })
    }

    markAll() {
        axios.post('/api/message/mark_all?needAccessToken=true')
            .then(resp => {
                console.log(resp.data)
            })
            .catch(err => {
                console.log(err)
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