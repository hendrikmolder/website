import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Header, Icon } from 'semantic-ui-react'

import Navbar from '../../components/Navbar'
import ResumeDetail from '../../components/ResumeDetail'

const styles = require('./resume-view.scss')

export default class ResumeView extends Component {
  render () {
    return (
      <div className={styles.content}>
        <Navbar />
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>HENDRIK MÖLDER</h1>
            <h4>Software Engineer</h4>
          </div>
          <div className={styles.box}>
            <div className={styles.left}>
              <span className={styles.info}>
                Do not hesitate to contact in regards of any projects and offers.
              </span>
            </div>
            <div className={styles.right}>
              <h4>Bio.</h4>
              <span className={styles.inner}>
                <strong>Hendrik Mölder</strong> is a software engineer from Estonia.
                He is a co-founder of a startup called CODY and studying Computer
                Science at the University of Manchester.
                <br />
                <br />
                <small><strong>Doing awesome things since 1996.</strong></small>
              </span>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.left}></div>
            <div className={styles.right}>
              <h4>Professional Experience.</h4>
                <span className={styles.inner}>
                  <small>
                    <strong>Testlio</strong>, Software Engineer Intern [Summer 2016]<br />
                    <strong>CODY</strong>, Co-founder [2016 - present] <br />
                    <strong>Teleport</strong>, Software Engineer Intern [Summer 2015] <br />
                    <strong>Gustav Adolf Grammar School</strong>, Head of IT [2014 - 2015] <br />
                  </small>
                </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}