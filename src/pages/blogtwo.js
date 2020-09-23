import React from "react";
import { blogs } from "../data/pricing";
// import "../styles/blog.css";
export default function BlogDetail() {
  let shuffledItems = blogs.sort(() => Math.random() - 0.5);
  let reducedBlogs = shuffledItems.slice(0, 3);
  return (
    <>
      <section className="blogSection1">
        <div className="color283 font-15">
          <span>August 17, 2020 | </span> <span> 4 mins read </span>
        </div>
        <div className="font-weight-bold font-35 mb-5">
          {" "}
          3D Secure Authentication
        </div>

        <div className="pb-5">
          <img src={`/images/3dsecure.svg`} alt="" className="w-100" />
        </div>
        <div className="font-20 gray1">
          <p>
            If you're building event-driven applications, you've probably
            considered building them in a Serverless platform. It's really well
            suited for having small functions, running when there's an incoming
            event, processing the data, and then going dormant. Instead of
            building your own event loop that sits idle in between events,
            you're offloading all that logic to a serverless provider. Being a
            lazy developer, I'm a fan of writing as little code as possible 😅.
            If you're building event-driven applications, you've probably
            considered building them in a Serverless platform. It's really well
            suited for having small functions, running when there's an incoming
            event, processing the data, and then going dormant. Instead of
            building your own event loop that sits idle in between events,
            you're offloading all that logic to a serverless provider. Being a
            lazy developer, I'm a fan of writing as little code as possible 😅.
            when there's an incoming event, processing the data, and then going
            dormant. Instead of building your own event loop that sits idle in
            between events, you're offloading all that logic to a serverless
            provider. Being a lazy developer, I'm a fan of writing as little
            code as possible 😅.
          </p>
          <p>
            If you're building event-driven applications, you've probably
            considered building them in a Serverless platform. It's really well
            suited for having small functions, running when there's an incoming
            event, processing the data, and then going dormant. Instead of
            building your own event loop that sits idle in between events,
            you're offloading all that logic to a serverless provider. Being a
            lazy developer, I'm a fan of writing as little code as possible 😅.
          </p>
          <p>
            If you're building event-driven applications, you've probably
            considered building them in a Serverless platform. It's really well
            suited for having small functions, running when there's an incoming
            event, processing the data, and then going dormant. Instead of
            building your own event loop that sits idle in between events,
            you're offloading all that logic to a serverless provider. Being a
            lazy developer, I'm a fan of writing as little code as possible 😅.
          </p>
        </div>
      </section>

      <section className="blog-keep-reading py-5">
        <div className="font-weight-bold font-35 py-3 mb-5">
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
    </>
  );
}
