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
                  <p>
                  From December 2018 to January 2021, I worked for three companies – <strong>From a start-up to a top IT services and outsourcing firm </strong>  in Vietnam. All of my projects used HTML, CSS, JavaScript, ReactJS, SCSS, etc., which helped me become a skillful JavaScript developer to adapt to diverse environments quickly. One of those is a calling-center website, in which we worked with demanding customers, dealt with changing requirements to rest APIs from a reasonably complicated database server by using Axios. The website was developed using <strong>UI library materials, maintained HTML, CSS JavaScript codes by using ReactJS, Redux, Jss </strong>. I also have experience working with TypeScript and MySQL database with most of my works and fundamental subjects in Georgian College (e.g., PHP, Database). <strong> Time management is one strength of mine </strong> that let me fulfill my full-time job as a developer and achieve a <strong> GPA of 9.35 from Georgian college at the same time.</strong> <br/>
                  Currently, I'm a Georgian College student in Canada and expect to graduate 2022 and settling down in Toronto, a beautiful city. I would like to have a summer co-op term in the city. 
                  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default About;
