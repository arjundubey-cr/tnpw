import {
  USER_REGISTRATION_FAIL,
  USER_REGISTRATION_REQUEST,
  USER_REGISTRATION_SUCCESS,
} from './userRegistrationType'
import axios from 'axios'
import { USER_LOGIN_SUCCESS } from '../authentication/authenticationType'
export const register = (name, email, rollNumber, password) => async (
  dispatch
) => {
  try {
    dispatch({
      type: USER_REGISTRATION_REQUEST,
    })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      '/api/users',
      { name, email, rollNumber, password },
      config
    )
    dispatch({
      type: USER_REGISTRATION_SUCCESS,
      payload: data,
    })
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTRATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
