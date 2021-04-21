import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { register } from '../redux/userRegistration/userRegistrationAction'
import { toastNotification } from '../components/ToastNotif'
const RegistrationScreen = ({ location, history }) => {
  const [rollNumber, setRollNumber] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error } = userRegister

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push('/')
      toastNotification('Successfully Logged In')
    }
  }, [history, userInfo, redirect])

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
      default:
        break
    }
  }
  const submitHandler = (e) => {
    e.preventDefault()
    const letters = /^[A-Za-z]+$/
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (password !== confirmPassword) {
      toastNotification('Passwords do not match!', 'error')
    } else if (
      !letters.test(firstName) ||
      !letters.test(lastName) ||
      !emailRegex.test(email) ||
      firstName === '' ||
      lastName === ''
    ) {
      toastNotification('Please, Enter your details correctly', 'error')
    } else {
      dispatch(register(firstName, lastName, email, rollNumber, password))
    }
    if (error) {
      toastNotification(error, 'error')
    }
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {/* {loading && <Message variant='info'>Loading...</Message>} */}
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
            onChange={(e) => setconfirmPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          {loading ? <Spinner /> : <>Register</>}
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Have an Account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegistrationScreen
