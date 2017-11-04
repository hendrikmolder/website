import { createStore, compose, applyMiddleware } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import { routerMiddleware } from 'react-router-redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import createHistory from 'history/createBrowserHistory'

import reducer from './reducers'
import keys from '../.keys/firebase.json'

// Firebase config
const firebaseConfig = {
  apiKey: keys.apiKey,
  authDomain: keys.authDomain,
  databaseURL: keys.databaseURL,
  projectId: keys.projectId,
  storageBucket: keys.storageBucket,
  messagingSenderId: keys.messagingSenderId
}

const config = {
  userProfile: 'users',
  enableLogging: false
}

const history = createHistory();

// Add Firebase to compose
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebaseConfig, config)
)(createStore)

const middleware = applyMiddleware(promise(), thunk, routerMiddleware(history), logger)

// Create store with reducers and initial state
export default createStoreWithFirebase(reducer, middleware)