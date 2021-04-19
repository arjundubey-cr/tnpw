import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Alert, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import {
  getUserDetails,
  updateUserDetails,
} from '../redux/userDetails/userDetailsAction'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
const RegistrationScreen = ({ location, history }) => {
  //defining all the states
  const [rollNumber, setRollNumber] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [show, setShow] = useState(true)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdate)
  const { loading, success } = userUpdateProfile

  const toastCustomId = 'id007'
  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user || !user.firstName) {
        dispatch(getUserDetails('profile'))
      } else {
        setFirstName(user.firstName)
        setLastName(user.lastName)
        setEmail(user.email)
        setRollNumber(user.rollNumber)
      }
    }
  }, [history, userInfo, dispatch, user])

  const handleChange = (e) => {
    const { id, value } = e.target
    switch (id) {
      case 'firstName':
        setFirstName(value)
        break
      case 'lastName':
        setLastName(value)
        break
      case 'rollNumber':
        setRollNumber(value)
        break
      case 'email':
        setEmail(value)
        break
      default:
        break
    }
  }
  const toastNotification = (message, type) => {
    if (type === 'error') {
      toast.error(message, {
        toastId: toastCustomId,
      })
    } else {
      toast.success(message, {
        taostId: toastCustomId,
      })
    }
    toast.clearWaitingQueue()
  }
  const submitHandler = async (e) => {
    e.preventDefault()

    const alphabetRegex = /^[A-Za-z]+$/
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (password !== confirmPassword) {
      setShow(false)
      toastNotification('Passwords do not match!', 'error')
    } else if (
      !alphabetRegex.test(firstName) ||
      !alphabetRegex.test(lastName) ||
      !emailRegex.test(email) ||
      firstName === '' ||
      lastName === ''
    ) {
      setShow(false)
      toastNotification('Please, Enter your details correctly', 'error')
    } else {
      dispatch(
        updateUserDetails({ id: user.id, firstName, lastName, email, password })
      )
      setShow(true)
    }
    if (show) {
      toastNotification('Details Updated')
    }
  }

  return (
    <div>
      <ToastContainer limit={1} />
      <Alert className='heading-button text-center font-weight-bolder'>
        My Profile
      </Alert>
      <Container>
        {error ? (
          <Message variant='danger'>{error}</Message>
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
              <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}></Form.Control>
              </Form.Group>
              <Form.Group controlId='confirmpassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Confirm password'
                  value={confirmPassword}
                  onChange={(e) =>
                    setconfirmPassword(e.target.value)
                  }></Form.Control>
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

export default RegistrationScreen
