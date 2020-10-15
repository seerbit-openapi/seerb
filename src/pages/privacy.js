import React from "react";
import { blogs } from "../data/pricing";
// import "../styles/blog.css";
export default function Privacy_statement() {
  return (
    <>
      <section className="blogSection1">
        <div className="blog_container">
          <div className="color283 font-15 pt-5">
            <span>
              The Seerbit Privacy Policy was updated on August 18, 2019
            </span>
          </div>
          <div className="header pt-2 mb-2"> Privacy Statement</div>
          <div className="subheader mb-3">
            This Privacy Policy describes your rights regarding how and when we
            collect, use, store, share and protect your personal information
            across our website and all related sites, services and tools
            regardless of how you use or access them.<br></br>
            We respect the privacy of our online visitors as such we will take
            reasonable steps to protect your information. It is our policy to
            respect your privacy regarding any information we may collect while
            operating our website.
          </div>
          <div className="terms pt-2 mb-2"> Personal Data we collect</div>
          <div className="terms-sub mb-3">
            Person Data is any information that relates to an indentified or
            indentifiable individual. The Personal Data refers to the personal
            information you submit, when you register or any information that
            can be used to idenify or contact you, (e.g email address, company
            name, password, bank account) it may also include anonymous
            information that is linked to you for example, your IP Address.
          </div>
          <div className="terms pt-2 mb-2">
            {" "}
            What we use your personal information for
          </div>
          <div className="terms-sub mb-3">
            <ul>
              <li class="darkli">To provide you with the required services</li>
              <li class="darkli">To verify the information provided</li>
              <li class="darkli">To respond to questions and requests</li>
              <li class="darkli">To improve our services to you</li>
              <li class="darkli">
                To prevent and manage risks against fraudulent activities
              </li>
              <li class="darkli">To resolve disputes that may arise</li>
            </ul>
            Additional personal information may be gotten from third party
            applications and other identification/verification services. For
            example, from your financial institution. Once you begin to use our
            services, we keep all records of your transactions and we will not
            share or disclose your personal information with a third party
            without your consent.
          </div>
          <div className="terms pt-2 mb-2"> Website Visitors</div>
          <div className="terms-sub mb-3">
            We do not collect information to web visitors. We may however
            collect non-personally-identifiable-information to enable us target
            advertisements to you, monitor and improve our website and services.
            This too, will not be shared or disclosed to third parties without
            your consent.
          </div>
          <div className="terms pt-2 mb-2"> Use by Minors</div>
          <div className="terms-sub mb-3">
            The Services are not directed to individuals under the age of
            eigthteen (18), and we request that they do not provide Personal
            Data through the Services.
          </div>
          <div className="terms pt-2 mb-2"> Cookies</div>
          <div className="terms-sub mb-3">
            Cookies are small text files that are stored in a computer's web
            browser memory. They help website providers with things like
            understanding how people use a website, remembering a User's login
            details, and storing website preferences. Cookies allow our servers
            to remember your account log-in information when you visit our
            website, IP addresses, date and time of visits, monitor web traffic
            and prevent fraudulent activities. If your browser or browser add-on
            permits, you have the choice to disable cookies on our website,
            however this may limit your ability to use our website.
          </div>
          <div className="terms pt-2 mb-2">
            {" "}
            How we protect your information
          </div>
          <div className="terms-sub mb-3">
            We will only retain personal information on our servers for as long
            as an account is active. Once an account has been deactivated, your
            information is stored on our servers for as long as necessarily
            obligated by law.
          </div>
          <div className="terms pt-2 mb-2">
            {" "}
            Updates To this Privacy Policy and Notifications
          </div>
          <div className="terms-sub mb-3">
            We may change this Privacy Policy from time to time to reflect new
            services, changes in our Personal Data practices or relevant laws.
            The 'Last updated' legend at the top of this Privacy Policy
            indicates when this Privacy Policy was last revised. Any changes are
            effective when we post the revised Privacy Policy on the Services.
            We may provide you with disclosures and alerts regarding the Privacy
            Policy or Personal Data collected by posting them on our website
            and, if you are a User, by contacting you through your Seerbit
            Dashboard, email address and/or the physical address listed in your
            Seerbit account.
          </div>
        </div>
      </section>
    </>
  );
}
