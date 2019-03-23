import { combineReducers } from "redux"
import { reducer as form } from 'redux-form'

import accounts from "./accounts"

export default combineReducers({
  form,
  accounts
});
