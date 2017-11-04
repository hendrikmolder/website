import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Header, Icon } from 'semantic-ui-react'

const styles  = require('./navbar.scss')
const logo    = require('./assets/new_molder.png')

export default class Navbar extends Component {
  render () {
    return (
      <div className={styles.navBar}>
        <div className={styles.container}>
          <Link to='/'><img src={logo} className={styles.navLogo} /></Link>
          <div className={styles.linkBox}>
            <Link to='/'>home</Link>
            <Link to='/about'>about me</Link>
            <Link to='/notes'>notes</Link>
            <Link to='/contact'>contact</Link>
          </div>
        </div>

      </div>
    )
  }
}