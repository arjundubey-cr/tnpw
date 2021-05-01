import { Container, Row, Alert, Card } from 'react-bootstrap'
import { ReactComponent as Location } from '../assets/icons/location.svg'
import { ReactComponent as Mail } from '../assets/icons/email.svg'
import { ReactComponent as Phone } from '../assets/icons/phone.svg'

const ContactScreen = () => {
  return (
    <div>
      <Alert className='heading-button text-center font-weight-bolder'>
        Contact
      </Alert>
      <Container>
        <Card className='shadow-neuro p-2 p-md-3 p-lg-5'>
          <Row className='mb-4 mt-4 contact-details'>
            <div className='col-md-4 col-lg-4 text-center align-items-center'>
              <div className='icon d-inline-flex align-items-center'>
                <Location className='d-block m-auto' />
              </div>
              <div className='font-weight-bold mb-2 mt-1'>Our Address</div>
              <div>
                Training and Placement Cell, AB-2, Faculty of Engineering and
                Technology, University of Lucknow New Campus, Jankipuram,
                Lucknow - 226021
              </div>
            </div>
            <div className='col-md-4 col-lg-4 text-center align-items-center'>
              <div className='icon d-inline-flex align-items-center'>
                <Mail className='d-block m-auto' />
              </div>
              <div className='font-weight-bold mb-2 mt-1'>Mail Us</div>
              <a href='mailto:tpcfoet@gmail.com'>tpcfet.lu@gmail.com</a>
            </div>
            <div className='col-md-4 col-lg-4 text-center justify-center'>
              <div className='icon d-inline-flex align-items-center'>
                <Phone className='d-block m-auto' />
              </div>
              <div className='font-weight-bold mb-2 mt-1'>Call Us</div>
              <a href='tel:+917905287870'>+91-705287870</a>
            </div>
          </Row>
          <Row className='inward-neuro p-4 mb-5 rounded'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.1993624301485!2d80.93629541483764!3d26.928893583120583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999576604a5549d%3A0x7dd8f3bc8cadaaf9!2sNew%20campus%20Lucknow%20University%20Faculty%20of%20engineering%20%2C%20Academic%20block%202nd!5e0!3m2!1sen!2sin!4v1618303669836!5m2!1sen!2sin'
              height='500px'
              width='100%'
              className='map'
              title='map'
              loading='lazy'></iframe>
          </Row>
        </Card>
      </Container>
    </div>
  )
}

export default ContactScreen
