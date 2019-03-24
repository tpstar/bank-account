import axios from 'axios'

export const FETCH_ACCOUNTS = "fetch_accounts"
export const CREATE_ACCOUNT = "create_account"
export const UPDATE_ACCOUNT = "update_account"
export const REMOVE_ACCOUNT = "remove_account"

const ROOT_URL = "http://localhost:5000/api/v1/"

const newAccount = account => {
  const request = axios.post(`${ROOT_URL}/accounts`, account)
  return {
    type: CREATE_ACCOUNT,
    payload: request
  }
}

const updateAccount = account => {
  const request = axios.patch(`${ROOT_URL}/accounts/${account.id}`, account)
  return {
    type: UPDATE_ACCOUNT,
    payload: request
  }
}

export const fetchAccounts = () => {
  const request = axios.get(`${ROOT_URL}/accounts`)
  return {
    type: FETCH_ACCOUNTS,
    payload: request
  }
}

export const submitAccount = account => {
  if (account.id) {
    return updateAccount(account)
  } else {
    return newAccount(account)
  }
}

export const removeAccount = accountId => {
  const request = axios.delete(`${ROOT_URL}/accounts/${accountId}`)
  return {
    type: REMOVE_ACCOUNT,
    payload: request
  }
}
