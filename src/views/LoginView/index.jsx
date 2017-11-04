import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import { Loader, Segment, Button, Form, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase'
import Recaptcha from 'react-recaptcha'

import Navbar from '../../components/Navbar'

const styles = require('./login-view.scss')

@firebaseConnect([
  '/notes',
])
@connect(
  ({ firebase }) => ({
    notes: dataToJS(firebase, '/notes'),
  }),
)
export default class LoginView extends Component {

  static PropTypes = {
    notes: PropTypes.object,
    firebase: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.state = {
      displayLogin: true,
    }

    this.renderLogin = this.renderLogin.bind(this)
    this.userLogin = this.userLogin.bind(this)
  }

  userLogin() {
    this.setState({ displayLogin: false })
  }

  renderLogin() {
    return (
      <div className={styles.loginForm}>
        <Form>
          <Form.Field>
            <label>Email address</label>
            <input placeholder='name@example.com' type='email' name='email' required/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' type='password' name='password' required/>
          </Form.Field>
          <center>
            <Button
              color='blue'
              icon='sign in'
              labelPosition='left'
              type='submit'
              content='Log In'
              onClick={this.userLogin}
            />
          </center>
        </Form>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.container}>
        <Navbar />
        <div className={styles.content}>
          <Segment raised className={styles.segment}>
            { this.state.displayLogin ? this.renderLogin() : <Loader active size='big' />}
          </Segment>
        </div>
      </div>
    )
  }
}