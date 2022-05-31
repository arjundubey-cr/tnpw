import React, { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { applyJob } from "../redux/jobboard/jobBoardAction"
import { getUserDetails } from "../redux/userDetails/userDetailsAction"
const DisplayJobComponent = (props) => {
  //console.log(props)
  const dispatch = useDispatch()
  const userDetails = useSelector((state) => state.userLogin.userInfo._id)
  const details = useSelector((state) => state.userLogin.userInfo)
  const { companyName, jobTitle, lowerLimitSalary, upperLimitSalary } = props.props
  const [applied, setApplied] = useState(false)
  useEffect(() => {
    console.log(details)
    const dt = details.data
    const trueOrNot = dt?.appliedArray.includes(props.props._id)
    setApplied(trueOrNot)
  }, [details])

  return (
    <div className="ranking-card">
      <Card className="mx-5 mt-3">
        <Card.Body>
          <div>
            <div className="d-md-flex d-sm-block align-items-center justify-content-between">
              <div>{companyName}</div>
              <div>{jobTitle}</div>
              <div>
                {lowerLimitSalary.toLocaleString("en-IN", { style: "currency", currency: "INR" })}
              </div>
              <div>
                {upperLimitSalary.toLocaleString("en-IN", { style: "currency", currency: "INR" })}
              </div>
            </div>
            <div className="d-flex flex-row-reverse mt-3">
              <Button className="ml-2 mr-0">View Job Desciption</Button>
              {applied ? (
                <Button disabled>Applied</Button>
              ) : (
                <Button
                  variant={"info"}
                  onClick={(event) => {
                    event.preventDefault()
                    dispatch(applyJob(props.props._id, userDetails))
                  }}>
                  Apply
                </Button>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default DisplayJobComponent
