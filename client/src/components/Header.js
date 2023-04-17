import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink } from 'react-router-dom';

const Header = () => {



  const common = {
    marginRight: 15,
    fontSize: 17,
    letterSpacing: ".5px",
  };

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <div>
            <h2 className="mt-2 h2_right" style={{ color: "#6c63ff" }}>
              <Nav.Link href="#home">
                Niraj Kumar Sharma
              </Nav.Link>
            </h2>
          </div>

          <Nav className="">
            <div className="mt-2">
              <NavLink to="/" className="text-decoration-none" style={common}>
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-decoration-none"
                style={common}
              >
                About
              </NavLink>
              <NavLink
                to="/playlist"
                className="text-decoration-none"
                style={common}
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className="text-decoration-none"
                style={common}
              >
                Contact
              </NavLink>
            </div>

            <div>
              <Button variant="danger">YouTube</Button>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header