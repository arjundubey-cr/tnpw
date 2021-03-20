import React from 'react'
import { Card } from 'react-bootstrap'
import THElogo from '../assets/images/THElogo.png'
const HomeScreen = () => {
  return (
    <div>
      <h1>Welcome to Training and Placement Cell</h1>

      <div className='ranking-card'>
        <Card style={{ width: '18rem' }} className='mx-auto text-center mb-5 '>
          <Card.Header>
            {' '}
            <strong>Amongst the</strong>{' '}
          </Card.Header>
          <Card.Img variant='top' src={THElogo}></Card.Img>
          <Card.Title>Top 1000</Card.Title>
          <Card.Text>
            Universities Globally for Engineering and Technology
          </Card.Text>
        </Card>
      </div>

      <div>
        The Faculty of Engineering and Technology was re-established as one of
        the Faculties of the University of Lucknow in 2017 with the aim of
        becoming a pioneer in the field of technical education. The Faculty has
        five branches of Engineering,i.e., Civil, Electrical, Mechanical,
        Electronics & Communication, and Computer Science & Engineering. With an
        intake of 90 students in Computer Science & Engineering and 60 students
        in each of the other four departments. The first batch of students took
        admission through UPSEE-2017, and all the seats filled on day one of the
        counseling. The classes started as scheduled and are being run smoothly
        with all the desired infrastructural and academic facilities in place.
      </div>
      <div>
        FoET, University of Lucknow offers rigorous courses and vast exposure
        through multivariate extra- curricular and co-curricular activities.
        Besides, students are skilled with social skills along with technical
        expertise. In contemporary times, these students work in multi-faceted
        domains like on roles as scientists, designers, technologists, business
        managers, entrepreneurs, etc.
      </div>
      <br />
    </div>
  )
}

export default HomeScreen
