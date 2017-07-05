import ***REMOVED*** combineReducers ***REMOVED*** from 'redux'
import ***REMOVED*** firebaseStateReducer ***REMOVED*** from 'react-redux-firebase'

import notesReducer from './notesReducer'

// Add Firebse to reducers
export default combineReducers(***REMOVED***
  firebase: firebaseStateReducer,
  notes: notesReducer,
***REMOVED***)