import React, ***REMOVED*** Component, PropTypes ***REMOVED*** from "react"
import ReactDOM, ***REMOVED*** render ***REMOVED*** from "react-dom"
import ***REMOVED*** Provider ***REMOVED*** from 'react-redux'
import ***REMOVED***
  BrowserRouter as Router,
  Route,
  Switch,
  Link
***REMOVED*** from 'react-router-dom'

import store from './store'

// import components
import ContactView from './views/ContactView'
import LandingView from './views/LandingView'
import LoginView from './views/LoginView'
import MainView from './views/MainView'
import ResumeView from './views/ResumeView'


render((
  <Provider store=***REMOVED*** store ***REMOVED***>
    <Router>
      <Switch>
        <Route exact path="/" component=***REMOVED***LandingView***REMOVED***/>
        <Route path="/g" render=***REMOVED***() => (
          <h1>Welcome!</h1>
        )***REMOVED*** />
        <Route path='/about' component=***REMOVED***ResumeView***REMOVED*** />
        <Route path='/contact' component=***REMOVED***ContactView***REMOVED*** />
        <Route path='/login' component=***REMOVED***LoginView***REMOVED*** />
      </Switch>
    </Router>
  </Provider>
), document.getElementById('app'))
