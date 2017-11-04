export default function reducer(state = {
  notes: [],
  error: null,
  fetched: false,
  fetching: false,
}, action) {
  switch (action.type) {
    case 'FETCH_NOTES': {
      return {...state, fetched: true}
    }
    default: return state
  }
}