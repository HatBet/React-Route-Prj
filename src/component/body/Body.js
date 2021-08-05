import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { CategoryList } from '../../layouts/Category/CategoryList'


import Dashboard from '../../layouts/Dashboard'
import NotFound from '../../pages/NotFound'
import PostDetail from '../../pages/person/PostDetail'


export default class Body extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Dashboard} />
                {
                    CategoryList.map(category =>
                        <Route
                            key={`CATEGORY_ROUTE_${category.categoryId}`}
                            path={category.path}
                            component={category.component}
                        />
                    )
                }
                <Route path="/detay" component={PostDetail}/>
                <Route path="*" component={NotFound}/>       
            </Switch>
        )
    }
}
