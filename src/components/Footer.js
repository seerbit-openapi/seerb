import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="mb-0 pb-0">
      <Container>
        <Row className="footer-container">
          <Col xs={6} sm={4} md={4} lg={2} className="">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li className="py-2">
                <Link to={"./"}>Pricing</Link>
              </li>
              <li className="py-2">
                <Link to={"./"}>Payment Methods</Link>
              </li>
              <li className="py-2">
                <Link to={"./"}>Disputes</Link>
              </li>
              <li className="py-2">
                <Link to={"./"}>Refunds</Link>
              </li>
              <li className="py-2">
                <Link to={"./"}>Recurring Payments</Link>
              </li>
            </ul>
          </Col>
          <Col xs={6} sm={4} md={4} lg={2}>
            <h5>Knowledge Hub</h5>
            <ul className="list-unstyled text-small">
              <li className="py-2">
                <Link to={"./"}>Pricing</Link>
              </li>
              <li className="py-2">
                <Link to={"./"}>Payment Methods</Link>
              </li>
              <li className="py-2">
                <Link to={"./"}>Disputes</Link>
              </li>
              <li className="py-2">
                <Link to={"./"}>Refunds</Link>
              </li>
              <li className="py-2">
                <Link to={"./"}>Recurring Payments</Link>
              </li>
            </ul>
          </Col>
          <Col xs={6} sm={4} md={4} lg={2}>
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li className="py-2">
                <Link to={"./"}>Team</Link>
              </li>
              <li className="py-2">
                <Link to={"./"}>Team</Link>
              </li>
              <li className="py-2">
                <Link to={"./"}>Team</Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link to={"./"}>Team</Link>
              </li>
              <li>
                <Link to={"./"}>Team</Link>
              </li>
              <li>
                <Link to={"./"}>Team</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
