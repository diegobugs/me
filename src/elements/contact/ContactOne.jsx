import React, { Component } from "react";
import FormStyle from "./FormStyle";

class ContactOne extends Component {
  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 justify-content-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <span className="subtitle">Let's Say Hi</span>
                <h2 className="title">Hire Me.</h2>
                <div className="im_address_inner">
                  <div className="im_address">
                    <span>Whatsapp or call me:</span>
                    <a className="link im-hover" href="tel:+595 985 743058<">
                      +595 985 743058
                    </a>
                  </div>
                  <div className="im_address mt--5">
                    <span>Contact Email:</span>
                    <a
                      className="link im-hover"
                      href="mailto:diego.f.bugs@gmail.com"
                    >
                      diego.f.bugs@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <FormStyle />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactOne;
