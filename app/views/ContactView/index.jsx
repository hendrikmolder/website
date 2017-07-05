import React, ***REMOVED*** Component ***REMOVED*** from 'react'
import ***REMOVED*** Link ***REMOVED*** from 'react-router-dom'
import ***REMOVED*** Loader, Segment, Button, Icon ***REMOVED*** from 'semantic-ui-react'
import Recaptcha from 'react-recaptcha'

import Navbar from '../../components/Navbar'

const styles = require('./contact-view.scss');

let callback = (response) => ***REMOVED***
  console.log("Done!" + response)
***REMOVED***

export default class ContactView extends Component ***REMOVED***

  constructor(props) ***REMOVED***
    super(props)

    this.state = ***REMOVED***
      displayEmail: null
    ***REMOVED***

    this.verify = this.verify.bind(this)
    this.initialize = this.initialize.bind(this)
    this.renderReCaptcha = this.renderReCaptcha.bind(this)
    this.renderContactInfo = this.renderContactInfo.bind(this)
  ***REMOVED***

  verify() ***REMOVED***
    return new Promise((res, err) => ***REMOVED***
      this.setState(***REMOVED*** displayEmail: true ***REMOVED***)
    ***REMOVED***).then(
      console.log(this.state.displayEmail)
    )
  ***REMOVED***

  initialize() ***REMOVED***
   return new Promise((res, err) => ***REMOVED***
     this.setState(***REMOVED*** displayEmail: false ***REMOVED***)
   ***REMOVED***).then(
     console.log(this.state.displayEmail)
   )
  ***REMOVED***

  renderReCaptcha() ***REMOVED***
    return (
      <div>
        <Recaptcha
          sitekey='6LfJpfoSAAAAAFQf4Ll92SrPq9YVS-9vMrBaIQUV'
          render='explicit'
          verifyCallback=***REMOVED***this.verify***REMOVED***
          onloadCallback=***REMOVED***this.initialize***REMOVED***
        />
      </div>
    )
  ***REMOVED***

  renderContactInfo() ***REMOVED***
    return(
      <div>
        <a href='mailto:info@molder.eu'>
          <Button color='blue' content='Get in touch' icon='send' labelPosition='left' />
        </a>
        <Link to='/login'><Button color='green' content='Client Login' /></Link>
      </div>
    )
  ***REMOVED***

  render() ***REMOVED***
    return (
      <div className=***REMOVED***styles.container***REMOVED***>
        <Navbar />
        <div className=***REMOVED***styles.content***REMOVED***>
          <Segment raised className=***REMOVED***styles.segment***REMOVED***>
            ***REMOVED*** this.state.displayEmail === true ? this.renderContactInfo() : this.renderReCaptcha() ***REMOVED***
          </Segment>
        </div>
      </div>
    )
  ***REMOVED***
***REMOVED***