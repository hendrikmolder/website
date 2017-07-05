import React, ***REMOVED*** Component ***REMOVED*** from 'react'
import ***REMOVED*** Link ***REMOVED*** from 'react-router-dom'

import ***REMOVED*** Divider ***REMOVED*** from 'semantic-ui-react'

const styles = require('./landing-view.scss');
const logo = require('./assets/new_molder.png')

export default class LandingView extends Component ***REMOVED***
  render () ***REMOVED***
    return (
      <div className=***REMOVED***styles.container***REMOVED***>
        <div className=***REMOVED***styles.content***REMOVED***>
          <center><img src=***REMOVED***logo***REMOVED*** className=***REMOVED***styles.logo***REMOVED*** /></center>
          <Divider />
          <div className=***REMOVED***styles.linkBox***REMOVED***>
            <Link to='/resume'>Resume</Link>
            <Link to='/'>Notes</Link>
            <a href='https://github.com/hendrikmolder'>Github</a>
            <a href='https://linkedin.com/in/hendrikmolder'>LinkedIn</a>
            <a href='https://twitter.com/hendrikmolder'>Twitter</a>
            <Link to='/contact'>Contact</Link>
          </div>
        </div>
      </div>
    )
  ***REMOVED***
***REMOVED***