import React from "react";
import { features, products, brands, studies } from "../data/home";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="container-fluid px-0 mx-0">
      <section className="headSection pt-5 pb-0 px-0">
        <div className="row mx-0 px-0 ">
          <div className="col-sm-12 col-md-12 col-lg-6 pt-5 mt-5 px-0 mx-0">
            <div className="headIntro">
              <div className="header font-35 font-weight-bold ">
                The only payment gateway your business needs
              </div>
              <p className="subheader py-3 font-16">
                Accept online payments from multiple methods in one single,
                seamless integration. SeerBit helps your business process online
                payments from various channels across Africa.{" "}
              </p>
              <p className="lead font-16">
                <a className="btn btn-primary btn-lg" href="#" role="button">
                  Get Started
                </a>
                <a href="" className="color283 ml-4">
                  Talk to us <img src={`/images/angleRight.svg`} alt="" />
                </a>
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6 mx-0 px-0 ">
            <div className="headBox float-right"></div>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className=" col-lg-5 col-md-6 col-sm-12 px-0">
          <p className="title font-16 font-weight-bold">Why Seerbit</p>
          <div className="header font-35 font-weight-bold">
            Tailored Payments Solutions for your business.
          </div>
          <p className="subheader py-3 font-16">
            At SeerBit, we have a range of payment methods to cater to every
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
              <div className="features-title py-3 font-16">{data.title}</div>
              <p className="features-body font-16">{data.short_description}</p>
            </div>
          ))}{" "}
        </div>
      </section>
      <section id="product" className="fullglance">
        <div className="row mx-0">
          <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-5 bizfullviewImg">
            <img src={`/images/bizfullview.svg`} className="responsive" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 my-auto pr-0 pl-0">
            <div className="header font-35 font-weight-bold">
              Get a full view of your business at a glance.
            </div>
            <p className="subheader py-3 font-16">
              We've designed our platform to allow you to see all payments
              across multiple channels on a single dashboard. It's never been so
              easy to track performance, optimize and grow.
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
                  <div className="features-title py-3 font-16">
                    {data.title}
                  </div>
                  <p className="features-body font-16">
                    {data.short_description}
                  </p>
                </div>
              ))}{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="brands">
        <div className="row mx-0">
          <div className="col-sm-12 col-md-6 col-lg-6 pr-5 pl-0">
            <div className="header font-35 font-weight-bold">
              Brands that trust us...
            </div>
            <p className="subheader py-3 font-18">
              It's easier to focus on building great products and services when
              payment works. For these companies, accepting money from their
              customers isn't their problem. It's our pleasure.
            </p>
          </div>
          <div className="row mx-0 px-0">
            {brands.map(data => (
              <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4 px-0">
                <div className="">
                  <img src={`/images/${data.logo}`} alt="secure_payment" />
                </div>
              </div>
            ))}{" "}
          </div>
        </div>
      </section>
      <section id="product" className="sectionPadding">
        <div className=" ">
          <p className="title">Case Studies</p>
          <div className="header font-35 font-weight-bold">
            The Impact of SeerBit.
          </div>
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
              <h6 className="features-title py-3">{data.title}</h6>
              <p className="features-body font-15">{data.short_description}</p>
            </div>
          ))}
        </div>
        <hr className="mt-5 mb-0" />
      </section>
      <section className="blogSection2">
        <div className="text-center">
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
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Get Started
              </a>
              <a href="" className="color283 ml-4">
                Talk to us <img src={`/images/angleRight.svg`} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
