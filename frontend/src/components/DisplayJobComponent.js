import React from "react"
import { Button, Card } from "react-bootstrap"
const DisplayJobComponent = (props) => {
  //console.log(props)
  const { name, profile, lowerLimitSalary, upperLimitSalary, applied } = props.props
  return (
    <div className="ranking-card">
      <Card className="mx-5 mt-3">
        <Card.Body>
          <div>
            <div className="d-md-flex d-sm-block align-items-center justify-content-between">
              <div>{name}</div>
              <div>{profile}</div>
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
                <Button variant={"info"}>Apply</Button>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default DisplayJobComponent
