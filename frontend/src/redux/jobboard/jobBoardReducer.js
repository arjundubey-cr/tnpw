import { JOB_BOARD_FAIL, JOB_BOARD_REQUEST, JOB_BOARD_SUCCESS } from "./jobBoardType"

export const jobBoardReducer = (state = {}, action) => {
  switch (action.type) {
    case JOB_BOARD_REQUEST:
      return { loading: true }
    case JOB_BOARD_SUCCESS:
      return { loading: false, data: action.payload }
    case JOB_BOARD_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
