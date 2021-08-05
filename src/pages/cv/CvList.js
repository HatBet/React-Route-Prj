import React, { Component } from 'react'
import PageWrapper from '../../layouts/PageWrapper'

const axios = require('axios')

export default class CvList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userList: []
        }
        this.makeGetRequest()

    }

    makeGetRequest = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            this.setState({ userList: res.data })
        });
    }

    render() {
        const { match } = this.props;

        return (
            <PageWrapper match={match}>
                <div className="ui raised very padded text container segment" >

                    <table className="ui striped table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.userList.map(user => {
                                    return (
                                        <tr key={user.id}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </PageWrapper>
        )
    }
}
