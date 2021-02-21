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
              <p className='description'>
                Hi, I am
                <span className='text-success'> a Web Developer</span>. I focus on developing with
                <span className='text-success'> JavaScript </span>
                and its frameworks.
              </p>

              <h5>Who am I?</h5>
              <p>
                I am Felix. I am willing to learn, highly
                responsible and having sound work ethics.
                <span className='text-success'> Time management is one </span>
                strength of mine that let me fulfill
                <span className='text-success'> my full-time job </span>
                as a developer and achieve a
                <span className='text-success'> GPA of 9.35 </span>
                from
                <span className='text-success'> Georgian college </span>
                at the same time.
              </p>

              <h5>What am I doing?</h5>
              <p>
                I am
                <span className='text-success'>
                  {' '}
                  a Georgian College student{' '}
                </span>
                in Canada and expecting to
                <span className='text-success'> graduate in 2022</span>. I am
                settling down in
                <span className='text-success'> Toronto </span>, a beautiful
                city.
              </p>
              <h5>What can I do?</h5>
              <p>
                From
                <span className='text-success'> December 2018 </span>
                to
                <span className='text-success'> January 2021 </span>, I worked for
                three companies – From{' '}
                <span className='text-success'> a start-up </span>
                to <span className='text-success'> a top IT services </span>
                and outsourcing firm in Vietnam. I have gained solid knowledge
                and experience in Web Development, which makes me confident in
                developing websites using the latest technologies such as:
                <span className='text-success'>
                  HTML, CSS, JavaScript, ReactJS, SCSS, Redux, Jss, PHP,
                  TypeScript and MySQL database etc.,
                </span>
              </p>
              <h5>What will I do?</h5>

              <p>
                <span className='text-danger font-weight-bold'>
                  Find a job – Keep it and Grow up!
                </span>
              </p>
              {/* <p>
                  From December 2018 to January 2021, I worked for three companies – <strong>From a start-up to a top IT services and outsourcing firm </strong>  in Vietnam. All of my projects used HTML, CSS, JavaScript, ReactJS, SCSS, etc., which helped me become a skillful JavaScript developer to adapt to diverse environments quickly. One of those is a calling-center website, in which we worked with demanding customers, dealt with changing requirements to rest APIs from a reasonably complicated database server by using Axios. The website was developed using <strong>UI library materials, maintained HTML, CSS JavaScript codes by using ReactJS, Redux, Jss </strong>. I also have experience working with TypeScript and MySQL database with most of my works and fundamental subjects in Georgian College (e.g., PHP, Database). <br/>
                  Currently, I'm a Georgian College student in Canada and expecting to graduate 2022.
                  <strong> Time management is one strength of mine </strong> that let me fulfill my full-time job as a developer and achieve a <strong> GPA of 9.35 from Georgian college at the same time.</strong> <br/>
                   I'm settling down in Toronto, a beautiful city. I would like to have a summer co-op term in the city. 
                  </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default About;
