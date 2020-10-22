import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Waypoint } from "react-waypoint";

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
          className="mr-auto text-left navmargin"
          style={{
            marginLeft: "2%"
          }}
        >
          <Nav.Link href="/">Home</Nav.Link>
          {/*<Nav.Link href="/features">Features</Nav.Link>*/}
          <Nav.Link href="/pricing">Pricing</Nav.Link>
          <Nav.Link href="/developers">Developers</Nav.Link>
          <Nav.Link href="/support">Support</Nav.Link>
          {/*<Nav.Link href="/login">Login</Nav.Link>*/}
        </Nav>
        <a href="/contact-us" className="pl-0 ml-0 getstarted">
          Contact us
        </a>
        <a
          href="https://dashboard.seerbitapi.com/#/auth/login"
          className="pl-0 ml-3 getstarted"
        >
          Login
        </a>
        <a href="/getstarted" className="pl-0 ml-3 btn header-btn px-2 py-2">
          Get started with SeerBit
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
}
