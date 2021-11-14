import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ProgressBar } from "react-bootstrap";

class TabsTwo extends Component {
  render() {
    let tab1 = "Skills",
      tab2 = "Experience",
      tab3 = "Education";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <div
                        className={`rn-progress-bar progress-bar--1 mt_dec--10 row`}
                      >
                        <div className="col col-lg-6">
                          <div className="single-progress">
                            <h6 className="title">Javascript</h6>
                            <ProgressBar now={100} />
                            <span className="label">100%</span>
                          </div>

                          <div className="single-progress">
                            <h6 className="title">ReactJS</h6>
                            <ProgressBar now={70} />
                            <span className="label">70%</span>
                          </div>

                          <div className="single-progress">
                            <h6 className="title">React Native</h6>
                            <ProgressBar now={90} />
                            <span className="label">90%</span>
                          </div>

                          <div className="single-progress">
                            <h6 className="title">Kotlin</h6>
                            <ProgressBar now={50} />
                            <span className="label">50%</span>
                          </div>

                          <div className="single-progress">
                            <h6 className="title">PHP/Laravel</h6>
                            <ProgressBar now={65} />
                            <span className="label">65%</span>
                          </div>
                        </div>
                        <div className="col col-lg-6">
                          <div className="single-progress">
                            <h6 className="title">HTML/CSS</h6>
                            <ProgressBar now={70} />
                            <span className="label">70%</span>
                          </div>

                          <div className="single-progress">
                            <h6 className="title">APIs</h6>
                            <ProgressBar now={90} />
                            <span className="label">90%</span>
                          </div>

                          <div className="single-progress">
                            <h6 className="title">MySQL/PostgreSQL</h6>
                            <ProgressBar now={95} />
                            <span className="label">95%</span>
                          </div>
                          <div className="single-progress">
                            <h6 className="title">SAP HANA</h6>
                            <ProgressBar now={80} />
                            <span className="label">80%</span>
                          </div>
                          <div className="single-progress">
                            <h6 className="title">GIT</h6>
                            <ProgressBar now={85} />
                            <span className="label">85%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <div>
                            <span className="fontWeight600">
                              Front-end developer
                            </span>
                            <span> - Mango Payments S.A</span>
                          </div>{" "}
                          <div>21/12/2020 - Current</div>
                          <div>
                            Skills:{" "}
                            <span className="tag theme-gradient">
                              React Native
                            </span>
                            <span className="tag theme-gradient">Git</span>
                            <span className="tag theme-gradient">Kotlin</span>
                          </div>
                          <div>
                            I am part of the front-end development team of
                            Mango, an eWallet. Currently I'm working on the main
                            mobile application, with React Native for both
                            Android and iOS. We are using a variety of
                            technologies and Agile management methodology, like
                            React NaWve, GIT (gitlab), SourceTree, Zeplin,
                            Postman, Slack, and Scrum.
                          </div>
                        </li>
                        <li>
                          <div>
                            <span className="fontWeight600">Professor</span>
                            <span> - UNAE</span>
                          </div>{" "}
                          <div>01/08/2019 - 01-03-2020</div>
                          <div>
                            I took the subjects "Programming Logic" and "Systems
                            Analysis and Design".
                          </div>
                        </li>
                        <li>
                          <div>
                            <span className="fontWeight600">IT lead</span>
                            <span> - Eno Bronstrup S.A</span>
                          </div>{" "}
                          <div>01/01/2019 - 18/12/2020</div>
                          <div>
                            Skills:{" "}
                            <span className="tag theme-gradient">
                              MS Power BI
                            </span>
                            <span className="tag theme-gradient">Git</span>
                            <span className="tag theme-gradient">SAP B1</span>
                            <span className="tag theme-gradient">SAP HANA</span>
                            <span className="tag theme-gradient">
                              SQL Server
                            </span>
                            <span className="tag theme-gradient">MySQL</span>
                            <span className="tag theme-gradient">
                              PHP/Laravel
                            </span>
                          </div>
                          <div>
                            In EBSA I used to be involved in software
                            development activities, assistance to managers in
                            business reports and support for decision making
                            using Data Analysis technologies such as Power BI. I
                            work closely with the accounting department giving
                            support and working with SAP ERP software
                            implementation.
                          </div>
                        </li>
                        <li>
                          <div>
                            <span className="fontWeight600">
                              Software developer
                            </span>
                            <span> - Eno Bronstrup S.A</span>
                          </div>{" "}
                          <div>01/12/2016 - 31/12/2018</div>
                          <div>
                            Skills:{" "}
                            <span className="tag theme-gradient">Genexus</span>
                            <span className="tag theme-gradient">
                              PHP/Laravel
                            </span>
                            <span className="tag theme-gradient">
                              SQL Server
                            </span>
                          </div>
                          <div>
                            Develop software capable of facilitaing tasks and
                            information management within the companies of the
                            Selecta Group. My role was developing all kinds of
                            computer tools capable of improving performance and
                            operations within the Grupo Selecta holding. The
                            functions and modules developed comply with the
                            areas of agriculture, cattle, accouning, financial.
                            I have worked on implementation of a bug tracking
                            software. Definition and implementation of
                            development flow: I was in charge of designing a
                            development flow for the IT team, where we separated
                            the analysis / development / tesing / implementation
                            tasks in order to have documented the process of
                            launching new features, versioning and quality
                            control of the software product.
                          </div>
                        </li>
                        <li>
                          <div>
                            <span className="fontWeight600">
                              User support analyst
                            </span>
                            <span> - Banco Regional</span>
                          </div>{" "}
                          <div>01/10/2016 - 30/11/2016</div>
                          <div>
                            Skills:{" "}
                            <span className="tag theme-gradient">
                              Oracle Report Builder
                            </span>
                            <span className="tag theme-gradient">
                              Oracle Form Builder
                            </span>
                            <span className="tag theme-gradient">PL/SQL</span>
                          </div>
                          <div>
                            I had a small opportunity to meet and collaborate
                            with the excellent technology team in this
                            institution. I worked as support for users of the
                            ITGF Banking software, developing reports and giving
                            help in technological solutions. We used PL/SQL,
                            Oracle Report Builder and Oracle Form Builder.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Specialization in higher education
                            <span>
                              {" "}
                              - Universidad Católica Nuestra Señora de la
                              Asunción – Encarnación, Itapúa.
                            </span>
                          </a>{" "}
                          2019
                        </li>
                        <li>
                          <a href="/service">
                            BCs in Information Engineering
                            <span>
                              {" "}
                              - Universidad Católica Nuestra Señora de la
                              Asunción – Encarnación, Itapúa.
                            </span>
                          </a>{" "}
                          2017
                        </li>
                        <li>
                          <a href="/service">
                            Computer technician
                            <span>
                              {" "}
                              - Universidad Católica Nuestra Señora de la
                              Asunción – Encarnación, Itapúa.
                            </span>
                          </a>{" "}
                          2015
                        </li>
                        <li>
                          <a href="/service">
                            Bachelor of basic sciences
                            <span>
                              {" "}
                              - Colegio Privado Concordia – Hohenau, Itapúa.
                            </span>
                          </a>{" "}
                          2007
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
