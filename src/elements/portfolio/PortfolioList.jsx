import React, { Component } from "react";
import { Link } from "react-router-dom";
const Portfolio_image = (
  <img
    src="/assets/images/portfolio/portfolio-1.jpg"
    alt="CUBI, ERP software"
  />
);
const Portfolio_image2 = (
  <img src="/assets/images/portfolio/portfolio-2.jpg" alt="Orevitae" />
);
const Portfolio_image3 = (
  <img src="/assets/images/portfolio/portfolio-3.jpg" alt="Mango" />
);

const PortfolioListContent = [
  {
    image: Portfolio_image,
    category: "Development",
    title: "Software Development",
    description: "Cubi was an ERP Software. Technologies: PHP, Laravel, MySQL",
  },
  {
    image: Portfolio_image2,
    category: "Development",
    title: "Web Development",
    description:
      "Orevitae was an social network. Technologies: PHP, MySQL, Javascript",
  },
  {
    image: Portfolio_image3,
    category: "Application",
    title: "React Native Template",
    description: "A React Native template. Technologies: React Native.",
    link: "https://github.com/diegobugs/demo-react-native-template-ts",
  },
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    const list = PortfolioListContent.slice(0, this.props.item);
    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className={`im_portfolio ${styevariation}`}>
              <div className="thumbnail_inner">
                <div className="thumbnail">
                  <Link to="/portfolio-details">{value.image}</Link>
                </div>
              </div>
              <div className="content">
                <div className="inner">
                  <div className="portfolio_heading">
                    <div className="category_list">
                      <Link to="/portfolio-details">{value.category}</Link>
                    </div>
                    <h4 className="title">
                      <Link to="/portfolio-details">{value.title}</Link>
                    </h4>
                  </div>
                  <div className="portfolio_hover">
                    <p>{value.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;
