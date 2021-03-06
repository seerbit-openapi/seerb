import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="mb-0 pb-0">
      <Container>
        <Row className="footer-container">
          <Col xs={4} sm={4} md={2} lg={2} className="">
            <div className="mb-3 font-weight-bold">SeerBit</div>
            <ul className="list-unstyled text-small">
              <li className="footerlist">
                <Link to={"./"}>About</Link>
              </li>
              {/*} <li className="footerlist">
                <Link to={"./"}>Careers</Link>
  </li>*/}
              <li className="footerlist">
                <Link to={"./blog"}>Blog</Link>
              </li>
              <li className="footerlist">
                <Link to={"./contact-us"}>Contact</Link>
              </li>
            </ul>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} className="">
            <div className="mb-3 font-weight-bold">Features</div>
            <ul className="list-unstyled text-small">
              <li className="footerlist">
                <Link to={"./pricing"}>Pricing</Link>
              </li>
              <li className="footerlist">
                <Link to={"./payment-method"}>Payment Methods</Link>
              </li>
              <li className="footerlist">
                <Link to={"./"}>Libraries & Plugins</Link>
              </li>
              <li className="footerlist">
                <Link to={"./"}>Disputes</Link>
              </li>
              <li className="footerlist">
                <Link to={"./"}>Refunds</Link>
              </li>
              <li className="footerlist">
                <Link to={"./"}>Recurring Payments</Link>
              </li>
            </ul>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2}>
            <div className="mb-3 font-weight-bold">Knowledge Hub</div>
            <ul className="list-unstyled text-small">
              <li className=" footerlist">
                <Link to={"./"}>Get Started</Link>
              </li>
              <li className="footerlist">
                <Link to={"./"}>Documentation</Link>
              </li>
              {/*<li className="footerlist">
                <Link to={"./"}>API Reference</Link>
  </li>*/}
              <li className="footerlist">
                <Link to={"./"}>Support</Link>
              </li>
              <li className="footerlist">
                <Link to={"./"}>Realease Notes</Link>
              </li>
            </ul>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} className="">
            <div className="mb-3 font-weight-bold">Platform</div>
            <ul className="list-unstyled text-small">
              <li className="footerlist">
                <Link to={"./privacy"}>Privacy</Link>
              </li>
              <li className="footerlist">
                <Link to={"./terms-of-service"}>Terms of service</Link>
              </li>
              <li className="footerlist">
                <Link to={"./Security"}>Top Level Security</Link>
              </li>
              <li className=" footerlist">
                <Link to={"./risk"}>Risk Management</Link>
              </li>
              <li className=" footerlist">
                <Link to={"./risk"}>Fraud Prevention</Link>
              </li>
              {/*<li className="footerlist">
                <Link to={"/blog"}>Blog</Link>
</li>*/}
            </ul>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div div className=" font-weight-bold">
              Subcribe
            </div>
            <div className="input-group-prepend mb-4 pt-3 mt-4 ">
              <input
                type="text"
                placeholder="Email"
                className=" footer-input py-4 px-3 form-control"
              />
              <button className="btn  btn-footer-inpbtn" type="button">
                {" "}
                <img src={`/images/angleRight.svg`} alt="go" />{" "}
              </button>
            </div>
            <div>
              By submitting this form, you acknowledge that you have reviewed
              the terms of our Privacy Statement and consent to the use of data
              in accordance there with.
            </div>
            <div className="mt-4 pt-1">
              <a href="">
                <img src={`/images/linkedin.svg`} alt="linkedIn" />
              </a>
              <a href="" className="mx-4">
                {" "}
                <img src={`/images/instagram.svg`} alt="instagram" />
              </a>
              <a href="">
                {" "}
                <img src={`/images/twitter.svg`} alt="twitter" />
              </a>
            </div>
          </Col>
        </Row>
        <div className="text-center py-5">
          2020 SeerBit | All Rights Reserved
        </div>
      </Container>
    </footer>
  );
}
