import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Header, Icon } from 'semantic-ui-react'

const styles = require('./resume-detail.scss');

export default class ResumeDetail extends Component {
/*
 * startYear
 * endYear
 * jobTitle
 * companyTitle
 * extraInformation
 */
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className={styles.container}>
        <div className={styles.infoBox}>
          <img src={this.props.imagePath} className={styles.logo} />
        </div>
        <div className={styles.detailBox}>
          <div className={styles.title}>
            <p className={styles.company}>{this.props.company}</p><p className={styles.role}>, {this.props.role}</p>          
          </div>
          {this.props.tags}
        </div>
      </div>
    )
  }
}