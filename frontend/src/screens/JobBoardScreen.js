import React, { useEffect } from "react"
import DisplayJobComponent from "../components/DisplayJobComponent"
import { fetchJobs } from "../redux/jobboard/jobBoardAction"
import { useDispatch, useSelector } from "react-redux"

const listOfCompanies = [
  {
    name: "Wozart",
    profile: "Management Trainee",
    lowerLimitSalary: 60000,
    upperLimitSalary: 240000,
    applied: true,
  },
  {
    name: "Wozart",
    profile: "Management Trainee",
    lowerLimitSalary: 60000,
    upperLimitSalary: 240000,
    applied: false,
  },
]

const JobBoardScreen = () => {
  const dispatch = useDispatch()
  const jobData = useSelector((state) => state)
  const { loading, error, data } = jobData
  useEffect(() => {
    dispatch(fetchJobs())
    console.log(jobData)
  }, [dispatch])
  return (
    <div>
      <h3 className="text-center my-2 mb-3">List</h3>
      {listOfCompanies.map((ele, id) => {
        return <DisplayJobComponent props={ele} key={id} />
      })}
    </div>
  )
}

export default JobBoardScreen
