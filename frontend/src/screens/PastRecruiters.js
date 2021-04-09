import React, { useEffect } from 'react'
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
      {list ? (
        list.map((value) => <div>{value.name}</div>)
      ) : loading ? (
        <Message variant='info'>Loading...</Message>
      ) : (
        error && <Message variant='danger'>{error}</Message>
      )}
    </div>
  )
}

export default PastRecruiters
