import React from 'react';

const About: React.FunctionComponent = () => (
  <div className="about-wrapper">
    <div className="container">
      <div className="row row--35">
        <div className="col-lg-5 col-md-12">
          <div className="thumbnail">
            <img
              className="w-100"
              src="/assets/images/about/VA1.jpg"
              alt="About Images"
            />
          </div>
        </div>

        <div className="col-lg-7 col-md-12">
          <div className="about-inner inner">
            <div className="section-title">
              <h2 className="title">About Me</h2>
              <p className="description">
                Hi,
                I am a Web Developer from Vietnam. I focus on developing with JavaScript and its frameworks.
              </p>
            </div>
            <div className="row mt--30 mt_sm--10">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="about-us-list">
                  <h3 className="title">Who am I?</h3>
                  <p>
                    I'm a Georgian College student in Canada and expect to graduate 2022. Currently, I'm settling down Toronto, a beautiful city. I would like to have a summer co-op term in the city. 
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="about-us-list">
                  <h3 className="title">Lifelong passions</h3>
                  <p>
                  With my passion in coding, I used to learn HTML, CSS, JavaScript and some reactive web technologies such as: ReactJS. I would like to take on things that I know nothing about! (I built this website while learning TypeScript). In my opinion, if I can do what I love, it will be my happiness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default About;
