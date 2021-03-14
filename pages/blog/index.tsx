import * as React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import data from '../../data/blog.learning';
import Breadcrumb from '../../components/common/Breadcrumb';
import Layout from '../../components/common/Layout';

const LearningPage: NextPage = () => {
  return (
    <Layout title='Lifelong learner'>
      <Breadcrumb title='Learning path' />
      <div className='portfolio-area ptb--120 bg_clor--1'>
        <div className='portfolio-carousel-inner'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='section-title text-center service-style--3 mb--30'>
                  <h2 className='title'>All Works</h2>
                  <p>
                    From December 2018, I fell in love with JavaScript. I worked
                    at three companies from "like a developer teams" to one of
                    the biggest company in my country. Through working period, I
                    learned many things about JavaScript, team work, used tools.
                    There are some of my website that I built.
                  </p>
                </div>
              </div>
            </div>
            <div className='row'>
              {data.map((value, index) => (
                <div className='col-lg-6 col-md-6 col-sm-12 col-12' key={index}>
                  <div className='portfolio text-left mt--40'>
                    <div className='thumbnail-inner'>
                      <div className={`thumbnail ${value.image}`}></div>
                      <div className={`bg-blr-image ${value.image}`}></div>
                    </div>
                    <div className='content'>
                      <div className='inner'>
                        <h4>
                          <Link
                            href='/blog/[detail]'
                            as={`/blog/value/${value.href}`}
                          >
                            <a href={`/blog/${value.href}`}>{value.title}</a>
                          </Link>
                        </h4>
                        <div className='portfolio-button'>
                          <Link
                            href='/blog/[detail]'
                            as={`/blog/${value.href}`}
                          >
                            <a href={`/blog/${value.href}`} className='rn-btn'>
                              View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default LearningPage;
