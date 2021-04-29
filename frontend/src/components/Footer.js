import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
const Footer = () => {
  return (
    <footer className='footer'>
      <Container className='pt-4' fluid>
        <Row className='justify-content-between'>
          <Col sm={12} md={4}>
            <h5>TnP | FoET</h5>
            <address>
              Training and Placement Cell <br />
              AB-2, Faculty of Engineering and Technology <br />
              University of Lucknow New Campus <br />
              Jankipuram, Lucknow - 226021
            </address>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <h6>Useful Links</h6>
          </Col>
          <Col sm={12} md={4} lg={3}>
            <h6>External Links</h6>
          </Col>
          <Col sm={12} md={4} lg={2}>
            <h6>Social Networks</h6>
            <div>
              <a href='https://www.youtube.com/channel/UC1nHjrX7kO0Al4ArUwShFLg'>
                Youtube
              </a>
            </div>
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
