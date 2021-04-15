import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
const Footer = () => {
  return (
    <footer className='pl-md-5 pt-md-5 mx-md-5'>
      <Container fluid>
        <Row className='justify-content-between'>
          <Col sm={12}>
            <h5>TnP | FoET</h5>
            <address>
              Training and Placement Cell <br />
              AB-2, Faculty of Engineering and Technology <br />
              University of Lucknow New Campus <br />
              Jankipuram, Lucknow - 226021
            </address>
          </Col>
          <Col sm={12} md={6}>
            <h6>Useful Links</h6>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <h6>External Links</h6>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <h6>Social Networks</h6>
          </Col>
        </Row>
        <Row className='justify-content-between pl-5 pr-5'>
          <div>&copy; 2021 TnP, FoET. All Rights Reserved</div>
          <div>
            Developed by <strong>Arjun Dubey</strong>
          </div>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer
