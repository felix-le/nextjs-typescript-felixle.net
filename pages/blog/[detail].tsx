import React from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '../../components/common/Layout';
import data from '../../data/blog.learning';

const LearningDetailPage: NextPage = () => {
  const router = useRouter();
  const { detail } = router.query;
  const infoDetail = data.find((item) => item.href === detail);
  const moreLearning = data
    .filter((item) => item.href !== detail)
    .sort(function () {
      return 0.5 - Math.random();
    })
    .slice(0, 2);

  return (
    <Layout title='Learning Detail Page'>
      {infoDetail && (
        <>
          {/* Start Breadcrump Area */}
          <div
            className='rn-page-title-area pt--120 pb--190 bg_image bg_image--4'
            data-black-overlay='7'
          >
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='rn-page-title text-center pt--100'>
                    <h2 className='title theme-gradient'>
                      {infoDetail?.title}
                    </h2>
                    <p>{infoDetail?.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Breadcrump Area */}

          {/* Start Portfolio Details */}
          <div className='rn-portfolio-details ptb--120 bg_color--1'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='portfolio-details'>
                    <div className='inner'>
                      <h2>{infoDetail?.title}</h2>
                      <p className='subtitle' style={{ marginBottom: 0 }}>
                        <strong>{infoDetail?.subtitle}</strong>
                      </p>
                      {infoDetail?.courseLink && (
                        <a
                          href={infoDetail.courseLink}
                          target='_blank'
                          style={{ marginBottom: '10px' }}
                        >
                          {infoDetail?.courseLink}
                        </a>
                      )}
                      {infoDetail?.description}
                      <div className='portfolio-view-list d-flex flex-wrap'>
                        {/* {infoDetail?.aboutClient && (
                          <div className='port-view'>
                            <h4>About the project/task</h4>
                            {infoDetail?.aboutClient}
                          </div>
                        )} */}
                        {infoDetail?.technology && (
                          <div className='port-view'>
                            <h4>Technology stack</h4>
                            {infoDetail?.technology}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='portfolio-thumb-inner'>
                      {infoDetail?.numberImage &&
                        Array.from(Array(infoDetail?.numberImage).keys()).map(
                          (index) => (
                            <div
                              className={`thumb mb--30 ${
                                index === 0 ? 'position-relative ' : ''
                              }`}
                              key={index}
                            >
                              <img
                                src={`/assets/images/blog/${
                                  infoDetail?.image
                                }/${index + 1}.png`}
                                alt='Portfolio Images'
                              />
                            </div>
                          )
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Portfolio Details */}

          {/* Start Related Work */}
          <div className='portfolio-related-work pb--120 bg_color--1'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='section-title text-center'>
                    <span className='theme-color font--18 fontWeight600'>
                      Related Work
                    </span>
                    <h2>Our More Projects</h2>
                  </div>
                </div>
              </div>
              <div className='row mt--10'>
                {moreLearning.map((item, index) => (
                  <div className='col-lg-6 col-md-6 col-12' key={index}>
                    <div className='related-work text-center mt--30'>
                      <div className='thumb'>
                        <Link href='/blog/[detail]' as={`/blog/${item.href}`}>
                          <a href={`/blog/${item.href}`}>
                            <img
                              src={`/assets/images/blog/${item.image}/1.png`}
                              alt={item.title}
                            />
                          </a>
                        </Link>
                      </div>
                      <div className='inner'>
                        <h4>
                          <Link href='/blog/[detail]' as={`/blog/${item.href}`}>
                            <a href={`/blog/${item.href}`}>{item.title}</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* End Related Work */}
        </>
      )}
    </Layout>
  );
};

export default LearningDetailPage;