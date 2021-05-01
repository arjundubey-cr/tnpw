import { Alert, Card, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDepartment } from '../redux/departmentList/departmentListAction'
import { useEffect } from 'react'
import { toastNotification } from '../components/ToastNotif'
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
        <p>
          From its very inception, FoET has been striving to develop itself into
          an institution of excellence in education and research in consonance
          with the contemporary and future needs of India. In its continual
          endeavor to achieve excellence in education, the institution offer
          courses in following 5 departments, our students combine analytical
          rigor with curiosity, playful imagination, and an appetite for solving
          the hardest problems in service to society.
        </p>
        {data ? (
          data.map((value) => (
            <div className='department-list row  d-flex justify-content-between pb-5'>
              <Card className='department-name-card col-md-6 col-lg-4 shadow-neuro p-1'>
                <Card.Header className='text-center font-weight-bold'>
                  Department Name
                </Card.Header>
                <Card.Body>
                  <Card.Title className='text-center'>
                    {value.departmentName}
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card className='displines-name-card col-md-5 col-lg-4 p-0 shadow-neuro p-1'>
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
              <Card className='contact-person-card col-md-5 col-lg-3 shadow-neuro p-1'>
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
          <Spinner animation='border' role='status'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        ) : (
          error && toastNotification(error, 'error')
        )}
      </div>
    </div>
  )
}

export default DepartmentScreen
