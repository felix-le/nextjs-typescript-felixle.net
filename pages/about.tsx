import * as React from "react";
import { NextPage } from "next";

import Layout from "../components/common/Layout";
import Breadcrumb from "../components/common/Breadcrumb";
import Counter from "../components/Counter";

const AboutPage: NextPage = () => {
  return (
    <Layout title="Felix Le - More Details">
      <Breadcrumb title="About" />
      {/* Start About Area  */}
      <div className="rn-about-area ptb--120 bg_color--1">
        <div className="rn-about-wrapper">
          <div className="container">
            <div className="row row--35">
              <div className="col-lg-5">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src="/assets/images/about/VA3.jpg"
                    alt="JSLancer team"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">About Me</h2>
                    <p className="description">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quos, id sequi fuga doloremque saepe veritatis est, unde, minima beatae maxime neque alias veniam labore inventore sint numquam nisi debitis!
                    </p>
                    <br />
                    <p className="description">
                      <h4>Our technology stacks:</h4>
                      <strong>Frontend:</strong>
                      <ul>
                        <li>ReactJS</li>
                        <li>redux, redux toolkit</li>
                        <li>styled-components</li>
                        <li>react-router-dom</li>
                      </ul>
                      <strong>Other:</strong>
                      <ul>
                        <li>Php</li>
                        <li>MMySql</li>
                        <li>Illustration</li>
                      </ul>
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Area  */}

      {/* Start CounterUp Area */}
      <div className="rn-counterup-area pb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3 className="fontWeight500">Our Fun Facts</h3>
              </div>
            </div>
          </div>
          <Counter />
        </div>
      </div>
      {/* End CounterUp Area */}

      {/* Start Finding Us Area  */}
      <div className="rn-finding-us-area rn-finding-us bg_color--1">
        <div className="inner">
          <div className="content-wrapper">
            <div className="content">
              <h4 className="theme-gradient">Find out more</h4>
              <p>
                You have a question for me? Please let me answer your question in three clicks.
              </p>
              <a
                className="rn-btn btn-white" target="_blank"
                href="https://calendly.com/felixle/30min"
              >
                Schedule a meeting
              </a>
            </div>
          </div>
          <div className="thumbnail">
            <div className="image">
              <img
                src="/assets/images/questions.webp"
                alt="Finding Images"
              />
            </div>
          </div>
        </div>
      </div>
      {/* End Finding Us Area  */}
    </Layout>
  );
};

export default AboutPage;
