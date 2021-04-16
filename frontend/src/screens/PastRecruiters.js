import React, { useEffect } from 'react'
import { Alert, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { fetchRecruiters } from '../redux/recruiterList/recruiterListAction'
const PastRecruiters = () => {
  const dispatch = useDispatch()
  const recruiterList = useSelector((state) => state.recruiterList)
  const { loading, error, list } = recruiterList

  useEffect(() => {
    dispatch(fetchRecruiters())
  }, [dispatch])
  return (
    <div>
      <Alert className='heading-button text-center font-weight-bolder'>
        Our Recruiters
      </Alert>
      <Container>
        {list ? (
          list.map((value) => (
            <Alert className='recruiter text-center py-1 font-weight-bold'>
              {value.name}
            </Alert>
          ))
        ) : loading ? (
          <Message variant='info'>Loading...</Message>
        ) : (
          error && <Message variant='danger'>{error}</Message>
        )}
      </Container>
    </div>
  )
}

export default PastRecruiters
