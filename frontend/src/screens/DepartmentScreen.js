import { Alert, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDepartment } from '../redux/departmentList/departmentListAction'
import Message from '../components/Message'
import { useEffect } from 'react'
const DepartmentScreen = () => {
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
        Department
      </Alert>
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
                      <>
                        {disciplinesName} <br />
                      </>
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
                    <>
                      {value.contactPerson.name}
                      <br />
                      {value.contactPerson.email}
                      <br />
                    </>
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

export default DepartmentScreen
