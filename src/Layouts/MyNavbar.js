import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const MyNavbar = () => {
  let pathname = useLocation().pathname;

  const {
    product: { cart },
  } = useSelector((state) => state);

  const totalCartItem = cart.reduce(
    (total, currentValue, currentIndex, arr) => currentValue.quantity + total,
    0
  );

  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
      <Container>
        <Link to="/" className="navbar-brand">
          Dipta
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className={`nav-link ${pathname === "/" && "active"}`}>
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-link ${pathname === "/about" && "active"}`}
            >
              About
            </Link>
            <Link
              to="/products"
              className={`nav-link ${pathname === "/products" && "active"}`}
            >
              Products
            </Link>
            <Link
              to="/top-rated"
              className={`nav-link ${pathname === "/top-rated" && "active"}`}
            >
              Top Rated
            </Link>
            <Link
              to="/dashboard"
              className={`nav-link ${pathname === "/dashboard" && "active"}`}
            >
              Dashboard
            </Link>
            <Link to="/cart" className="cart-nav-icon">
              <span className="cart-icon ">
                <i className="ri-shopping-cart-line"></i>
                
              </span>
              <span className="cart-nav-quantity">{totalCartItem}</span>
              
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
