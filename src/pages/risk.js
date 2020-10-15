import React from "react";
import { blogs } from "../data/pricing";
import { devs, brands, easy, features, security, next } from "../data/home";
// import "../styles/blog.css";
export default function Risk() {
  return (
    <>
      <section className="developers-header">
        <header className="container-fluid story-content">
          <div className="row story-header story-header--left">
            <div className="inner-container">
              <div className="row position-relative">
                <div className="story-header__image-wrapper col-lg-9 offset-lg-3">
                  <div
                    className="story-header__image overlap-snap-to-right image--rounded"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1515974256630-babc85765b1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)",
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  ></div>
                </div>
                <div className="story-header__info-wrapper col-lg-6 offset-lg-0 col-md-8 offset-md-2">
                  <div className="row">
                    <div className="story-header__info col-lg-11">
                      <div className="hero-header">
                        Risk Management<br></br>and Fraud Prevention
                      </div>
                      <p className="subheader py-3">
                        We specialise in providing a payment gateway solution
                        that comes equipped with a suite of advanced fraud
                        protection tools and a powerful risk management analysis{" "}
                        {/*SeerBit helps your business process online
                payments from various channels across Africa.*/}{" "}
                      </p>
                      <div className="lead font-16">
                        <a
                          className="btn section-btn px-2 py-2"
                          href="#"
                          role="button"
                        >
                          Get started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
      <section className="developers-description">
        <div className="container">
          <div className="terms pt-2 mb-2"> Fraud Prevention</div>
          <div className="terms-sub mb-3">
            When you sign up with SeerBit, your business is connected to our
            database of blacklisted cards, email addresses, device types, IP
            addresses and so on. Every transaction by your customer are screened
            against the database and we have an additional feature that enables
            you to block bad payments based on email, IP, or physical address,
            device ID, and more.{" "}
          </div>

          <div className="terms pt-2 mb-2"> Powerful Risk Management</div>
          <div className="terms-sub mb-3">
            Our integrated back office mangement solution makes it easy to
            review, detect and eliminate fraudulent transactions and perform
            ongoing risk analysis.{" "}
          </div>

          <br></br>
          <br></br>
        </div>
      </section>

      <section className="blogSection2">
        <div className="container">
          <div className="text-center">
            <div style={{ width: "100%", margin: "auto" }}>
              <div className="header">Get the SeerBit Edge.</div>
              <div className="subheader py-3 ">
                With SeerBit, you get all the flexibility that comes with an
                innovative <br /> online payment gateway and the security of a
                PCI-DSS certified payment processor.
              </div>
              <div className="lead font-20 mt-4">
                <a className="btn hero-btn px-2 py-2" href="#" role="button">
                  Get Started
                </a>
                <a href="" className="color283 ml-4 font-16">
                  Talk to us <img src={`/images/angleRight.svg`} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
