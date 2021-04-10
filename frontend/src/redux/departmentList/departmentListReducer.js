import {
  DEPARTMENT_LIST_FAIL,
  DEPARTMENT_LIST_REQUEST,
  DEPARTMENT_LIST_SUCCESS,
} from './departmentListType'

export const departmentListReducer = (state = {}, action) => {
  switch (action.type) {
    case DEPARTMENT_LIST_REQUEST:
      return { loading: true }
    case DEPARTMENT_LIST_SUCCESS:
      return { loading: false, data: action.payload }
    case DEPARTMENT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
