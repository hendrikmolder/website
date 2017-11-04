import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'

export default function router(history) {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={LandingView}/>
                <Route path="/g" render={() => (
                <h1>Welcome!</h1>
                )} />
                <Route path='/resume' component={ResumeView} />
                <Route path='/contact' component={ContactView} />
                <Route path='/login' component={LoginView} />
            </Switch>
        </Router>
    )
}