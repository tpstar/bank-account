import { CREATE_ACCOUNTS, FETCH_ACCOUNTS } from '../actions'

const initialStates = []

export default (state = initialStates, action) => {
  switch (action.type) {
    case FETCH_ACCOUNTS:
      return [...action.payload.data, ...state]
    case CREATE_ACCOUNTS:
      return [...state, action.payload.data]
    default:
      return state;
  }
}
