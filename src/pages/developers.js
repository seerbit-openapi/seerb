import React from "react";
import { blogs } from "../data/pricing";
import { devs, brands, easy } from "../data/home";
// import "../styles/blog.css";
export default function Developers() {
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
                        "url(https://images.unsplash.com/photo-1573165759995-5865a394a1aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)",
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  ></div>
                </div>
                <div className="story-header__info-wrapper col-lg-6 offset-lg-0 col-md-8 offset-md-2">
                  <div className="row">
                    <div className="story-header__info col-lg-11">
                      <div className="hero-header">
                        Start<br></br>building today
                      </div>
                      <p className="subheader py-3">
                        Whether you're a startup or a global enterprise, learn
                        how to integrate with SeerBit to accept payments and
                        manage your business online.{" "}
                        {/*SeerBit helps your business process online
                payments from various channels across Africa.*/}{" "}
                      </p>
                      <div className="lead font-16">
                        <a
                          className="btn section-btn px-2 py-2"
                          href="#"
                          role="button"
                        >
                          Get free API key
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
          <div className="py-3 row mx-0 ">
            {devs.map(data => (
              <div className="col-sm-12 col-md-6 col-lg-4 pl-0 pr-5">
                <div className="px-0 mx-0 text-center">
                  <img
                    src={`/images/${data.logo}`}
                    alt="secure_payment"
                    width="50"
                  />
                </div>
                <div className="features-title py-3 text-center">
                  {data.title}
                </div>
                <div className="features-body font-16 text-center">
                  {data.short_description}
                </div>
                <a
                  href={data.link}
                  className="color283 ml-4 font-16 text-center"
                >
                  {" "}
                  <div>
                    {data.linkname}{" "}
                    <img
                      src={`/images/angleRight.svg`}
                      alt=""
                      className="ml-2 "
                    />{" "}
                  </div>
                </a>
              </div>
            ))}{" "}
          </div>
        </div>
      </section>
      <section className="white-space">
        <div className="">
          <br></br>
          <br></br>
        </div>
      </section>
      <section id="product" className="fullglance">
        <div className="container">
          <div className="row mx-0">
            <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-5 bizfullviewImg">
              <img src={`/images/checkout-sdk.gif`} className="responsive" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 my-auto pr-0 pl-0">
              <div className="header font-35 mt-3">
                Simple & Secure Integrations
              </div>
              <p className="subheader py-3">
                Our SDKs, libraries and plugins are designed in such way that
                they are easy to customise, and play nice with any design. All
                SDKs, libraries and plugins are PCI compliant, so you don’t have
                to worry about security.
              </p>
              <div className="row mx-0">
                <div className="col-sm-12 col-md-12 col-lg-12 px-0">
                  <a href="" class="card-link">
                    <div class="card">
                      <div class="card-body">View on Github</div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 px-0 mt-3">
                  <a href="" class="card-link">
                    <div class="card">
                      <div class="card-body">View on Docs</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="lead font-16 mt-5">
                <a className="btn section-btn px-2 py-2" href="#" role="button">
                  Get free API key
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brands">
        <div className="container">
          <div className="row mx-0">
            <div className="col-sm-12 col-md-6 col-lg-6 pr-5 pl-0">
              <div className="header">Accepts payments the easy way</div>
              <p className="subheader py-3">
                Is your website built on any of these platforms? Our large
                collections of plugins will let you integrate payments in under
                10 minutes.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 row  mx-0 px-0 pt-3">
              {easy.map(data => (
                <div className=" col-xs-6 col-md-4 col-lg-4 col-sm-6 mx-0 ">
                  <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
                    <img
                      src={`/images/${data.logo}`}
                      alt="secure_payment"
                      width="150"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="blogSection2 ">
        <div className="text-center ">
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
                Talk to us <img src={`/images/angleRight.svg`} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
