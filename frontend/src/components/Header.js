import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {
  return (
    <header>
      <Navbar bg='light' variant='light' expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <h4>TnP | FoET</h4>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <NavDropdown title='FoET, LU' id='basic-nav-dropdown'>
                <LinkContainer to='/students'>
                  <NavDropdown.Item>Students</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/academics'>
                  <NavDropdown.Item>Academics</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title='Downloads' id='basic-nav-dropdown'>
                <LinkContainer to='/brochures'>
                  <NavDropdown.Item>Brochures</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/documents'>
                  <NavDropdown.Item>Documents</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/guidelines'>
                  <NavDropdown.Item>Guidelines</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title='Team' id='basic-nav-dropdown'>
                <LinkContainer to='/administration'>
                  <NavDropdown.Item>Administration</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/studentteam'>
                  <NavDropdown.Item>Student Team</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title='For Students' id='basic-nav-dropdown'>
                <LinkContainer to='/login'>
                  <NavDropdown.Item>Login</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/faq'>
                  <NavDropdown.Item>FAQ</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/alumni'>
                  <NavDropdown.Item>Alumni</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title='For Recruiters' id='basic-nav-dropdown'>
                <LinkContainer to='/contactus'>
                  <NavDropdown.Item>Contact Us</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/hiringproc'>
                  <NavDropdown.Item>Hiring Procedure</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/pastrecruiters'>
                  <NavDropdown.Item>Past Recruiters</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
