import axios from 'axios'
import { config } from '../../config'

axios.defaults.baseURL = config.url // Sets base URL in axios

// Helper function to set auth header with token
export const setAuthHeader = token => ({
    headers: { authorization: `Bearer ${token}` }
})

export const register = payload => axios.post(`/users/register`, payload) // Registers (Won't really need this)

// export const getUser = userId => axios.get(`/users/${userId}`, setAuthHeader()) // Gets a user with the bearer auth header attached
