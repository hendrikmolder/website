import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Divider } from 'semantic-ui-react'

const styles = require('./landing-view.scss');
const logo = require('./assets/new_molder.png')

export default class LandingView extends Component {
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <center><img src={logo} className={styles.logo} /></center>
          <Divider />
          <div className={styles.linkBox}>
            <Link to='/about'>About Me</Link>
            <a href='https://github.com/hendrikmolder'>Github</a>
            <a href='https://linkedin.com/in/hendrikmolder'>LinkedIn</a>
            <a href='https://twitter.com/hendrikmolder'>Twitter</a>
            <Link to='/contact'>Contact</Link>
          </div>
        </div>
      </div>
    )
  }
}