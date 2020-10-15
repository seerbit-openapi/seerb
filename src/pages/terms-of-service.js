import React from "react";
import { blogs } from "../data/pricing";
// import "../styles/blog.css";
export default function terms_of_service() {
  return (
    <>
      <section className="blogSection1">
        <div className="blog_container">
          <div className="color283 font-15 pt-5">
            <span>
              The Seerbit Terms of Service was updated on August 18, 2019
            </span>
          </div>
          <div className="header pt-2 mb-2"> Terms of service</div>
          <div className="subheader mb-3">
            By signing up for an account on this website, any of our websites
            and/or services, you are deemed a merchant and agree to these
            Merchant Terms of Service (the Agreement).
            <strong>
              {" "}
              PLEASE READ THESE MERCHANT TERMS OF SERVICE CAREFULLY BEFORE
              SIGNING UP AS A MERCHANT. If you do not agree to any or all of
              these Terms of Service, DO NOT USE THIS SITE!
            </strong>
          </div>
          <div className="terms pt-2 mb-2"> Age Restriction</div>
          <div className="terms-sub mb-3">
            The Services are not directed to individuals under the age of
            eigthteen (18), and we request that they do not provide Personal
            Data through the Services.
          </div>
          <div className="terms pt-2 mb-2"> Interlectual Property</div>
          <div className="terms-sub mb-3">
            Unless otherwise stated, Seerbit and/or its licensors own the
            intellectual property rights and materials on the website subject to
            the license below. We do not grant you any right, license, title or
            interest to any of our intellectual Property rights which you may or
            may not have access to. You agree to take such actions including any
            legal or official document or other documents that may be needed to
            further affirm our intellectual property rights.
          </div>
          <div className="terms pt-2 mb-2"> License to Use Our Website</div>
          <div className="terms-sub mb-3">
            We grant you a non-assignable, non-exclusive and revocable license
            to use the software provided as part of our services in the manner
            permitted by these Terms. This license grant includes all updates,
            upgrades, new versions and replacement software for you to use in
            connection with our services. The services are protected by
            copyright, trademark, and other laws of both Nigeria and foreign
            countries. Nothing in this Term gives you a right to use the Seerbit
            name or any of Seerbit's trademarks, logos, domain names, and other
            distinctive brand features. All right, title and interest in and to
            the services are and will remain the exclusive property of Seerbit
            and its licensors. If you do not comply with all the provisions,
            then you will be liable for all resulting damages suffered by you,
            Seerbit and all third parties. Unless otherwise provided by
            applicable law, you agree not to alter, re-design, reproduce, adapt,
            display, distribute, translate, disassemble, reverse engineer, or
            otherwise attempt to create any source code that is derived from the
            software. Any feedback, comments, or suggestions you may provide to
            us and our services is entirely voluntary and we will be free to use
            such feedback, comments or suggestion as we see fit without any
            obligation to you.
          </div>
        </div>
      </section>
    </>
  );
}
