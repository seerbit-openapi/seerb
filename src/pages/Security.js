import React from "react";
import { blogs } from "../data/pricing";
import { devs, brands, easy, features, security, next } from "../data/home";
// import "../styles/blog.css";
export default function Security() {
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
                        Top<br></br>level securtiy
                      </div>
                      <p className="subheader py-3">
                        offering you the highiest security standards in the
                        industry.{" "}
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
          <div className="terms pt-2 mb-2"> Top Level Security</div>
          <div className="terms-sub mb-3">
            Every transaction processed by SeerBit happens in a secure and
            encrypted environment. SeerBit has achieved top-tier security
            status, defined the Payment Card Industry Data Security Standard
            (PCI-DSS Level 1), so your customers' data is completely safe with
            us. In fact, because of our up-to-date PCI DSS certification,
            businesses that use our us are guranteed with the same top shelf
            level of security.{" "}
          </div>

          <div className="terms pt-2 mb-2"> Whats is PCI Compliance ?</div>
          <div className="terms-sub mb-3">
            PCI DSS (Payment Card Industry Data Security Standard) is a set of
            comprehensive requirements that all businesses that handle credit
            and debit payments must comply with, no matter how many transactions
            they process or how much they're for. The standards help reduce the
            likelihood of financial data and identity theft, fraudulent payments
            and unauthorised transactions.{" "}
          </div>

          <div className="terms pt-2 mb-2"> SeerBit is PCI Compliant</div>
          <div className="terms-sub mb-3">
            We help you comply with the stringent PCI compliance requirements
            for data protection both when processing payments and storing
            financial data . We hold certification under many programs and
            standards, including the Visa Cardholder Information Security
            Program and Mastercard Site Data Protection Program.{" "}
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
