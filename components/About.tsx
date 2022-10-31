import React from 'react';

const About: React.FunctionComponent = () => (
  <div className='about-wrapper'>
    <div className='container'>
      <div className='row row--35'>
        <div className='col-lg-5 col-md-12'>
          <div className='thumbnail'>
            <img
              className='w-100'
              src='/assets/images/about/VA1.png'
              alt='About Images'
            />
          </div>
        </div>

        <div className='col-lg-7 col-md-12'>
          <div className='about-inner inner'>
            <div className='section-title'>
              <h2 className='title'>About Me</h2>
              <p>
                With my 3+ years of experience, I believe I would make
                substantial contributions to your organization. The opportunity
                would allow me to solve challenging engineering problems, in
                which I can use my prior experience and knowledge.
                <br />
              </p>
              <p>
                As a Full Stack developer, I have valuable experience in
                Software and Web Development with the latest Front End
                technologies. I am also a self-starter with a growth mindset,
                and have a passion for learning and sharing my knowledge and
                expertise in the fields such as:
              </p>

              <ul className='mt-5'>
                <li>
                  <p>
                    Web development: materials UI library, HTML and JSS/CSS for
                    styling and JavaScript, ReactJS, and Redux, Redux-toolkits,
                    ExpressJS.
                  </p>
                </li>
                <li>
                  <p>Programming languages: Python, Java, PHP.</p>
                </li>
                <li>
                  <p>
                    Experience with a broad range of software design approaches
                    and common UX interface design patterns with Illustrator and
                    Photoshop.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default About;
