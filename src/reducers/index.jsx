import ***REMOVED*** combineReducers ***REMOVED*** from 'redux'
import ***REMOVED*** firebaseStateReducer ***REMOVED*** from 'react-redux-firebase'
import ***REMOVED*** routerReducer ***REMOVED*** from 'react-router-redux'

import notesReducer from './notesReducer'

// Add Firebse to reducers
export default combineReducers(***REMOVED***
  firebase: firebaseStateReducer,
  notes: notesReducer,
  router: routerReducer,
***REMOVED***)