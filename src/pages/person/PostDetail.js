import React, { useState, useEffect } from 'react'
import PageWrapper from '../../layouts/PageWrapper'

const axios = require('axios')

export default function PostDetail(props) {

    const { match } = props;
    const [postDetail, setPostDetail] = useState([])

    const makeGetRequest = () => {
        const _id = props.location.search;
        const q = _id[_id.length -1 ];
        axios.get('https://jsonplaceholder.typicode.com/posts?id='+q).then((res) => {
            setPostDetail(res.data)
        });
    }
    useEffect(() => {
        makeGetRequest()
    }, [setPostDetail])

    return (
        <PageWrapper match={match}>
            <div className="ui raised very padded text container segment">
                <table className="ui striped table">
                    <thead>
                        <tr>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            postDetail.map((posts) => {
                                return <tr key={posts.id}><td>{posts.body}</td></tr>
                                
                            })
                        }
                    </tbody>
                </table>

            </div>

        </PageWrapper>
    )
}

// Postdetail ile veri çekiliyor ama tamamı asil istenen tıklanan postun detayının ekrana verilmesi