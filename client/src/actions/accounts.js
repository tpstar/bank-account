import axios from 'axios'

export const FETCH_ACCOUNTS = "fetch_accounts"

const ROOT_URL = "http://localhost:5000/api/v1/"

export const fetchAccounts = () => {
  const request = axios.get(`${ROOT_URL}/accounts`)
  return {
    type: FETCH_ACCOUNTS,
    payload: request
  }
}
