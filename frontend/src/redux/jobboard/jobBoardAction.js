import {
  JOB_BOARD_FAIL,
  JOB_BOARD_REQUEST,
  JOB_BOARD_SUCCESS,
  JOB_BOARD_APPLY_FAIL,
  JOB_BOARD_APPLY_REQUEST,
  JOB_BOARD_APPLY_SUCCESS,
} from "./jobBoardType"
import { USER_REGISTRATION_SUCCESS } from "../userRegistration/userRegistrationType"
import { USER_LOGIN_SUCCESS } from "../authentication/authenticationType"
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
    console.log(jobBoardData)
  } catch (error) {
    dispatch({
      type: JOB_BOARD_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const applyJob = (jobID, userID) => async (dispatch) => {
  console.log("application to job", jobID, userID)
  try {
    dispatch({
      type: JOB_BOARD_APPLY_REQUEST,
    })
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    const data = await axios.post("/api/companies/apply", { jobID, userID }, config)
    dispatch({
      type: JOB_BOARD_APPLY_SUCCESS,
      payload: data,
    })
    dispatch({
      type: USER_REGISTRATION_SUCCESS,
      payload: data,
    })
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
    console.log(data)
  } catch (error) {
    dispatch({
      type: JOB_BOARD_APPLY_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
