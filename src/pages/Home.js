import React from "react";
import { features, products, brands, studies } from "../data/home";
// import "../styles/Home.css";

export default function Home() {
  return (
    <div>
      <section className="headSection">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-6 order-md-2 pt-5 pt-md-0 pb-4 pb-md-0">
              <div className="">
                <img
                  className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0"
                  src={`https://www.adyen.com/dam/jcr:7944b75c-5410-41ab-831a-a6efd414eb26/woman-paying-with-phone-in-store.jpg`}
                />
              </div>
            </div>
            <div class="col-12 col-md-7 col-lg-6 order-md-1" data-aos="fade-up">
              <div className="hero-header">
                The only payment<br></br>gateway your business needs
              </div>
              <p className="subheader py-3">
                Accept online payments from multiple methods in one single,
                <br></br>
                seamless integration.{" "}
                {/*SeerBit helps your business process online
                payments from various channels across Africa.*/}{" "}
              </p>
              <div className="lead font-16">
                <a className="btn hero-btn px-2 py-2" href="#" role="button">
                  Get Started
                </a>
                <a href="" className="color283 ml-4 talk-to-us">
                  Talk to us{" "}
                  <img src={`/images/angleRight.svg`} alt="" className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*} <section className="headSection pb-0 px-0">
        <div className="row mx-0 px-0 ">
         <div className="col-sm-12 col-md-12 col-lg-6 order-md-2 mx-0 px-0 ">
            <div className="headBox float-right pt-md-1 pt-5">
              <img src={`https://www.adyen.com/dam/jcr:7944b75c-5410-41ab-831a-a6efd414eb26/woman-paying-with-phone-in-store.jpg`} />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 order-md-1 px-0 mx-0">
            <div className="headIntro pt-md-1 pt-5">
              <div className="hero-header">
                The only payment<br></br>gateway your business<br></br>needs
              </div>
              <p className="subheader py-3">
                Accept online payments from multiple methods in one single,
                seamless integration. {/*SeerBit helps your business process online
                payments from various channels across Africa.*/}{" "}
      {/* </p>
              <div className="lead font-16">
                <a
                  className="btn hero-btn px-2 py-2"
                  href="#"
                  role="button"
                >
                  Get Started
                </a>
                <a href="" className="color283 ml-4 talk-to-us">
                  Talk to us{" "}
                  <img src={`/images/angleRight.svg`} alt="" className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
      <section className="intro">
        <div className="container">
          <div className=" col-lg-5 col-md-6 col-sm-12 px-0">
            <p className="title font-16 font-weight-bold">Why Seerbit</p>
            <div className="header">
              Tailored Payments Solutions for your business.
            </div>
            <p className="subheader py-3">
              At SeerBit, We have a range of payment methods to cater to every
              business. We don't just throw you a bouquet of solutions you don't
              need. We walk with you to tailor your payment options and give you
              exactly what you and your shoppers need.
            </p>
          </div>
          <div className="py-3 row mx-0 ">
            {features.map(data => (
              <div className="col-sm-12 col-md-6 col-lg-4 pl-0 pr-5">
                <div className="px-0 mx-0">
                  <img
                    src={`/images/${data.logo}`}
                    alt="secure_payment"
                    width="50"
                  />
                </div>
                <div className="features-title py-3">{data.title}</div>
                <div className="features-body font-16">
                  {data.short_description}
                </div>
                <a href={data.link} className="color283 ml-4 font-16">
                  {" "}
                  <div>
                    {data.linkname}{" "}
                    <img
                      src={`/images/angleRight.svg`}
                      alt=""
                      className="ml-2"
                    />{" "}
                  </div>
                </a>
              </div>
            ))}{" "}
          </div>
        </div>
      </section>
      <section id="product" className="fullglance">
        <div className="container">
          <div className="row mx-0">
            <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-5 bizfullviewImg">
              <img src={`/images/bizfullview.svg`} className="responsive" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 my-auto pr-0 pl-0">
              <div className="header font-35 mt-3">
                Get a full view of your business at a glance.
              </div>
              <p className="subheader py-3">
                We've designed our platform to allow you see all payments across
                multiple channels on a single dashboard. It's never been so easy
                to track performance, optimize and grow.
              </p>
              <div className="row mx-0">
                {products.map(data => (
                  <div className="col-sm-12 col-md-6 col-lg-6 px-0  pr-5 mx-0 ">
                    <div className="px-0 mx-0">
                      <img
                        src={`/images/${data.logo}`}
                        alt="secure_payment"
                        width="50"
                      />
                    </div>
                    <div className="features-title py-3">{data.title}</div>
                    <p className="features-body font-16">
                      {data.short_description}
                    </p>
                  </div>
                ))}{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="brands">
        <div className="container">
          <div className="row mx-0">
            <div className="col-sm-12 col-md-6 col-lg-6 pr-5 pl-0">
              <div className="header">Brands that trust us...</div>
              <p className="subheader py-3">
                It's easier to focus on building great products and services
                when payment works. For these companies, accepting money from
                their customers isn't their problem. It's our pleasure.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 row  mx-0 px-0 pt-5">
              {brands.map(data => (
                <div className=" col-xs-6 col-md-4 col-lg-4 col-sm-6 mx-0 ">
                  <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
                    <img
                      src={`/images/${data.logo}`}
                      alt="secure_payment"
                      width="100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="product" className="sectionPadding">
        <div className="container">
          <div className="">
            <div className="title">Case Studies</div>
            <div className="header">The Impact of SeerBit.</div>
          </div>
          <div className="py-3 row mx-0 px-0">
            {studies.map(data => (
              <div className="col-sm-12 col-md-6 col-lg-6 studiesList pr-5 pl-0">
                <div className="px-0 mx-0">
                  <img
                    src={`/images/${data.images}`}
                    alt="secure_payment"
                    width="100%"
                  />
                </div>
                <h6 className="features-title py-3 mt-3">{data.title}</h6>
                <div className="features-body font-16">
                  {data.short_description}
                </div>
                <a href={data.link} className="color283 ml-4 font-16">
                  {" "}
                  <div>
                    {data.linkname}{" "}
                    <img
                      src={`/images/angleRight.svg`}
                      alt=""
                      className="ml-2"
                    />{" "}
                  </div>
                </a>
              </div>
            ))}
          </div>
          <hr className="mt-5 mb-0" />
        </div>
      </section>
      <section className="blogSection2">
        <div className="container">
          <div className="text-center">
            <div style={{ width: "100%", margin: "auto" }}>
              <div className="header">Get the SeerBit Edge.</div>
              <div className="subheader py-3">
                With SeerBit, you get all the flexibility that comes with an
                innovative <br /> online payment gateway and the security of a
                PCI-DSS certified payment processor.
              </div>
              <div className="lead font-20 mt-4">
                <a className="btn hero-btn px-2 py-2" href="#" role="button">
                  Get Started
                </a>
                <a href="" className="color283 ml-4 font-16">
                  Talk to us
                  <img src={`/images/angleRight.svg`} alt="" className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
