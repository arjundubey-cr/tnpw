import React from 'react'
import { Card } from 'react-bootstrap'
import THElogo from '../assets/images/THElogo.png'
const HomeScreen = () => {
  return (
    <div className='container'>
      <h1 className='pt-5 text-center'>
        Welcome to Training and Placement Cell, FoET
      </h1>

      <div className='ranking-card'>
        <Card
          style={{ width: '18rem' }}
          className='mx-auto text-center mb-5 mt-5'>
          <Card.Header>
            {' '}
            <strong>Amongst the</strong>{' '}
          </Card.Header>
          <Card.Img variant='top' src={THElogo}></Card.Img>
          <Card.Title>Top 1000</Card.Title>
          <Card.Text>
            Universities Globally for <br /> Engineering and Technology
          </Card.Text>
        </Card>
      </div>

      <div>
        <p>
          The Faculty of Engineering and Technology was established in 2017 with
          the aim of becoming a pioneer in the field of technical education.
          With around 1600 students and 66 faculty members, in the three years
          since its inception, FoET has slowly been carving a niche for itself.
        </p>
        <p>
          Helmed by Prof. R.S. Gupta, an academician with fortitude and
          experience, the Faculty runs five engineering departments, namely,
          Computer Science &amp; Engineering, Civil Engineering, Mechanical
          Engineering, Electronics & Communication Engineering and Electrical
          Engineering.
        </p>
        <p>
          In addition, we have the Department of Applied Sciences and
          Humanities, catering to the needs of basic sciences and humanities
          useful for budding technocrats. Our students are encouraged to make
          meaningful contributions to society and engage in various activities.
          The Council of Student Activities ensures that students can learn
          diffrent perspective throught engagement, collaboration and
          innovation. Over these three years, FoET has emerged as a diverse and
          exceptional community which is fostering expertise, critical thinking
          and creativity in its students.
        </p>
      </div>
    </div>
  )
}

export default HomeScreen
