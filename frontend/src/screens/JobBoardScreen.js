import React, { useEffect } from "react"
import DisplayJobComponent from "../components/DisplayJobComponent"
import { fetchJobs } from "../redux/jobboard/jobBoardAction"
import { useDispatch, useSelector } from "react-redux"

const JobBoardScreen = () => {
  const dispatch = useDispatch()
  const jobData = useSelector((state) => state.jobsList)
  const { loading, error, data } = jobData
  useEffect(() => {
    dispatch(fetchJobs())
  }, [dispatch])
  return (
    <div>
      <h3 className="text-center my-2 mb-3">List</h3>
      {data
        ? data.map((ele, id) => {
            return <DisplayJobComponent props={ele} key={id} />
          })
        : "Loading"}
    </div>
  )
}

export default JobBoardScreen
