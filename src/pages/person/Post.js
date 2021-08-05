import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../../layouts/PageWrapper'

const axios = require('axios')

export default function Post(props) {
    const { match } = props;
    const [postList, setPostList] = useState([])

    const makeGetRequest = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            setPostList(res.data)
        });
    }
    useEffect(() => {
        makeGetRequest()
    }, [setPostList])

    return (
        <PageWrapper match={match}>
            <div className="ui raised very padded text container segment">
                <div>
                    <table className="ui striped table">
                        <thead>
                            <tr>
                                <th>title</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                postList.map(posts => {
                                    return (
                                        <tr key={posts.id}>
                                            <td>{posts.title}</td>
                                            <td>
                                                <Link to={'/detay?id='+ posts.id}>
                                                    <button className="ui button">
                                                        Detay
                                                    </button>
                                                </Link>

                                            </td>
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
