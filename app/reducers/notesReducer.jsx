export default function reducer(state = ***REMOVED***
  notes: [],
  error: null,
  fetched: false,
  fetching: false,
***REMOVED***, action) ***REMOVED***
  switch (action.type) ***REMOVED***
    case 'FETCH_NOTES': ***REMOVED***
      return ***REMOVED***...state, fetched: true***REMOVED***
    ***REMOVED***
    default: return state
  ***REMOVED***
***REMOVED***