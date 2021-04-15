import React, { useState, useEffect } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import {
  getUserDetails,
  updateUserDetails,
} from '../redux/userDetails/userDetailsAction'
const RegistrationScreen = ({ location, history }) => {
  const [rollNumber, setRollNumber] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdate)
  const { success } = userUpdateProfile

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user || !user.name) {
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email)
        setRollNumber(user.rollNumber)
      }
    }
  }, [history, userInfo, dispatch, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match!')
    } else {
      dispatch(updateUserDetails({ id: user.id, name, email, password }))
    }
  }

  return (
    <Container>
      <h1>User Profile</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Message variant='info'>Loading...</Message>}
      {success && <Message variant='info'>Details Updated</Message>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='rollNumber'>
          <Form.Label>Roll Number</Form.Label>
          <Form.Control
            type='string'
            placeholder='Enter University Roll Number'
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId='Email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId='comfirmpassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Update
        </Button>
      </Form>
    </Container>
  )
}

export default RegistrationScreen
