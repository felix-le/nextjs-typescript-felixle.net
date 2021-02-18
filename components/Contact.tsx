import React from 'react';

const Contact: React.FunctionComponent = () => (
  <div className="contact-form--1">
    <div className="container">
      <div className="row row--35 align-items-start">
        <div className="col-lg-6 order-2 order-lg-1">
          <div className="section-title text-left mb--50">
            <h2 className="title">Find out more</h2>
            <p className="description">
             You have a question for me? Please let me answer your question in three clicks.
            </p>
            <a
              className="rn-btn" target="_blank"
              href="https://calendly.com/felixle/30min"
            >
              Schedule a meeting
            </a>
          </div>
          <div className="form-wrapper">

          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2">
          <div className="thumbnail mb_md--30 mb_sm--30">
            <img src="/assets/images/questions.webp" alt="FelixLe" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Contact;
