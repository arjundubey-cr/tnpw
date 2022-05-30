import React from "react"
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../redux/authentication/authenticationAction"
const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <>
      <Navbar expand="lg" collapseOnSelect className="inward-neuro pt-lg-2">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="py-2 px-2 mr-lg-4">
              <div className="font-weight-bolder brand-name">TnP | FoET </div>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="Why Recruit?" id="basic-nav-dropdown">
                <LinkContainer to="/students">
                  <NavDropdown.Item>Students</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/academics">
                  <NavDropdown.Item>Academics and Beyond</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/departments">
                  <NavDropdown.Item>Departments</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/alumni">
                  <NavDropdown.Item>Alumni</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <NavDropdown title="Team" id="basic-nav-dropdown">
                <LinkContainer to="/administration">
                  <NavDropdown.Item>Administration</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/studentteam">
                  <NavDropdown.Item>Student Team</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title="For Students" id="basic-nav-dropdown">
                {userInfo ? (
                  <div>
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/jobboard">
                      <NavDropdown.Item>Job Board</NavDropdown.Item>
                    </LinkContainer>
                  </div>
                ) : (
                  <LinkContainer to="/login">
                    <NavDropdown.Item>Login</NavDropdown.Item>
                  </LinkContainer>
                )}
                <LinkContainer to="/resources">
                  <NavDropdown.Item>Resources</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/faq">
                  <NavDropdown.Item>FAQ</NavDropdown.Item>
                </LinkContainer>
                {userInfo ? (
                  <NavDropdown.Item onClick={logoutHandler}>LogOut</NavDropdown.Item>
                ) : (
                  <></>
                )}
              </NavDropdown>
              <NavDropdown title="For Recruiters" id="basic-nav-dropdown">
                <>
                  <NavDropdown.Item
                    href="https://drive.google.com/file/d/1GiFpVAiE2ALvWJ2hIEYnEgv5ak0gPAnK/view"
                    target="_blank">
                    Brochures
                  </NavDropdown.Item>
                </>
                {userInfo && userInfo.isAdmin ? (
                  <LinkContainer to="/recruiter/studentlist">
                    <NavDropdown.Item>Student List</NavDropdown.Item>
                  </LinkContainer>
                ) : (
                  <></>
                )}
                <LinkContainer to="/contactus">
                  <NavDropdown.Item>Contact Us</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/hiringproc">
                  <NavDropdown.Item>Hiring Procedure</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/pastrecruiters">
                  <NavDropdown.Item>Past Recruiters</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
