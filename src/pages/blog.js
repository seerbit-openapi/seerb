import React from "react";
import { blogs } from "../data/pricing";
// import "../styles/blog.css";
import { BlogHeader } from "../components";
export default function Blog() {
  return (
    <div className="container-fluid px-0 mx-0">
      <section className="sectionOne">
        <div className="col-md-6" style={{ width: "100%", margin: "left" }}>
          <div className="hero-header" style={{ marginTop: "7rem" }}>
            The SeerBit Blog Space
          </div>
          <p className="subheader py-3">
            Dive into the world of payment technology. Explore insights and stay
            up to date with product and company news.{" "}
          </p>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <input
                type="text"
                placeholder="Enter email address"
                className="inpbtn form-control py-4"
              />
              <button className="btn  btn-primary btn-inpbtn" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-list pb-5 mx-0">
        <BlogHeader />
        <div className="blog-list-div">
          <div className="row px-0 mx-0">
            {blogs.map(blog => (
              <div className="col-lg-4 col-sm-12 col-md-6 pb-5 pl-0 pr-5 blogdD mx-0">
                <div className="imgDiv px-0 pb-4">
                  <img src={`/images/${blog.logo}`} alt="secure_payment" />
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
      <section className="blogSection2 ">
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
