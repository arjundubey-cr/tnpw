import { USER_LOGIN_REQUEST } from './authenticationType'
import { useAuth0 } from '@auth0/auth0-react'

const login = () => async (dispatch) => {
  const { loginWithRedirect } = useAuth0()
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })
    loginWithRedirect()
  } catch (error) {}
}

export { login }
