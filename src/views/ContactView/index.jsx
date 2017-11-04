import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Segment, Button, Icon } from 'semantic-ui-react'
import Recaptcha from 'react-recaptcha'

import Navbar from '../../components/Navbar'

const styles = require('./contact-view.scss');

let callback = (response) => {
  console.log("Done!" + response)
}

export default class ContactView extends Component {

  constructor(props) {
    super(props)

    this.state = {
      displayEmail: null
    }

    this.verify = this.verify.bind(this)
    this.initialize = this.initialize.bind(this)
    this.renderReCaptcha = this.renderReCaptcha.bind(this)
    this.renderContactInfo = this.renderContactInfo.bind(this)
  }

  verify() {
    return new Promise((res, err) => {
      this.setState({ displayEmail: true })
    }).then(
      console.log(this.state.displayEmail)
    )
  }

  initialize() {
   return new Promise((res, err) => {
     this.setState({ displayEmail: false })
   }).then(
     console.log(this.state.displayEmail)
   )
  }

  renderReCaptcha() {
    return (
      <div>
        <Recaptcha
          sitekey='6LfJpfoSAAAAAFQf4Ll92SrPq9YVS-9vMrBaIQUV'
          render='explicit'
          verifyCallback={this.verify}
          onloadCallback={this.initialize}
        />
      </div>
    )
  }

  renderContactInfo() {
    return(
      <div>
        <a href='mailto:info@molder.eu'>
          <Button color='blue' content='Get in touch' icon='send' labelPosition='left' />
        </a>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.container}>
        <Navbar />
        <div className={styles.content}>
          <Segment raised className={styles.segment}>
            { this.state.displayEmail === true ? this.renderContactInfo() : this.renderReCaptcha() }
          </Segment>
        </div>
      </div>
    )
  }
}