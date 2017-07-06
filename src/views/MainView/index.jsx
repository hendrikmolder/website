import React, ***REMOVED*** Component ***REMOVED*** from 'react'
import ***REMOVED*** Link ***REMOVED*** from 'react-router-dom'

import ResumeView from '../ResumeView'

const styles = require('./mainview.scss');

export default class MainView extends Component ***REMOVED***
  render () ***REMOVED***
    return (
      <div className=***REMOVED***styles.container***REMOVED***>
        <div className=***REMOVED***styles.content***REMOVED***>
          <p>Hendrik Molder's homepage</p>
          <ResumeView />

        </div>
      </div>
    )
  ***REMOVED***
***REMOVED***