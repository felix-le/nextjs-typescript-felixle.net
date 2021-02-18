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
}


const data = [
  {
  image: 'felixle',
  href: 'felixle',
  title: 'FelixLe.net',
  subtitle: 'While learning TypeScript and NextJS, I built this website',
  description: 
    (
      <>
        <div>
          <h4>For improving my skill, I tried to do it with my real experiences</h4>
          <p>
            Base on: RESTFUL Apis, I wanted to take its responses and reused them cross the website. By
            doing that, I thought that it would be easier for maintaining and controlling. <br />
          </p>
          <p>
            For example: I had to build portfolio for Home page (slider), portfolio page, and portfolio
            detail page. How can I use this their data by a effective way?
          </p>
          <br />
          <p>
            Step 1: I "saw" my data.<br />
            Step 2: tried to build a detail project based on data<br/>
            Step 3: Create component portfolio <br/>
            Step 4: input component portfolio into Homepage <br/>
          </p>
          <div>
            <p><strong>
                What I did:
              </strong></p>
            <ul>
              <li>used Data to cross all three pages in a dynamic way</li>
              <li>Updated new detail page easy by using data</li>
            </ul>
          </div>
        </div>
      </>
    ),
    aboutClient:(
      <ul>
        <li>Date: 02/17/2020</li>
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
    numberImage: 1
  },
  {
    image: 'felixle',
    href: 'felixle.net',
    title: 'FelixLe.net',
    subtitle: 'While learning TypeScript and NextJS, I built this website',
    description: 
      (
        <>
          <div>
            <h4>For improving my skill, I tried to do it with my real experiences</h4>
            <p>
              Base on: RESTFUL Apis, I wanted to take its responses and reused them cross the website. By
              doing that, I thought that it would be easier for maintaining and controlling. <br />
            </p>
            <p>
              For example: I had to build portfolio for Home page (slider), portfolio page, and portfolio
              detail page. How can I use this their data by a effective way?
            </p>
            <br />
            <p>
              Step 1: I "saw" my data.<br />
              Step 2: tried to build a detail project based on data<br/>
              Step 3: Create component portfolio <br/>
              Step 4: input component portfolio into Homepage <br/>
            </p>
            <div>
              <p><strong>
                  What I did:
                </strong></p>
              <ul>
                <li>used Data to cross all three pages in a dynamic way</li>
                <li>Updated new detail page easy by using data</li>
              </ul>
            </div>
          </div>
        </>
      ),
      aboutClient:(
        <ul>
          <li>Date: 02/17/2020</li>
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
      numberImage: 1
    },
  {
      image: 'felixle',
      href: 'felixle.net',
      title: 'FelixLe.net',
      subtitle: 'While learning TypeScript and NextJS, I built this website',
      description: 
        (
          <>
            <div>
              <h4>For improving my skill, I tried to do it with my real experiences</h4>
              <p>
                Base on: RESTFUL Apis, I wanted to take its responses and reused them cross the website. By
                doing that, I thought that it would be easier for maintaining and controlling. <br />
              </p>
              <p>
                For example: I had to build portfolio for Home page (slider), portfolio page, and portfolio
                detail page. How can I use this their data by a effective way?
              </p>
              <br />
              <p>
                Step 1: I "saw" my data.<br />
                Step 2: tried to build a detail project based on data<br/>
                Step 3: Create component portfolio <br/>
                Step 4: input component portfolio into Homepage <br/>
              </p>
              <div>
                <p><strong>
                    What I did:
                  </strong></p>
                <ul>
                  <li>used Data to cross all three pages in a dynamic way</li>
                  <li>Updated new detail page easy by using data</li>
                </ul>
              </div>
            </div>
          </>
        ),
        aboutClient:(
          <ul>
            <li>Date: 02/17/2020</li>
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
        numberImage: 1
      },
  {
        image: 'felixle',
        href: 'felixle.net',
        title: 'FelixLe.net',
        subtitle: 'While learning TypeScript and NextJS, I built this website',
        description: 
          (
            <>
              <div>
                <h4>For improving my skill, I tried to do it with my real experiences</h4>
                <p>
                  Base on: RESTFUL Apis, I wanted to take its responses and reused them cross the website. By
                  doing that, I thought that it would be easier for maintaining and controlling. <br />
                </p>
                <p>
                  For example: I had to build portfolio for Home page (slider), portfolio page, and portfolio
                  detail page. How can I use this their data by a effective way?
                </p>
                <p>
                  Step 1: I "saw" my data.<br />
                  Step 2: tried to build a detail project based on data<br/>
                  Step 3: Create component portfolio <br/>
                  Step 4: input component portfolio into Homepage <br/>
                </p>
                <div>
                  <h4><strong>
                      What I did:
                    </strong></h4>
                  <ul>
                    <li>used Data to cross all three pages in a dynamic way</li>
                    <li>Updated new detail page easy by using data</li>
                  </ul>
                </div>
              </div>
            </>
          ),
          aboutClient:(
            <ul>
              <li>Date: 02/17/2020</li>
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
          numberImage: 1
        },{
          image: 'felixle',
          href: 'felixle.net',
          title: 'FelixLe.net',
          subtitle: 'While learning TypeScript and NextJS, I built this website',
          description: 
            (
              <>
                <div>
                  <h4>For improving my skill, I tried to do it with my real experiences</h4>
                  <p>
                    Base on: RESTFUL Apis, I wanted to take its responses and reused them cross the website. By
                    doing that, I thought that it would be easier for maintaining and controlling. <br />
                  </p>
                  <p>
                    For example: I had to build portfolio for Home page (slider), portfolio page, and portfolio
                    detail page. How can I use this their data by a effective way?
                  </p>
                  <p>
                    Step 1: I "saw" my data.<br />
                    Step 2: tried to build a detail project based on data<br/>
                    Step 3: Create component portfolio <br/>
                    Step 4: input component portfolio into Homepage <br/>
                  </p>
                  <div>
                    <h4><strong>
                        What I did:
                      </strong></h4>
                    <ul>
                      <li>used Data to cross all three pages in a dynamic way</li>
                      <li>Updated new detail page easy by using data</li>
                    </ul>
                  </div>
                </div>
              </>
            ),
            aboutClient:(
              <ul>
                <li>Date: 02/17/2020</li>
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
            numberImage: 1
          },
]
export default data;