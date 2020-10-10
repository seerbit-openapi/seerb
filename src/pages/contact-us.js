import React from "react";
import { blogs } from "../data/pricing";
// import "../styles/blog.css";
export default function Contact_us() {
  return (
    <>
      <section className="contact-us">
        <div className="container">
          <div className="row mt-5">
            <div className="col-6">
              <div className="header">
                In need of a payment solution for your business?
              </div>
              <div className="subheader">
                <p>
                  We'd love to hear about your business, and where you're
                  headed. Please provide any information or ask questions about
                  how SeerBit can help grow your business. Please fill in the
                  form provided on this page and we’ll get back to you as soon
                  as possible.
                </p>
                <p>
                  {" "}
                  Alternatively you can{" "}
                  <a href="mailto:partners@seerbit.com" target="_top">
                    Email us.
                  </a>{" "}
                  or Call : +234-813 984 1433
                </p>
              </div>
            </div>

            <div className="col-6">
              <form>
                <div class="row">
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      className="form-control fg"
                      name="firstname"
                      id="firstname"
                      placeholder="First name"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      className="form-control fg"
                      name="lastname"
                      id="lastname"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control fg"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control fg"
                    name="company_name"
                    id="company_name"
                    placeholder="Company Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control fg"
                    name="website"
                    id="website"
                    placeholder="Website"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control fg"
                    name="phone_number"
                    id="phone_number"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    type="textarea"
                    className="form-control fg"
                    name="message"
                    id="message"
                    placeholder="Tell us briefly about your business requirements"
                  ></textarea>
                </div>
                <a className="btn contact-btn px-2 py-2" href="#" role="button">
                  Send inquiry
                </a>
              </form>
            </div>
          </div>
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
