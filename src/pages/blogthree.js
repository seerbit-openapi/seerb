import React from "react";
import { blogs } from "../data/pricing";
// import "../styles/blog.css";
export default function Streamlining_Payments_for_Resturants() {
  let shuffledItems = blogs.sort(() => Math.random() - 0.5);
  let reducedBlogs = shuffledItems.slice(0, 3);
  return (
    <>
      <section className="blogSection1">
        <div className="blog_container">
          <div className="color283 font-15 pt-5">
            <span>October 5, 2020 | </span> <span> 2 mins read </span>
          </div>
          <div className="header pt-2 mb-2">
            {" "}
            STREAMLINING PAYMENTS FOR RESTURANTS
          </div>
          <div className="subheader mb-3">
            As the dinning scene in restaurants is changing, restaurant owners
            are looking for ways to increase efficiency and customer service
            experience by offering seamless payment options for its customers.
          </div>

          <div className="pb-5">
            <img src={`/images/payResturants.svg`} alt="" className="w-100" />
          </div>
          <div className="subheader">
            <p>
              Dining experience isn’t just about the meal, it’s also about the
              convenience and experience the customer faces during visits to the
              restaurants or ordering meals from home. From the process of
              ordering meals to checkout there are many difficulties customers
              may experience that is why it is important to integrate with a
              suitable payment partner that understands both the business and
              its customers and a partner that keeps up with the latest payment
              trends.
            </p>
            <p>
              Adding SeerBit integrations to restaurant business value chain
              enables the business to go completely cashless by offering an
              offline payment system to its customers using USSD and QR payment
              option ensuring the business can grow and scale quickly. All your
              customer needs to make payment is a mobile phone and a bank
              account domiciled in your country of residence. Ultimately SeerBit
              provides a reliable and consistent payment gateway solution that
              helps in growing businesses at a very reliable cost.
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
