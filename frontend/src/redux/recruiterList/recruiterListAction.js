import {
  RECRUITER_LIST_FAIL,
  RECRUITER_LIST_REQUEST,
  RECRUITER_LIST_SUCCESS,
} from './recuiterListType'
import axios from 'axios'
export const fetchRecruiters = () => async (dispatch) => {
  try {
    dispatch({
      type: RECRUITER_LIST_REQUEST,
    })
    const recruiterData = await axios.get('/api/recruiters')
    dispatch({
      type: RECRUITER_LIST_SUCCESS,
      payload: recruiterData.data,
    })
    localStorage.setItem('recruiterData', JSON.stringify(recruiterData))
  } catch (error) {
    dispatch({
      type: RECRUITER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
