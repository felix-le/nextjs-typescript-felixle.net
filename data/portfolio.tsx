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
            Base on: RESTFUL Apis, I wanted to take its responses and reused
            them cross the website. By doing that, I thought that it would be
            easier for maintaining and controlling. <br />
          </p>
          <p>
            For example: I had to build portfolio for Home page (slider),
            portfolio page, and portfolio detail page. How can I use this their
            data by a effective way?
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
    image: 'tetris',
    href: 'tetris',
    title: 'Tetris',
    subtitle: 'Learning JavaScript from freeCodeCamp',
    description: (
      <>
        <div>
          <p>
            Base on: Vanilla JavaScript
            <br />
          </p>
          <p>following tetris game on freeCodeCamp YouTube</p>
          <br />
          <div>
            <p>
              <strong>What I did:</strong>
            </p>
            <ul>
              <li>Recode all the code</li>
            </ul>
          </div>
        </div>
      </>
    ),
    aboutClient: (
      <ul>
        <li>Date: 02/2020</li>
        <li>Site type: habits</li>
        <li>Owner: freeCodeCamp</li>
      </ul>
    ),
    technology: (
      <ul>
        <li>JavaScript</li>
      </ul>
    ),
    numberImage: 2,
  },
  {
    image: 'iGEM',
    href: 'iGEM',
    title: 'iGEM interview task',
    subtitle: 'A Task Interview',
    description: (
      <>
        <div className='mt--20'>
          <p>
            Base on an SVG file to create a webpage where the SVG is animated
            (var time) <br />
          </p>
          <div>
            <p>
              <strong>Requirements:</strong>
            </p>
            <ul>
              <li>
                Mario with a pipette represents our Wet Lab team: moving like
                Mario
              </li>
              <li>
                Yoshi with a laptop represents our Dry Lab team: moving like
                Yoshi
              </li>
              <li>
                Peach with a megaphone represents our Business and Ethics team:
                moving like Peach
              </li>
              <li>
                Plastics bottle represents our project on plastics degradation:
                absolute position moving up and down
              </li>
              <li>
                igemto logo pole represent our club: moving up and down while
                attached to the bottom (scale x and y)
              </li>
              <li>
                Bullet bill moving towards Mario, Yoshi, and Peach, who in
                contrast will dodge the bullet.
              </li>
              <li>Bonus details: hand movement of the three characters</li>
            </ul>
          </div>
          <div>
            <p>
              <strong>What I did:</strong>
            </p>
            <ul>
              <li>Used illustrator for design svg files</li>
              <li>
                Based on iGEM teams and their history to build a story about
                them and their projects
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
                  href='https://uot-igem-club-interview.vercel.app/'
                  style={{ color: 'red', fontSize: '18px' }}
                >
                  Demo
                </a>
              </li>
              <li>
                <a
                  href='https://codepen.io/vietanh1808/pen/zYoLrwY'
                  style={{ color: 'red', fontSize: '18px' }}
                >
                  codepen
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/felix-le/uot_igem_club_interview'
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
    clientLink: 'https://igemtoronto.ca/',
    aboutClient: (
      <ul>
        <li>Date: 03/2021</li>
        <li>Site type: Small task</li>
        <li>Owner: Felix Le</li>
      </ul>
    ),
    technology: (
      <ul>
        <li>Pure JavaScript</li>
        <li>Pure HTML</li>
        <li>Pure CSS</li>
      </ul>
    ),
    numberImage: 1,
  },
  {
    image: 'felixle',
    href: 'felixle.net',
    title: 'FelixLe.net',
    subtitle: 'Learning NextJS and TypeScript by projects.',
    description: (
      <>
        <div>
          <p>
            Base on: RESTFUL Apis, I wanted to take its responses and reused
            them cross the website. By doing that, I thought that it would be
            easier for maintaining and controlling. <br />
          </p>
          <p>
            For example: I had to build portfolio for Home page (slider),
            portfolio page, and portfolio detail page. How can I use this their
            data by a effective way?
          </p>
          <p>
            Step 1: "Saw" my data.
            <br />
            Step 2: Tried to build a detail project based on data
            <br />
            Step 3: Create component portfolio <br />
            Step 4: Input component portfolio into Homepage <br />
          </p>
          <div>
            <h4>
              <strong>What I did:</strong>
            </h4>
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
    image: 'felixle',
    href: 'felixle.net',
    title: 'FelixLe.net',
    subtitle: 'Learning NextJS and TypeScript by projects.',
    description: (
      <>
        <div>
          <p>
            Base on: RESTFUL Apis, I wanted to take its responses and reused
            them cross the website. By doing that, I thought that it would be
            easier for maintaining and controlling. <br />
          </p>
          <p>
            For example: I had to build portfolio for Home page (slider),
            portfolio page, and portfolio detail page. How can I use this their
            data by a effective way?
          </p>
          <p>
            Step 1: "Saw" my data.
            <br />
            Step 2: Tried to build a detail project based on data
            <br />
            Step 3: Create component portfolio <br />
            Step 4: Input component portfolio into Homepage <br />
          </p>
          <div>
            <h4>
              <strong>What I did:</strong>
            </h4>
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
];
export default data;
