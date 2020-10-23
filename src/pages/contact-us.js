import React, { useState } from "react";
import { blogs } from "../data/pricing";
// import "../styles/blog.css";
import $ from "jquery";
export default function Contact_us() {
  console.log("Ayodele here");
  const [inputField, setInputField] = useState({
    firstname: "",
    lastname: "",
    email: "",
    company_name: "",
    website: "",
    phone_number: "",
    message: ""
  });
  const [errorType, seterrorType] = useState("");
  const inputsHandler = e => {
    seterrorType(" ");
    const { name, value } = e.target;
    setInputField({
      ...inputField,
      [name]: value
    });
  };
  const submitButton = () => {
    if (inputField.firstname.length < 2) {
      seterrorType("Please enter your first name");
    } else if (inputField.lastname.length < 2) {
      seterrorType("Please enter your last name");
    } else if (
      !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
        inputField.email
      )
    ) {
      seterrorType("please enter a valid email");
    } else if (inputField.company_name.length < 5) {
      seterrorType("Please provide a company name");
    } else if (inputField.phone_number.length < 3) {
      seterrorType("Invalid phone");
    } else if (inputField.message.length < 10) {
      seterrorType(" Please provide a Message 10 characters or more");
    } else
      $.ajax({
        method: "POST",
        url: "https://releasenotes.seerbitapi.com/api/send-email",
        data: $("form[name='talk_to_sales']").serializeArray(),
        headers: {
          "x-auth": "cf440pi"
        }
      })
        .done(function(msg) {
          $(".contact-btn").text("Thanks we will be in touch");
          setTimeout(function() {
            $("form[name='talk_to_sales']")
              .find("#firstname")
              .val("");
            $("form[name='talk_to_sales']")
              .find("#message")
              .val("");
            $(".contact-btn").text("Send Inquiry");
          }, 3000);
        })
        .fail(function(error) {
          $(".contact-btn").text("Failed to send message");
          setTimeout(function() {
            $(".contact-btn").text("Try again");
          }, 3000);
        });
  };
  return (
    <>
      <section className="contact-us">
        <div className="container">
          <div className="row mt-5 mt-md-7">
            <div className="col-12 col-md-6">
              <div className="header">
                In need of a payment solution for your business?
              </div>
              <div className="subheader">
                <p>
                  We'd love to hear about your business, and where you're
                  headed. Please provide any information or ask questions about
                  how SeerBit can help grow your business. Fill in the form
                  provided on this page and we'll get back to you as soon as
                  possible.
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
            <div className="col-12 col-md-6">
              <form name="talk_to_sales">
                <div className="row">
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      className="form-control fg"
                      name="firstname"
                      id="firstname"
                      placeholder="First name"
                      onChange={inputsHandler}
                      value={inputField.firstname}
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      className="form-control fg"
                      name="lastname"
                      id="lastname"
                      placeholder="Last name"
                      onChange={inputsHandler}
                      value={inputField.lastname}
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
                    onChange={inputsHandler}
                    value={inputField.email}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control fg"
                    name="company_name"
                    id="company_name"
                    placeholder="Company Name"
                    onChange={inputsHandler}
                    value={inputField.company_name}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control fg"
                    name="website"
                    id="website"
                    placeholder="Website"
                    onChange={inputsHandler}
                    value={inputField.website}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control fg"
                    name="phone_number"
                    id="phone_number"
                    placeholder="Phone Number"
                    onChange={inputsHandler}
                    value={inputField.phone_number}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    type="textarea"
                    className="form-control fg"
                    name="message"
                    id="message"
                    placeholder="I'm interested in using seerbit to:"
                    onChange={inputsHandler}
                    value={inputField.message}
                  ></textarea>
                </div>
                <div className="form-group">
                  <div className="mb-3" style={{ color: "red" }}>
                    {errorType}
                  </div>
                  <button
                    className="btn contact-btn px-2 py-2"
                    type="button"
                    value="submit"
                    onClick={submitButton}
                  >
                    Send inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="blogSection2">
        <div className="container">
          <div className="text-center">
            <div
              style={{
                width: "100%",
                margin: "auto"
              }}
            >
              <div className="header">Get the SeerBit Edge.</div>
              <div className="subheader py-3 ">
                With SeerBit, you get all the flexibility that comes with an
                nnovative
                <br />
                online payment gateway and the security of a PCI-DSS certified
                payment processor.
              </div>
              <div className="lead font-20 mt-4">
                <a className="btn hero-btn px-2 py-2" href="#" role="button">
                  Get Started
                </a>
                <a href="" className="color283 ml-4 font-16">
                  Talk to us
                  <img src={`/images/angleRight.svg`} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
