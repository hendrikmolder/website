import React, { Component, PropTypes } from "react"
import ReactDOM, { render } from "react-dom"
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import store from './store'

// import components
import ContactView from './views/ContactView'
import LandingView from './views/LandingView'
import LoginView from './views/LoginView'
import MainView from './views/MainView'
import ResumeView from './views/ResumeView'


render((
  <Provider store={ store }>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingView}/>
        <Route path="/g" render={() => (
          <h1>Welcome!</h1>
        )} />
        <Route path='/about' component={ResumeView} />
        <Route path='/contact' component={ContactView} />
        <Route path='/login' component={LoginView} />
      </Switch>
    </Router>
  </Provider>
), document.getElementById('app'))
