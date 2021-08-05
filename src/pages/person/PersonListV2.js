import React, {useState, useEffect} from 'react'
import PageWrapper from '../../layouts/PageWrapper'

const axios = require('axios');
export default function PersonListV2(props) {
    const { match } = props;
    const [userList, setUserList] = useState([])

    const makeGetRequest = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            setUserList(res.data)
        });
    }

    useEffect(() => {
        makeGetRequest()
    }, [setUserList])

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
                                userList.map(user => {
                                    return (
                                        <tr key={user.id}>
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