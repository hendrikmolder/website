import React, ***REMOVED*** Component ***REMOVED*** from 'react'
import ***REMOVED*** Link ***REMOVED*** from 'react-router-dom'
import ***REMOVED*** Header, Icon ***REMOVED*** from 'semantic-ui-react'

const styles  = require('./navbar.scss')
const logo    = require('./assets/new_molder.png')

export default class Navbar extends Component ***REMOVED***
  render () ***REMOVED***
    return (
      <div className=***REMOVED***styles.navBar***REMOVED***>
        <div className=***REMOVED***styles.container***REMOVED***>
          <Link to='/'><img src=***REMOVED***logo***REMOVED*** className=***REMOVED***styles.navLogo***REMOVED*** /></Link>
          <div className=***REMOVED***styles.linkBox***REMOVED***>
            <Link to='/'>home</Link>
            <Link to='/about'>about me</Link>
            <Link to='/notes'>notes</Link>
            <Link to='/contact'>contact</Link>
          </div>
        </div>

      </div>
    )
  ***REMOVED***
***REMOVED***