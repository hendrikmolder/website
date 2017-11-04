import { combineReducers } from 'redux'
import { firebaseStateReducer } from 'react-redux-firebase'
import { routerReducer } from 'react-router-redux'

import notesReducer from './notesReducer'

// Add Firebse to reducers
export default combineReducers({
  firebase: firebaseStateReducer,
  notes: notesReducer,
  router: routerReducer,
})