import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar
      bg=""
      expand="lg"
      className="py-3 fixed-top"
      style={{
        backgroundColor: "rgba(248, 249, 250, 0.95)",
        padding: "0 8%"
        /*color: "red"*/
      }}
    >
      <Navbar.Brand href="/">
        <img
          src="https://seerbit.com/images/logo.png"
          alt="Seerbit"
          style={{
            width: "120px"
            /*height: "25px"*/
          }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="mr-auto text-left  navmargin"
          style={{
            marginLeft: "5%",
            color: "red"
          }}
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/features">Features</Nav.Link>
          <Nav.Link href="/pricing">Pricing</Nav.Link>
          <Nav.Link href="/resources">Resources</Nav.Link>
          <Nav.Link href="/support">Support</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
        <a href="/getstarted" className="ml-auto pl-0 ml-0 getstarted">
          Get Started with SeerBit
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
}
