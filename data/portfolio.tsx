import React from 'react';

export interface IData {
  image: string;
  href: string;
  title: string;
  subtitle: string;
  description: JSX.Element;
  aboutClient?: JSX.Element;
  technology?: JSX.Element;
  numberImage?: number;
  images?: Array<string>;
  clientLink?: string;
}

const data = [
  {
    image: 'felixle',
    href: 'felixle',
    title: 'FelixLe.net',
    subtitle: 'Learning NextJS and TypeScript by projects.',
    description: (
      <>
        <div>
          <p>
            Based on: RESTFUL Apis, I wanted to take its responses and reuse
            them across the website. By doing that, I thought that it would be
            easier for maintaining and controlling. <br />
          </p>
          <p>
            For example, I had to build a portfolio for the Home page (slider),
            portfolio page, and portfolio detail page. How can I use their data
            in an effective way?
          </p>
          <br />
          <p>
            Step 1: "Saw" my data.
            <br />
            Step 2: Tried to build a detail project based on data
            <br />
            Step 3: Create component portfolio <br />
            Step 4: Input component portfolio into Homepage <br />
          </p>
          <div>
            <p>
              <strong>What I did:</strong>
            </p>
            <ul>
              <li>Used Data to cross all three pages in a dynamic way</li>
              <li>Updated new detail page easy by using data</li>
            </ul>
          </div>
        </div>
      </>
    ),
    aboutClient: (
      <ul>
        <li>Date: 02/2020</li>
        <li>Site type: Portfolio and Self-blog</li>
        <li>Owner: Felix Le</li>
        <li>
          Github: https://github.com/felix-le/nextjs-typescript-felixle.net
        </li>
      </ul>
    ),
    technology: (
      <ul>
        <li>TypeScript</li>
        <li>NextJS</li>
        <li>Scss</li>
      </ul>
    ),
    numberImage: 1,
  },
  {
    image: 'dataTable',
    href: 'dataTable',
    title: 'A data table was written by logic only',
    subtitle: 'A data table was written in TypeScript, Mock Data',
    description: (
      <>
        <div>
          <p>
            Created a data table with some features work together:
            <ul>
              <li>Filter</li>
              <li>Sort</li>
              <li>Pagination</li>
              <li>Search</li>
              <li>Multiple Select</li>
              <li>Single Select</li>
            </ul>
          </p>
        </div>
      </>
    ),
    aboutClient: (
      <ul>
        <li>Date: 04/2022</li>
        <li>Site type: Learning</li>
        <li>Owner: Felix Le</li>
        <li>
          Github:
          <a
            target='_blank'
            style={{ color: '#ca3c08' }}
            href='  https://github.com/felix-le/react-completed-data-table-ts'
          >
            {' '}
            https://github.com/felix-le/react-completed-data-table-ts{' '}
          </a>
        </li>
        <li>
          Live:{' '}
          <a
            target='_blank'
            style={{ color: '#ca3c08' }}
            href='https://strong-platypus-434616.netlify.app/'
          >
            {' '}
            https://strong-platypus-434616.netlify.app/{' '}
          </a>
        </li>
      </ul>
    ),
    technology: (
      <ul>
        <li>TypeScript</li>
        <li>ReactJS</li>
        <li>tailwindcss</li>
      </ul>
    ),
    numberImage: 2,
  },
  {
    image: 'backendserver',
    href: 'backendserver',
    title: 'A Collection of backend servers',
    subtitle: 'A collection of backend servers for learning ExpressJS',
    description: (
      <>
        <div>
          <p>
            This is a collection of backend servers for learning ExpressJS. I
            did it when learning NodeJS
            <ul>
              <li>
                Perpetua
                <a
                  target='_blank'
                  style={{ color: '#ca3c08' }}
                  href=' https://github.com/felix-le/perpetua-be'
                >
                  {' '}
                  https://github.com/felix-le/perpetua-be{' '}
                </a>
                <ol>
                  <li>Create routes</li>
                  <li>Sort</li>
                  <li>Search by optional parameters</li>
                  <li>Remove repeated posts</li>
                  <li>Test API with jestJS</li>
                </ol>
              </li>
              <li>
                Mean Project
                <a
                  target='_blank'
                  style={{ color: '#ca3c08' }}
                  href='https://github.com/felix-le/mean-geo-asmt3-small-cms-be'
                >
                  {' '}
                  https://github.com/felix-le/mean-geo-asmt3-small-cms-be
                </a>
              </li>
              <li>
                Nodejs Project
                <a
                  target='_blank'
                  style={{ color: '#ca3c08' }}
                  href='https://github.com/felix-le/nodejs-geo-studio-project-be'
                >
                  {' '}
                  https://github.com/felix-le/nodejs-geo-studio-project-be
                </a>
              </li>
              <li>
                Dynamicly Project
                <a
                  target='_blank'
                  style={{ color: '#ca3c08' }}
                  href='https://github.com/felix-le/dynamicly_project_interview_be'
                >
                  {' '}
                  https://github.com/felix-le/dynamicly_project_interview_be{' '}
                </a>
              </li>
            </ul>
          </p>
        </div>
      </>
    ),
    aboutClient: (
      <ul>
        <li>Date: 04/2022</li>
        <li>Site type: Learning</li>
        <li>Owner: Felix Le</li>
      </ul>
    ),
    technology: (
      <ul>
        <li>ExpressJS</li>
      </ul>
    ),
    numberImage: 2,
  },
  {
    image: 'EQWorks',
    href: 'EQWorks',
    title: 'EQWorks - Work Sample',
    subtitle: 'A Work Sample Interview',
    description: (
      <>
        <div className='mt--20'>
          <p>
            Base on their Back-End repository build a layout <br />
          </p>
          <div>
            <p>
              <strong>Requirements:</strong>
            </p>
            <ul>
              <li>
                Set environment variables given in the problem set they send to
                me through email and run
              </li>
              <li>
                Front-end Track Build UI components that leverages the API
                server from problem 1 to solve problems below.
              </li>
              <li>
                1. Client-side general chart visualizations Implement one or
                more types of charts that can be used to effectively visualize
                data supplied from the API endpoints. Users should be able to
                pick different metrics to visualize and compare with others.
              </li>
              <li>
                2. client-side data table Implement a functional data table that
                can be used to browse through data supplied from the API
                endpoints. The data table should allow users to fuzzy search on
                meaningful values (such as POI names), and matching rows should
                be highlighted.
              </li>
              <li>
                3. client-side geo visualizations Implement a functional
                map-based data visualization based on different POI-bound
                metrics. Users should be able to select different metrics and be
                able to distinguish each metrics' intensity of different POIs.
                The map should also allow a certain degree of flexibility for
                users to zoom in and out, and allow users to see a "clustered"
                indicator when more than one POIs are too close to each other at
                the given zoom level.
              </li>
            </ul>
          </div>
          <div>
            <p>
              <strong>What I did:</strong>
            </p>
            <ul>
              <li>Resolved some issues in their projects</li>
              <li>
                Created a website to visualize data where users can filtering,
                sorting, ...
              </li>
            </ul>
          </div>

          <div>
            <p>
              <strong>Result Links: </strong>
            </p>
            <ul>
              <li>
                <a
                  href=' https://inquisitive-hummingbird-16bca5.netlify.app/'
                  style={{ color: 'red', fontSize: '18px' }}
                >
                  Demo
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/felix-le/data-visualization'
                  style={{ color: 'red', fontSize: '18px' }}
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
    clientLink: 'https://www.eqworks.com/',
    aboutClient: (
      <ul>
        <li>Date: 03/2021</li>
        <li>Site type: Work sample</li>
        <li>Owner: Felix Le</li>
      </ul>
    ),
    technology: (
      <ul>
        <li>ReactJS</li>
        <li>Redux Toolkit</li>
        <li>Carbon Charts</li>
        <li>style-components</li>
        <li>Express js</li>
      </ul>
    ),
    numberImage: 2,
  },
  {
    image: 'illustrator',
    href: 'illustrator',
    title: 'illustrator',
    subtitle: 'A Work Sample illustrator',
    description: (
      <>
        <div className='mt--20'>
          <p>
            Your final assignment will be a home page and mobile version of your
            own website. This design does not need to be a functional website –
            A3 is to show application of learned design principles. <br />
          </p>
          <div>
            <p>
              <strong>Requirements - DESIGN PRINCIPLES::</strong>
            </p>
            <ul>
              <li>Grid theory</li>
              <li>
                Balance: symmetry – reflective (vertical, horizontal, &amp;
                bilateral), rotative, &amp; translative, asymmetry
              </li>
              <li>Grid theory</li>
              <li>Unity: proximity &amp; repetition</li>
              <li>
                Dimension (raster): perspective (overlapping, blurring, &amp;
                sharpening), proportion, light &amp; shadow, &amp; pattern
                (texture)
              </li>
              <li>
                Dimension (vector): point, line, &amp; shape, rounded corners,
                &amp; rotation
              </li>
              <li>
                Emphasis: placement, continuance, isolation, contrast,
                proportion, &amp; navigation positive &amp; negative space,
                colour modes &amp; schemes
              </li>
            </ul>
          </div>
          <div>
            <p>
              <strong>What I did:</strong>
            </p>
            <ul>
              <li>
                This layout is used to run a non-profit campaign to raise
                awareness of Vietnamese people. In our country, dog meat is a
                popular dish. People will sign up with me by donating or sharing
                campaign information on social media by clicking on
                call-to-action buttons. All photos used in the exercise are
                cited at the end of the article and are strictly subject to the
                image page owner's policies.
              </li>
              <li>
                The website is a story about the friendship between Xiki (the
                dog) and Maria. Together, they overcame all difficulties in
                life, happy moments, and even when Maria got old (Xiki died
                already), she still lived with Xiki's children. I want visitors
                to come to the website to have experiences as being involved in
                this story. Therefore, I design the website in the direction of
                gentle stories, realistic illustrations, close text. The flow of
                that story is: when Maria was a baby, Xiki stayed with and
                shared feelings until Maria grew up, got married, and got old
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
    clientLink: 'https://www.georgiancollege.ca/',
    aboutClient: (
      <ul>
        <li>Date: 01/2020</li>
        <li>Site type: academic assignment</li>
        <li>Owner: Felix Le</li>
      </ul>
    ),
    technology: (
      <ul>
        <li>illustrator</li>
      </ul>
    ),
    numberImage: 2,
  },
];
export default data;
