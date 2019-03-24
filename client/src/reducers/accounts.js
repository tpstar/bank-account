import { CREATE_ACCOUNT, FETCH_ACCOUNTS, REMOVE_ACCOUNT } from '../actions'

const initialStates = []

export default (state = initialStates, action) => {
  switch (action.type) {
    case FETCH_ACCOUNTS:
      return [...action.payload.data, ...state]
    case CREATE_ACCOUNT:
      return [...state, action.payload.data]
    case REMOVE_ACCOUNT:
      return state.filter(account => account.id !== action.payload.data.id)
    default:
      return state;
  }
}
