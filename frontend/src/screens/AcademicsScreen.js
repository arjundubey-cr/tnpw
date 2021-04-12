import React, { useEffect } from 'react'
import { Alert, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDepartment } from '../redux/departmentList/departmentListAction'
const AcademicsScreen = () => {
  const dispatch = useDispatch()
  const departmentList = useSelector((state) => state.departmentList)
  const { loading, error, data } = departmentList

  // this useEffect fetches data about departmentName, disciplinesName and contactPerson for each department
  useEffect(() => {
    dispatch(fetchDepartment())
  }, [dispatch])

  return (
    <div>
      <Alert className='heading-button text-center font-weight-bolder'>
        Academics
      </Alert>
      <div className='container mt-3 font-size-large'>
        The Faculty of Engineering and Technology has a thriving atmosphere in
        its environment. We invest our energies heavily in academic rigour,
        career development and campus engagement. Our students have the
        eagerness to learn and ameliorate their skills with practical
        application.
      </div>
      <div className='container'>
        {data ? (
          data.map((value) => (
            <div className='department-list row  d-flex justify-content-between pb-5'>
              <Card className='department-name-card col-md-6 col-lg-3 p-0'>
                <Card.Header className='text-center font-weight-bold'>
                  Department Name
                </Card.Header>
                <Card.Body>
                  <Card.Title className='text-center'>
                    {value.departmentName}
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card className='displines-name-card col-md-5 col-lg-3 p-0'>
                <Card.Header className='text-center font-weight-bold'>
                  Disciplines
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    {value.disciplines.map((disciplinesName) => (
                      <p>
                        {disciplinesName} <br />
                      </p>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='contact-person-card col-md-5  col-lg-3 p-0'>
                <Card.Header className='text-center font-weight-bold'>
                  Contact Person
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <p>
                      {value.contactPerson.name}
                      <br />
                      {value.contactPerson.email}
                      <br />
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : loading ? (
          <Message variant='info'>Loading...</Message>
        ) : (
          error && <Message variant='danger'>{error}</Message>
        )}
      </div>
    </div>
  )
}

export default AcademicsScreen
