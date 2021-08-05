import React, {Component} from 'react'
import PageWrapper from '../../layouts/PageWrapper'

const axios = require('axios');

export default class PersonList extends Component {

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
    console.log(this.state.userList);
    const { match } = this.props;
    return (
      <PageWrapper match={match}>
        <div className="ui raised very padded text container segment">
          <div>
            <table className="ui striped table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>User name</th>
                  <th>E-mail</th>
                </tr>
              </thead>
              <tbody>
              {
                this.state.userList.map(user => {
                  return (
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                    </tr>
                  )
                })
                }
              </tbody>
            </table>
          </div>
        </div>

      </PageWrapper>
    )
  }
}