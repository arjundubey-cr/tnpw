import {
  DEPARTMENT_LIST_FAIL,
  DEPARTMENT_LIST_REQUEST,
  DEPARTMENT_LIST_SUCCESS,
} from './departmentListType'
import axios from 'axios'
export const fetchDepartment = () => async (dispatch) => {
  try {
    dispatch({
      type: DEPARTMENT_LIST_REQUEST,
    })
    const departmentList = await axios.get('/api/departmentdetails')
    dispatch({
      type: DEPARTMENT_LIST_SUCCESS,
      payload: departmentList.data,
    })
  } catch (error) {
    dispatch({
      type: DEPARTMENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
