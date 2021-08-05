import './App.css'
import 'semantic-ui-css/semantic.min.css'

import React, { Component } from 'react'
import Header from './component/header/Header'
import Body from './component/body/Body'
import { BrowserRouter as Router } from 'react-router-dom'


export default class App extends Component {

  render() {
    return (
      <div className='App'>
        <Router>
          <Header/>
          <Body/>
        </Router>
      </div>
    )
  }
}