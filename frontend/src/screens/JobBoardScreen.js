import React, { useEffect } from "react"
import DisplayJobComponent from "../components/DisplayJobComponent"
import axios from "axios"
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
  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  }
  const { data } = axios.get("/api/users/companies", config)

  useEffect(() => {
    console.log("useEffect")
  })
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
