import * as React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import data from '../../data/blog.learning';
import Breadcrumb from '../../components/common/Breadcrumb';
import Layout from '../../components/common/Layout';

const LearningPage: NextPage = () => {
  return (
    <Layout title='Lifelong learner'>
      <Breadcrumb
        title='Learning path'
        commit='Always keep an open mind to learn new things'
        quoteLink='http://science-technology.vn/?author=2'
        quoteAuthor='(Mr.) John D. Vu Director'
        bgImg='bg_lifelong_learner'
      />
      <div className='portfolio-area ptb--120 bg_clor--1'>
        <div className='portfolio-carousel-inner'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='section-title text-center service-style--3 mb--30'>
                  <h2 className='title'>All Works</h2>
                  <p>Hello</p>
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
