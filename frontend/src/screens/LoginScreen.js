import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Form,
  Button,
  Row,
  Col,
  Alert,
  Spinner,
  Card,
  Container,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { login } from '../redux/authentication/authenticationAction'
import { toastNotification } from '../components/ToastNotif'

const LoginScreen = ({ location, history }) => {
  const [rollNumber, setRollNumber] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  let redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
      toastNotification('Successfully Logged')
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(rollNumber, password))
    if (error) {
      toastNotification(error, 'error')
    }
  }

  return (
    <div>
      <Alert className='heading-button text-center font-weight-bolder'>
        Login
      </Alert>
      <Container className='col-12 col-md-5 col-lg-4'>
        <Card className='login-card shadow-neuro p-5'>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
              <Form.Label>Roll Number</Form.Label>
              <Form.Control
                required
                type='string'
                placeholder='Enter University Roll Number'
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}></Form.Control>
            </Form.Group>

            <Button block type='submit' variant='primary' className='mt-4'>
              {loading ? (
                <Spinner
                  as='span'
                  animation='border'
                  size='sm'
                  role='status'
                  aria-hidden='true'
                />
              ) : (
                <>Sign In</>
              )}
            </Button>
          </Form>

          <Row className='pt-4 text-center'>
            <Col>
              New Student?{' '}
              <Link
                className='font-weight-bolder'
                to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                Register
              </Link>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  )
}

export default LoginScreen
