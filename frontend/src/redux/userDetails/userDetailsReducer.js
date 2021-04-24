import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_UPDATE_FAIL,
  USER_DETAILS_UPDATE_REQUEST,
  USER_DETAILS_UPDATE_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
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
      return { ...state, loading: true, success: false }
    case USER_DETAILS_UPDATE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case USER_DETAILS_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false }
    default:
      return state
  }
}

export const userListReducer = (state = { user: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true }
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload }
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
