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
          <div className=***REMOVED***styles.header***REMOVED***>
            <h1>HENDRIK MÖLDER</h1>
            <h4>Software Engineer</h4>
          </div>
          <div className=***REMOVED***styles.box***REMOVED***>
            <div className=***REMOVED***styles.left***REMOVED***>
              <span className=***REMOVED***styles.info***REMOVED***>
                Do not hesitate to contact in regards of any projects and offers.
              </span>
            </div>
            <div className=***REMOVED***styles.right***REMOVED***>
              <h4>Bio.</h4>
              <span className=***REMOVED***styles.inner***REMOVED***>
                <strong>Hendrik Mölder</strong> is a software engineer from Estonia.
                He is a co-founder of a startup called CODY and studying Computer
                Science at the University of Manchester.
                <br />
                <br />
                <small><strong>Doing awesome things since 1996.</strong></small>
              </span>
            </div>
          </div>
          <div className=***REMOVED***styles.box***REMOVED***>
            <div className=***REMOVED***styles.left***REMOVED***></div>
            <div className=***REMOVED***styles.right***REMOVED***>
              <h4>Professional Experience.</h4>
                <span className=***REMOVED***styles.inner***REMOVED***>
                  <small>
                    <strong>Testlio</strong>, Software Engineer Intern [Summer 2016]<br />
                    <strong>CODY</strong>, Co-founder [2016 - present] <br />
                    <strong>Teleport</strong>, Software Engineer Intern [Summer 2015] <br />
                    <strong>Gustav Adolf Grammar School</strong>, Head of IT [2014 - 2015] <br />
                  </small>
                </span>
            </div>
          </div>
        </div>
      </div>
    )
  ***REMOVED***
***REMOVED***