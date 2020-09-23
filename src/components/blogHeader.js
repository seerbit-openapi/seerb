import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function BlogHeader() {
  return (
    <Navbar
      bg=""
      expand="lg"
      className="py-2 text-left "
      style={{
        backgroundColor: "#fff",
        padding: "0 6%",
        color: "#00112C !important",
        marginBottom: "60px",
        borderBottom: "1px solid #F3F6F9"
      }}
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto text-left">
          <Nav.Link href="/" className="mr-4">
            All
          </Nav.Link>
          <Nav.Link href="/" className="mr-4">
            Latest
          </Nav.Link>
          <Nav.Link href="/" className="mr-4">
            Technology
          </Nav.Link>
          <Nav.Link href="/" className="mr-4">
            Partenership
          </Nav.Link>
          <Nav.Link href="/" className="mr-4">
            Growth
          </Nav.Link>
          <Nav.Link href="/" className="mr-4">
            Product
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
