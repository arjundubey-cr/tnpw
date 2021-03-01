import React, { useState, useEffect } from 'react'
import axios from 'axios'
const PastRecruiters = () => {
  const [recruiters, setRecruiters] = useState([])

  useEffect(() => {
    const fetchRecruiters = async () => {
      const { data } = await axios.get('/api/recruiters')
      setRecruiters(data)
    }
    fetchRecruiters()
  }, [])
  return <div>{{}}</div>
}

export default PastRecruiters
