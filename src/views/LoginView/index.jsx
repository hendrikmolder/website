import React, ***REMOVED*** Component, PropTypes ***REMOVED*** from 'react'
import ***REMOVED*** Link ***REMOVED*** from 'react-router-dom'
import ***REMOVED*** Loader, Segment, Button, Form, Icon ***REMOVED*** from 'semantic-ui-react'
import ***REMOVED*** connect ***REMOVED*** from 'react-redux'
import ***REMOVED*** firebaseConnect, isLoaded, isEmpty, dataToJS ***REMOVED*** from 'react-redux-firebase'
import Recaptcha from 'react-recaptcha'

import Navbar from '../../components/Navbar'

const styles = require('./login-view.scss')

@firebaseConnect([
  '/notes',
])
@connect(
  (***REMOVED*** firebase ***REMOVED***) => (***REMOVED***
    notes: dataToJS(firebase, '/notes'),
  ***REMOVED***),
)
export default class LoginView extends Component ***REMOVED***

  static PropTypes = ***REMOVED***
    notes: PropTypes.object,
    firebase: PropTypes.object,
  ***REMOVED***

  constructor(props) ***REMOVED***
    super(props)
    this.state = ***REMOVED***
      displayLogin: true,
    ***REMOVED***

    this.renderLogin = this.renderLogin.bind(this)
    this.userLogin = this.userLogin.bind(this)
  ***REMOVED***

  userLogin() ***REMOVED***
    this.setState(***REMOVED*** displayLogin: false ***REMOVED***)
  ***REMOVED***

  renderLogin() ***REMOVED***
    return (
      <div className=***REMOVED***styles.loginForm***REMOVED***>
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
              onClick=***REMOVED***this.userLogin***REMOVED***
            />
          </center>
        </Form>
      </div>
    )
  ***REMOVED***

  render() ***REMOVED***
    return (
      <div className=***REMOVED***styles.container***REMOVED***>
        <Navbar />
        <div className=***REMOVED***styles.content***REMOVED***>
          <Segment raised className=***REMOVED***styles.segment***REMOVED***>
            ***REMOVED*** this.state.displayLogin ? this.renderLogin() : <Loader active size='big' />***REMOVED***
          </Segment>
        </div>
      </div>
    )
  ***REMOVED***
***REMOVED***