import React, { Component } from 'react'

import Category from '../Category/Category'

export default class PageWrapper extends Component {

    render() {
        const {match, children} = this.props;
        return (
            <div>
               <Category match={match} />
               {children}         
            </div>
        )
    }
}
