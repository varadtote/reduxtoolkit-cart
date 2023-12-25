import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavbarPanel = () => {
  const cartProducts = useSelector((state) => state.cart);
  useEffect(() => {
    console.log(cartProducts);
  }, [cartProducts]);

  return (
    <div>
      {/* Navbar Component  */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand to="/" as={Link}>
            Redux Toolkit
          </Navbar.Brand>

          <Nav>
            <Nav.Link as={Link} to="/dashboard">
              Products
            </Nav.Link>
          </Nav>
          <Navbar.Toggle />

          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Navbar.Text>
              <Nav.Link as={Link} to="/cart">
                My Bag {cartProducts.length}
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarPanel;
