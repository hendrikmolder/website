import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ResumeView from '../ResumeView'

const styles = require('./mainview.scss');

export default class MainView extends Component {
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <p>Hendrik Molder's homepage</p>
          <ResumeView />

        </div>
      </div>
    )
  }
}