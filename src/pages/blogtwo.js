import React from "react";
import { blogs } from "../data/pricing";
// import "../styles/blog.css";
export default function Paymet_Experiences_For_Travels_And_Tourism_Business() {
  let shuffledItems = blogs.sort(() => Math.random() - 0.5);
  let reducedBlogs = shuffledItems.slice(0, 3);
  return (
    <>
      <section className="blogSection1">
        <div className="blog_container">
          <div className="color283 font-15 pt-5">
            <span>August 17, 2020 | </span> <span> 4 mins read </span>
          </div>
          <div className="header pt-2 mb-2">
            {" "}
            PAYMENT EXPERIENCES FOR TRAVELS AND TOURISM BUSINESSES
          </div>
          <div className="subheader mb-3">
            The travel industry is known to be challenging – volume dependent,
            thin margins, price sensitive, variation of demanding customers and
            its vulnerability to fraudulent activities.
          </div>

          <div className="pb-5">
            <img src={`/images/pre-auth.png`} alt="" className="w-100" />
          </div>
          <div className="subheader">
            <p>
              This is a fast moving industry and the demand from its customers
              have grown a-lot more over time. Customers wants the best price
              and seamless experience when making travel plans. Ensuring
              businesses have a seamless and frictionless customer experience is
              not an easy task in the travel tourism world as travelers are from
              different places globally.{" "}
            </p>
            <p>
              SeerBit is provides a payment gateway solution that allow
              businesses collect payments in different currencies with our wide
              variety of payment options (Pay with card, Pay with Transfer, Pay
              with Bank Account and payments via digital wallets). Also included
              in the payment channel for businesses in the travel industry is
              allowing customers setup a payment plan which allows them pay for
              a booking multiple times or them splitting the payments between
              friends. With SeerBit’s flexibility, businesses we are able to
              keep up with the rapidly changing landscape and meet up with the
              future growing plans of the business. SeerBit offers a creative
              solution, expert advices, transparency, flexibility and most
              importantly we are committed in maintaining a long relationship
              with businesses we partner with.
            </p>
          </div>
        </div>
      </section>

      <section className="blog-keep-reading py-2">
        <div className="container">
          <div className="header py-3 mb-5">
            Keeping Reading Porpular Articles
          </div>
          <div className="row px-0 mx-0">
            {reducedBlogs.map(blog => (
              <div className="col-lg-4 col-sm-12 col-md-6 pb-5 pl-0 pr-5 blogdD mx-0">
                <div className="imgDiv px-0 pb-4">
                  <img src={`/images/${blog.logo}`} alt={blog.title} />
                </div>
                <div className="font-weight-bold font-20">{blog.title}</div>
                <div className="color283 font-15">
                  <span>{blog.date} | </span> <span>{blog.read}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="blogSection2">
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
      </section>
    </>
  );
}
