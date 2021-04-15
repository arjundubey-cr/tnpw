import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_UPDATE_FAIL,
  USER_DETAILS_UPDATE_REQUEST,
  USER_DETAILS_UPDATE_SUCCESS,
} from './userDetailsType'

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload }
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DETAILS_UPDATE_REQUEST:
      return { ...state, loading: true }
    case USER_DETAILS_UPDATE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case USER_DETAILS_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
