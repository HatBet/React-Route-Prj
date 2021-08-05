import React from 'react'
import '../pages/person/PersonList'

import { Component } from 'react'

export default class Dashboard extends Component {
  state = { currentCategory: "" }
  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName })
  }
  render() {
    return (
      <div className="ui raised very padded text container segment">
        ANA SAYFA
      </div>
    )
  }
}
