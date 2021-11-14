import React from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactOne from "../elements/contact/ContactOne";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ServiceList from "../elements/service/ServiceList";
import BlogContent from "../elements/blog/BlogContent";
import Helmet from "../component/common/Helmet";

const SlideList = [
  {
    textPosition: "text-left",
    category: "Software Engineer, Front-end developer.",
    title:
      "Hi, I’m <span>Diego Bugs</span><br/>Welcome to my personal website.",
    description: "",
    buttonText: "Download my CV",
    buttonLink: `${process.env.PUBLIC_URL}/assets/cv.pdf`,
  },
];
const PortfolioLanding = () => {
  let title = "About Me",
    description =
      "I am a software engineer looking for personal and professional growth, always being pro-active, with a good work ethic and enthusiasm. I have always been a person who never gives up.";
  return (
    <div>
      <Helmet pageTitle="Diego Bugs" />
      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
      {/* Start Slider Area   */}
      <div id="home" className="fix">
        <div className="slider-wrapper">
          {/* Start Single Slide */}
          {SlideList.map((value, index) => (
            <div
              className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25"
              key={index}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category ? (
                        <span className="theme-color font-700">
                          {value.category}
                        </span>
                      ) : (
                        ""
                      )}
                      {value.title ? (
                        <h1
                          className="title theme-gradient"
                          dangerouslySetInnerHTML={{ __html: value.title }}
                        ></h1>
                      ) : (
                        ""
                      )}
                      {value.description ? (
                        <p className="description">{value.description}</p>
                      ) : (
                        ""
                      )}
                      {value.buttonText ? (
                        <div className="slide-btn mt--20">
                          <a
                            className="btn-default"
                            href={`${value.buttonLink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {value.buttonText}
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* End Single Slide */}
        </div>
      </div>
      {/* End Slider Area   */}

      {/* Start About Area */}
      <div id="about" className="fix">
        <div className="about-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30 mb_sm--0">
                  <span className="subtitle">Details about me</span>
                  <h2 className="title">{title}</h2>
                  <p className="description mt_dec--20">{description}</p>
                </div>
                <div className="row mt--30">
                  <TabTwo tabStyle="tab-style--1 justify-content-center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End About Area */}

      {/* Start COntact Area */}
      <div id="contact" className="fix">
        <div className="rn-contact-area ptb--120">
          <ContactOne />
        </div>
      </div>
      {/* End COntact Area */}

      <FooterTwo />
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export default PortfolioLanding;
