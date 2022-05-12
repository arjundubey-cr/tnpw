import { JOBS_LIST_FAIL, JOBS_LIST_REQUEST, JOBS_LIST_SUCCESS } from "./departmentListType"

export const jobListReducer = (state = {}, action) => {
  switch (action.type) {
    case JOBS_LIST_REQUEST:
      return { loading: true }
    case JOBS_LIST_SUCCESS:
      return { loading: false, data: action.payload }
    case JOBS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
