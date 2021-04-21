import React, { useState, useEffect } from 'react'
import {
  Form,
  Button,
  Container,
  Alert,
  Spinner,
  Col,
  Row,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  getUserDetails,
  updateUserDetails,
} from '../redux/userDetails/userDetailsAction'
import { toastNotification } from '../components/ToastNotif'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const ProfileScreen = ({ location, history }) => {
  //defining all the states
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [rollNumber, setRollNumber] = useState('')
  const [fathersName, setFathersName] = useState('')
  const [mothersName, setMothersName] = useState('')
  const [dob, setDob] = useState(new Date(2018, 11, 24))
  const [cgpa, setCgpa] = useState(0)
  const [tenthMarks, setTenthMarks] = useState(0)
  const [twelfthMarks, setTwelfthMarks] = useState(0)
  const [year, setYear] = useState(0)
  const [resumeLink, setResumeLink] = useState('')
  const [show, setShow] = useState(true)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdate)
  const { loading } = userUpdateProfile

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    console.log(history)
    if (!userInfo) {
      history.push(redirect)
    } else {
      if (!user || !user.firstName) {
        dispatch(getUserDetails('profile'))
      } else {
        setFirstName(user.firstName)
        setLastName(user.lastName)
        setEmail(user.email)
        setRollNumber(user.rollNumber)
        handleDateFormat(user.dob || new Date(2018, 11, 24))
        setFathersName(user.fathersName || '')
        setMothersName(user.mothersName || '')
        setCgpa(user.cgpa || '')
        setTenthMarks(user.tenthMarks || '')
        setTwelfthMarks(user.twelfthMarks || '')
        setYear(user.year || '')
        setResumeLink(user.resumeLink || '')
      }
    }
  }, [history, userInfo, dispatch, user])

  const handleDateFormat = (date) => {
    const dateObj = new Date(date)
    setDob(dateObj)
  }
  const handleChange = (e) => {
    const { id, value } = e.target
    switch (id) {
      case 'firstName':
        setFirstName(value.trim())
        break
      case 'lastName':
        setLastName(value.trim())
        break
      case 'rollNumber':
        setRollNumber(value.trim())
        break
      case 'email':
        setEmail(value.trim())
        break
      case 'mothersName':
        setMothersName(value)
        break
      case 'fathersName':
        setFathersName(value)
        break
      case 'cgpa':
        setCgpa(value.trim())
        break
      case 'tenthMarks':
        setTenthMarks(value.trim())
        break
      case 'twelfthMarks':
        setTwelfthMarks(value.trim())
        break
      case 'resumeLink':
        setResumeLink(value.trim())
        break
      case 'year':
        setYear(value)
        break
      default:
        break
    }
  }
  const validateName = () => {
    const alphaRegex = /^[A-Za-z]+$/
    const sentenceRegex = /^[a-zA-Z]+( [a-zA-Z]+)*$/
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!alphaRegex.test(firstName)) {
      toastNotification('Please enter your first name correctly!', 'error')
      return false
    } else if (!alphaRegex.test(lastName)) {
      toastNotification('Please enter your last name correctly!', 'error')
      return false
    } else if (!emailRegex.test(email)) {
      toastNotification('Please enter your Email correctly!', 'error')
      return false
    } else if (
      !sentenceRegex.test(fathersName) ||
      !sentenceRegex.test(mothersName)
    ) {
      toastNotification(
        "Please enter Father's and/or Mother's name correctly",
        'error'
      )
      return false
    }
  }
  const submitHandler = async (e) => {
    e.preventDefault()
    if (validateName()) {
      setShow(false)
      toastNotification('Please, Enter your details correctly', 'error')
    } else {
      dispatch(
        updateUserDetails({
          id: user.id,
          firstName,
          lastName,
          email,
          dob,
          fathersName,
          mothersName,
          cgpa,
          tenthMarks,
          twelfthMarks,
          year,
          resumeLink,
        })
      )
      setShow(true)
    }
    if (show) {
      toastNotification('Details Updated')
    }
  }

  return (
    <div>
      <Alert className='heading-button text-center font-weight-bolder'>
        My Profile
      </Alert>
      <Container>
        {error ? (
          toastNotification(error, 'error')
        ) : (
          <div>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='firstName'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type='firstName'
                  placeholder='First Name'
                  value={firstName}
                  onChange={handleChange}></Form.Control>
              </Form.Group>
              <Form.Group controlId='lastName'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type='lastName'
                  placeholder='Last Name'
                  value={lastName}
                  onChange={handleChange}></Form.Control>
              </Form.Group>
              <Form.Group controlId='rollNumber'>
                <Form.Label>Roll Number</Form.Label>
                <Form.Control
                  type='string'
                  placeholder='Enter University Roll Number'
                  value={rollNumber}
                  onChange={handleChange}></Form.Control>
              </Form.Group>
              <Form.Group controlId='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter Email'
                  value={email}
                  onChange={handleChange}></Form.Control>
              </Form.Group>
              <Form.Group controlId='fathersName'>
                <Form.Label>Father's Name</Form.Label>
                <Form.Control
                  type='fathersName'
                  placeholder="Father's Name"
                  value={fathersName}
                  onChange={handleChange}></Form.Control>
              </Form.Group>
              <Form.Group controlId='mothersName'>
                <Form.Label>Mother's Name</Form.Label>
                <Form.Control
                  type='mothersName'
                  placeholder="Mother's Name"
                  value={mothersName}
                  onChange={handleChange}></Form.Control>
              </Form.Group>

              <Form.Group controlId='dob'>
                <Form.Label>Date of Birth</Form.Label>
                <br />
                <DatePicker
                  className='w-100 form-control'
                  selected={dob}
                  onChange={(date) => setDob(date)}
                />
              </Form.Group>
              <Form.Group controlId='cgpa'>
                <Form.Label>Cumulative CGPA</Form.Label>
                <Form.Control
                  type='Number'
                  placeholder='CGPA'
                  value={cgpa}
                  onChange={handleChange}></Form.Control>
              </Form.Group>

              <Form.Group controlId='year'>
                <Form.Label>Year of Study</Form.Label>
                <Form.Control
                  as='select'
                  custom
                  onChange={handleChange}
                  value={year}>
                  <option value={1}>First Year</option>
                  <option value={2}>Second Year</option>
                  <option value={3}>Third Year</option>
                  <option value={4}>Fourth Year</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId='tenthMarks'>
                <Form.Label>Tenth Class Percentage</Form.Label>
                <Form.Control
                  type='tenthMarks'
                  placeholder='Enter Percentage'
                  value={tenthMarks}
                  onChange={handleChange}></Form.Control>
                <Form.Text id='tenthMarksHelpBlock' muted>
                  Enter numeric value of percentage. Enter 80 for 80%.
                  <br />
                  Convert your CGPA to percentage using appropriate scale
                </Form.Text>
              </Form.Group>
              <Form.Group controlId='twelfthMarks'>
                <Form.Label>Twelfth Class Percentage</Form.Label>
                <Form.Control
                  type='twelfthMarks'
                  placeholder='Enter Percentage'
                  value={twelfthMarks}
                  onChange={handleChange}></Form.Control>
              </Form.Group>
              <Form.Group controlId='resumeLink'>
                <Form.Label>Provide link to your Resume/CV</Form.Label>
                <Row>
                  <Col>
                    <Form.Control
                      type='resumeLink'
                      placeholder='https://'
                      value={resumeLink}
                      onChange={handleChange}
                      className='md-3'
                    />
                  </Col>
                  {resumeLink && (
                    <Button href={resumeLink} variant='outline-success'>
                      View Resume
                    </Button>
                  )}
                </Row>
              </Form.Group>

              <Button type='submit' variant='primary'>
                {loading ? (
                  <Spinner
                    as='span'
                    animation='border'
                    size='sm'
                    role='status'
                    aria-hidden='true'
                  />
                ) : (
                  <>Update</>
                )}
              </Button>
            </Form>
          </div>
        )}
      </Container>
    </div>
  )
}

export default ProfileScreen
