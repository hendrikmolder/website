import ***REMOVED*** createStore, compose, applyMiddleware ***REMOVED*** from 'redux'
import ***REMOVED*** reactReduxFirebase ***REMOVED*** from 'react-redux-firebase'
import ***REMOVED*** routerMiddleware ***REMOVED*** from 'react-router-redux'
import ***REMOVED*** logger ***REMOVED*** from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import createHistory from 'history/createBrowserHistory'

import reducer from './reducers'
import keys from '../.keys/firebase.json'

// Firebase config
const firebaseConfig = ***REMOVED***
  apiKey: keys.apiKey,
  authDomain: keys.authDomain,
  databaseURL: keys.databaseURL,
  projectId: keys.projectId,
  storageBucket: keys.storageBucket,
  messagingSenderId: keys.messagingSenderId
***REMOVED***

const config = ***REMOVED***
  userProfile: 'users',
  enableLogging: false
***REMOVED***

const history = createHistory();

// Add Firebase to compose
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebaseConfig, config)
)(createStore)

const middleware = applyMiddleware(promise(), thunk, routerMiddleware(history), logger)

// Create store with reducers and initial state
export default createStoreWithFirebase(reducer, middleware)