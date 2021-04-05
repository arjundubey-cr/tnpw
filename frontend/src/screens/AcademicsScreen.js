import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import axios from 'axios'

const AcademicsScreen = () => {
  const [details, setDetails] = useState([])

  useEffect(() => {
    const departmentDetails = async () => {
      const { data } = await axios('/api/departmentdetails')
      setDetails(data)
      console.log(details)
    }
    departmentDetails()
  }, [])

  return (
    <div>
      <Button
        variant='primary'
        size='lg'
        block
        disabled
        className='heading-button font-weight-bolder'>
        Academics
      </Button>
      <div className='mt-3 font-size-large'>
        The Faculty of Engineering and Technology has a thriving atmosphere in
        its environment. We invest our energies heavily in academic rigour,
        career development and campus engagement. Our students have the
        eagerness to learn and ameliorate their skills with practical
        application.
      </div>
      <div>
        {details.map((value) => (
          <div className='department-list d-flex justify-content-between'>
            <Card>
              <Card.Header>Department Name</Card.Header>
              <Card.Body>
                <Card.Title>{value.departmentName}</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Disciplines</Card.Header>
              <Card.Body>
                <Card.Text>
                  {value.disciplines.map((disciplinesName) => (
                    <div>
                      {disciplinesName} <br />
                    </div>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Contact Person</Card.Header>
              <Card.Body>
                <Card.Text>
                  <div>
                    {value.contactPerson.name}
                    <br />
                    {value.contactPerson.email}
                    <br />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AcademicsScreen
