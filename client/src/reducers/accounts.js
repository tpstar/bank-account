import { FETCH_ACCOUNTS } from '../actions'

const initialStates = []

export default (state = initialStates, action) => {
  switch (action.type) {
    case FETCH_ACCOUNTS:
      return [...action.payload.data, ...state]
    default:
      return state;
  }
}
