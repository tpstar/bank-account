import axios from 'axios'

export const FETCH_ACCOUNTS = "fetch_accounts"
export const CREATE_ACCOUNTS = "create_accounts"

const ROOT_URL = "http://localhost:5000/api/v1/"

const newAccount = account => {
  const request = axios.post(`${ROOT_URL}/accounts`, account)
  return {
    type: CREATE_ACCOUNTS,
    payload: request
  }
}

const updateAccount = account => {
  return null;
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
