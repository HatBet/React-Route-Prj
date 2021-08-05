import React, { useState } from 'react'
import { Container, Menu, Input } from 'semantic-ui-react'
import SignedOut from '../../layouts/SignedOut'
import SignedIn from '../../layouts/SignedIn'
import { Link } from 'react-router-dom'
import './header.css'


export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function handleSignedOut(params) {
    setIsAuthenticated(false)
  }

  function handleSignedIn(params) {
    setIsAuthenticated(true)
  }


  return (
      <div>
        <Menu inverted fixed>
          <Container>
            <Menu.Item name='LOGO' />
            <Menu.Item><Link to="/">Ana Sayfa</Link></Menu.Item>
            <Menu.Item><Link to="/cv/listesi">CV</Link></Menu.Item>
            <Menu.Item><Link to="/kisi/listesi">Kişiler</Link></Menu.Item>
            <Menu.Item position="right" >
              <div className="ui disabled icon input">
                <i className="search icon"></i>
                <Input type="text" placeholder="Search..." />
              </div>
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item>
                {isAuthenticated ? <SignedIn signOut={handleSignedOut} /> : <SignedOut signIn={handleSignedIn} />}
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
  )
}
