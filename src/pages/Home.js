import React from "react";
import { Header, Footer } from "../components";
import { Container, Row, Col } from "react-bootstrap";
import { features, products, brands, studies } from "../data/home";
import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <section id="hero" className="jumbotron">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} className="py-5 my-5">
              <h1 className="header">
                The only payment gateway your business needs
              </h1>
              <p className="subheader py-3">
                Accept online payments from multiple methods in one single,
                seamless integration. SeerBit helps your business process online
                payments from various channels across Africa.{" "}
              </p>
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">
                  Get Started
                </a>
              </p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <img
                src="https://via.placeholder.com/300"
                className="responsive"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section id="intro">
        <Container className="py-5 px-0 my-5">
          <Col xs={12} sm={12} md={6} lg={6}>
            <p className="title">Why Seerbit</p>
            <h1 className="header">
              Tailored Payments Solutions for your business.
            </h1>
            <p className="subheader py-3">
              At SeerBit, we have a range of payment methods to cater to every
              business. We don't just throw you a bouquet of solutions you don't
              need. We walk with you to tailor your payment options and give you
              exactly what you and your shoppers need.
            </p>
          </Col>
          <Col className="py-3">
            <Row>
              {features.map(data => (
                <Col xs={12} sm={12} md={6} lg={4}>
                  <div className="px-0 mx-0">
                    <img
                      src={`/images/${data.logo}`}
                      alt="secure_payment"
                      width="50"
                    />
                  </div>
                  <h6 className="features-title py-3">{data.title}</h6>
                  <p className="features-body">{data.short_description}</p>
                </Col>
              ))}
            </Row>
          </Col>
        </Container>
      </section>
      <section id="product" className="jumbotron">
        <Container className="px-0 my-5">
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <img
                src="https://via.placeholder.com/300"
                className="responsive"
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="my-auto">
              <h1 className="header">
                Get a full view of your business at a glance.
              </h1>
              <p className="subheader py-3">
                We've designed our platform to allow you to see all payments
                across multiple channels on a single dashboard. It's never been
                so easy to track performance, optimize and grow.
              </p>
              <Col className="py-3">
                <Row>
                  {products.map(data => (
                    <Col xs={12} sm={12} md={6} lg={6}>
                      <div className="px-0 mx-0">
                        <img
                          src={`/images/${data.logo}`}
                          alt="secure_payment"
                          width="50"
                        />
                      </div>
                      <h6 className="features-title py-3">{data.title}</h6>
                      <p className="features-body">{data.short_description}</p>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="brand">
        <Container className="py-5 px-0 my-5">
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <h1 className="header">Brands that trust us...</h1>
              <p className="subheader py-3">
                It's easier to focus on building great products and services
                when payment works. For these companies, accepting money from
                their customers isn't their problem. It's our pleasure.
              </p>
            </Col>
            <Row>
              {brands.map(data => (
                <Col xs={12} sm={4} md={4} lg={4}>
                  <div className="px-0 text-center">
                    <img
                      src={`/images/${data.logo}`}
                      alt="secure_payment"
                      width="70"
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Row>
        </Container>
      </section>
      <section id="product" className="jumbotron">
        <Container className="py-5 px-0 my-5">
          <Col xs={12} sm={12} md={6} lg={6}>
            <p className="title">Case Studies</p>
            <h1 className="header">The Impact of SeerBit.</h1>
          </Col>
          <Col className="py-3">
            <Row>
              {studies.map(data => (
                <Col xs={12} sm={12} md={6} lg={6}>
                  <div className="px-0 mx-0">
                    <img
                      src="https://via.placeholder.com/1200x500"
                      alt="secure_payment"
                      width="500"
                    />
                  </div>
                  <h6 className="features-title py-3">{data.title}</h6>
                  <p className="features-body">{data.short_description}</p>
                </Col>
              ))}
            </Row>
            <hr className="my-5" />
            <Col className="text-center pt-4">
              <div style={{ width: "50%", margin: "auto" }}>
                <h1 className="header">Get the SeerBit Edge.</h1>
                <p className="subheader py-3">
                  With SeerBit, you get all the flexibility that comes with an
                  innovative online payment gateway and the security of a
                  PCI-DSS certified payment processor.
                </p>
                <p className="lead">
                  <a className="btn btn-primary btn-lg" href="#" role="button">
                    Get Started
                  </a>
                </p>
              </div>
            </Col>
          </Col>
        </Container>
      </section>
      <Footer />
    </>
  );
}
