import React from "react";
import { blogs } from "../data/pricing";
// import "../styles/blog.css";
export default function Payment_method() {
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
                      backgroundImage: "url(./images/47.png)",
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  ></div>
                </div>
                <div className="story-header__info-wrapper col-lg-6 offset-lg-0 col-md-8 offset-md-2">
                  <div className="row">
                    <div className="story-header__info col-lg-11">
                      <div className="hero-header">Payment Methods</div>
                      <p className="subheader py-3">
                        Attract more customers and make them happy by letting
                        them pay their way, wherever they are. We offer the
                        largest local payment methods, digital wallets and
                        international credit and debit cards.{" "}
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
      <section className="intro">
        <div className="container">
          <div className=" col-lg-5 col-md-6 col-sm-12 px-0">
            <div className="header">Local payment methods in Africa</div>
            <p className="subheader py-3">
              We offer the key payment methods anywhere in Africa
            </p>
          </div>
          <div className="row">
            <div className="col-sm">
              <img src="./images/visa-logo.svg" />
              <div class="features-title py-3">Visa Card</div>
              <p class="features-body font-16">
                Visa is the largest global card network in the world in terms of
                transaction value, and the dominant payment method in all key
                global markets outside China.
              </p>
            </div>
            <div className="col-sm">
              <img src="./images/mastercard-logo.svg" />
              <div class="features-title py-3">Mastercard</div>
              <p class="features-body font-16">
                As one of the largest card schemes globally, Mastercard
                dominates the co-branded credit card market in Africa.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm mt-3">
              <img src="./images/bank1.svg" />
              <div class="features-title py-3">Bank Payment</div>
              <p class="features-body font-16">Shopper Country : Africa</p>
            </div>
            <div className="col-sm mt-3">
              <img src="./images/bank-transfer.svg" />
              <div class="features-title py-3">Bank Transfer</div>
              <p class="features-body font-16">Shopper Country : Africa</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-3">
              <img src="./images/wallet.svg" style={{ width: "60px" }} />
              <div class="features-title py-3">Wallet</div>
              <p class="features-body font-16">
                Our solution enables you to accept popular digital wallets in
                all your markets
              </p>
              <p>Shopper Country : Africa</p>
            </div>
          </div>
        </div>
      </section>
      <section className="blogSection2">
        <div className="container">
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
        </div>
      </section>
    </>
  );
}
