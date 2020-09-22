import React, { useState } from "react";
import { blogs, faqs } from "../../data/pricing";
import "../../styles/pricing.css";
import RevealDrop from "./reveal";
import styled from "styled-components";
export default function Pricing() {
  return (
    <div className="container-fluid px-0 mx-0">
      <section className="pricingSectionOne ">
        <div className="pricingIntro text-center">
          <div className="font-30 font-weight-bold">
            No hidden charges, no surprises.
          </div>
          <div className="pb-5 font-20 pt-2">
            See what you pay for every transaction.
          </div>
        </div>

        <div className="pricing-card py-5 mx-0 col-12">
          <div className="m-auto cardShadow px-5">
            <div className="row my-5 px-5">
              <div className="col-lg-4 col-md-4 col-sm-12 px-0 payMethod">
                <div className="intText">
                  <div className="font-15 mb-3 font-weight-bold">
                    Local Payment Methods
                  </div>
                  <div className="font-30 font-weight-bold mb-4">
                    <span>1.5%</span> + <span>NGN 50</span>
                  </div>
                  <div className="font-15 mb-3 font-weight-bold">
                    Inclusives
                  </div>
                  <div className="row font-15 gray2 mb-4">
                    <div className="col-1">
                      <img src={`/images/checkmark.svg`} alt="" />
                    </div>{" "}
                    <div className="col-10">
                      Accept payments through Cards, Bank Transfer, USSD, Bank
                      Account, QR
                    </div>
                  </div>
                  <div className="row font-15 gray2 mb-4">
                    <div className="col-1">
                      <img src={`/images/checkmark.svg`} alt="" />
                    </div>{" "}
                    <div className="col-10">
                      Fees for local cards are capped at ₦2000 - which means you
                      won't pay more than that for such transactions.
                    </div>
                  </div>
                </div>
                <a
                  className="btn btn-primary1 btn-lg mt-3"
                  href="#"
                  role="button"
                >
                  Get Started
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 pl-5 pr-0 payMethod intpay">
                <div className="intText borderTop ">
                  <div className="font-15 font-weight-bold mb-3">
                    {" "}
                    International Payment Methods
                  </div>
                  <div className="font-30 font-weight-bold mb-4">
                    <span>3.5%</span> + <span>NGN 0</span>
                  </div>
                  <div className="font-15 font-weight-bold mb-3">
                    Inclusives
                  </div>
                  <div className="row font-15 gray2 mb-4">
                    <div className="col-1 ">
                      <img src={`/images/checkmark.svg`} alt="" />
                    </div>{" "}
                    <div className="col-10 text-left">
                      Accept payments from other countries with the same flow.
                    </div>
                  </div>

                  <div className="row fonr-15 gray2 mb-4">
                    <div className="col-1">
                      <img src={`/images/checkmark.svg`} alt="" />
                    </div>{" "}
                    <div className="col-10">
                      International transactions are also settled directly to
                      you.
                    </div>
                  </div>
                </div>
                <a
                  className="btn btn-primary1 btn-lg mt-3"
                  href="#"
                  role="button"
                >
                  Get Started
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 pl-5 pr-0 intpay">
                <div className="intText borderTop">
                  <div className="font-15 font-weight-bold mb-3">
                    Enterprise
                  </div>
                  <div className="font-30 font-weight-bold mb-4">Custom</div>
                  <div className="font-15 font-weight-bold mb-3">
                    Inclusives
                  </div>
                  <div className="font-15 gray2 mb-4">
                    Talk to our experts and get tailored pricing for your
                    business
                  </div>
                </div>
                <a className="btn btn-white btn-lg mt-3" href="#" role="button">
                  Talk to sales
                </a>
              </div>
              <div className="col-12 px-0 mb-5 mt-4 pt-4">
                <div className="text-center gray2 mt-5 mb-3 borderTop1">
                  <span>
                    <img src={`/images/checkmark.svg`} alt="" />
                  </span>{" "}
                  <span className="ml-3">
                    Get everything you need to manage your payments.
                  </span>
                </div>
                <div className="text-center gray2">
                  <span>
                    <img src={`/images/checkmark.svg`} alt="" />{" "}
                  </span>{" "}
                  <span className="ml-3">
                    No setup fee, monthly fees/charges or hidden fees
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="font-35 font-weight-bold text-center">
            Frequently asked questions
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              position: "relative",
              marginLeft: "40%",
              marginBottom: "7rem"
            }}
            className="container-fluid mt-4 faqs w-auto"
          >
            <div>
              {faqs.map((faq, i) => (
                <div className=" faqIndex py-4 ">
                  <RevealDrop
                    data-index={i}
                    key={`faq_list+${i}`}
                    header={<img className="mr-3" src={""} />}
                    head={faq.question}
                  >
                    <div className="inf_x">
                      <p className="ml-5 mt-3" key={`faq_desc+${i}`}>
                        {faq.ans}
                      </p>
                    </div>
                  </RevealDrop>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="blogSection2 ">
        <div className="text-center ">
          <div style={{ width: "100%", margin: "auto" }}>
            <div className="gray1 font-weight-bold font-35">
              Get the SeerBit Edge.
            </div>
            <div className="gray2 py-3 font-18">
              With SeerBit, you get all the flexibility that comes with an
              innovative <br /> online payment gateway and the security of a
              PCI-DSS certified payment processor.
            </div>
            <div className="lead font-20 mt-4">
              <a
                className="btn btn-primary btn-lg px-5 py-3"
                href="#"
                role="button"
              >
                Get Started
              </a>
              <a href="" className="color283 ml-4 font-16">
                Talk to us <img src={`/images/angleRight.svg`} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
