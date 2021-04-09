import {
  RECRUITER_LIST_FAIL,
  RECRUITER_LIST_REQUEST,
  RECRUITER_LIST_SUCCESS,
} from './recuiterListType'

export const recruiterListReducer = (state = {}, action) => {
  switch (action.type) {
    case RECRUITER_LIST_REQUEST:
      return { loading: true }
    case RECRUITER_LIST_SUCCESS:
      return { loading: false, list: action.payload }
    case RECRUITER_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
