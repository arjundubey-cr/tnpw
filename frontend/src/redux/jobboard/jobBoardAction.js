import { JOB_BOARD_FAIL, JOB_BOARD_REQUEST, JOB_BOARD_SUCCESS } from "./jobBoardType"
import axios from "axios"
export const fetchJobs = () => async (dispatch) => {
  try {
    dispatch({
      type: JOB_BOARD_REQUEST,
    })
    const jobBoardData = await axios.get("/api/companies")
    dispatch({
      type: JOB_BOARD_SUCCESS,
      payload: jobBoardData.data,
    })
  } catch (error) {
    dispatch({
      type: JOB_BOARD_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
