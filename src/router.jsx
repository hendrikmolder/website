import React from 'react'
import ***REMOVED*** Route, Switch ***REMOVED*** from 'react-router-dom'
import ***REMOVED*** ConnectedRouter as Router ***REMOVED*** from 'react-router-redux'

export default function router(history) ***REMOVED***
    return (
        <Router history=***REMOVED***history***REMOVED***>
            <Switch>
                <Route exact path="/" component=***REMOVED***LandingView***REMOVED***/>
                <Route path="/g" render=***REMOVED***() => (
                <h1>Welcome!</h1>
                )***REMOVED*** />
                <Route path='/resume' component=***REMOVED***ResumeView***REMOVED*** />
                <Route path='/contact' component=***REMOVED***ContactView***REMOVED*** />
                <Route path='/login' component=***REMOVED***LoginView***REMOVED*** />
            </Switch>
        </Router>
    )
***REMOVED***