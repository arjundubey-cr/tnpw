import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { ReactComponent as Youtube } from '../assets/icons/youtube.svg'
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin.svg'
import { ReactComponent as Mail } from '../assets/icons/gmail.svg'
const Footer = () => {
  return (
    <footer className='footer mb-2'>
      <Container className='pt-4'>
        <Row className='justify-content-between'>
          <Col sm={12} md={4}>
            <h5>TnP | FoET</h5>
            <p>
              Training and Placement Cell <br />
              AB-2, Faculty of Engineering and Technology <br />
              University of Lucknow New Campus <br />
              Jankipuram, Lucknow - 226021
            </p>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <h6 className='text-center'>Useful Links</h6>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <h6 className='text-center'>Social Networks</h6>
            <Row className='justify-content-around'>
              <Button className='youtube-button'>
                <a href='https://www.youtube.com/channel/UC1nHjrX7kO0Al4ArUwShFLg'>
                  <Youtube />
                </a>
              </Button>
              <Button className='linkedin-button'>
                <a href='https://www.youtube.com/channel/UC1nHjrX7kO0Al4ArUwShFLg'>
                  <LinkedIn />
                </a>
              </Button>
              <Button className='mail-button'>
                <a href='https://www.youtube.com/channel/UC1nHjrX7kO0Al4ArUwShFLg'>
                  <Mail />
                </a>
              </Button>
            </Row>
          </Col>
        </Row>
        <Col>
          <div className='text-center'>
            &copy; 2021 TnP, FoET. All Rights Reserved
          </div>
          <div className='text-center'>
            Developed by <strong>Arjun Dubey</strong>
          </div>
        </Col>
      </Container>
    </footer>
  )
}
export default Footer
