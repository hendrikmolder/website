import React, ***REMOVED*** Component ***REMOVED*** from 'react'
import ***REMOVED*** Link ***REMOVED*** from 'react-router-dom'
import ***REMOVED*** Header, Icon ***REMOVED*** from 'semantic-ui-react'

const styles = require('./resume-detail.scss');

export default class ResumeDetail extends Component ***REMOVED***
/*
 * startYear
 * endYear
 * jobTitle
 * companyTitle
 * extraInformation
 */
  constructor(props) ***REMOVED***
    super(props)
  ***REMOVED***

  render () ***REMOVED***
    return (
      <div className=***REMOVED***styles.container***REMOVED***>
        <div className=***REMOVED***styles.infoBox***REMOVED***>
          <img src=***REMOVED***this.props.imagePath***REMOVED*** className=***REMOVED***styles.logo***REMOVED*** />
        </div>
        <div className=***REMOVED***styles.detailBox***REMOVED***>
          <div className=***REMOVED***styles.title***REMOVED***>
            <p className=***REMOVED***styles.company***REMOVED***>***REMOVED***this.props.company***REMOVED***</p><p className=***REMOVED***styles.role***REMOVED***>, ***REMOVED***this.props.role***REMOVED***</p>          
          </div>
          ***REMOVED***this.props.tags***REMOVED***
        </div>
      </div>
    )
  ***REMOVED***
***REMOVED***