import React, ***REMOVED*** Component ***REMOVED*** from 'react'
import ***REMOVED*** Link ***REMOVED*** from 'react-router-dom'
import ***REMOVED*** Header, Icon ***REMOVED*** from 'semantic-ui-react'

import Navbar from '../../components/Navbar'
import ResumeDetail from '../../components/ResumeDetail'

const styles = require('./resume-view.scss')

export default class ResumeView extends Component ***REMOVED***
  render () ***REMOVED***
    return (
      <div className=***REMOVED***styles.content***REMOVED***>
        <Navbar />
        <div className=***REMOVED***styles.container***REMOVED***>
          <Header as='h2'>Resume</Header>
          <div className=***REMOVED***styles.resumeBox***REMOVED***>
            <ResumeDetail
              company='Testlio'
              role='Software Engineer Intern'
              startDate='May 2017'
              endDate='August 2017'
              imagePath=***REMOVED*** require('./assets/testlio.png') ***REMOVED***
              tags='node.js, php'
             />

            <ResumeDetail name='Hendrik'/>
            <ResumeDetail name='Hendrik'/>
          </div>
        </div>
      </div>
    )
  ***REMOVED***
***REMOVED***