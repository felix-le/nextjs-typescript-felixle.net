import * as React from 'react';
import { useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import data from '../../data/blog.learning';
import Breadcrumb from '../../components/common/Breadcrumb';
import Layout from '../../components/common/Layout';

import { FaListUl, FaFileImage } from 'react-icons/fa';

const topics = [
  'Certificate',
  'Project management',
  'lifelong learner',
  'daily life',
];

const LearningPage: NextPage = () => {
  // const [isShowType, setIsShowType] = useState()

  const [isShowThumbnail, setIsShowThumbnail] = useState(false);
  const ThumbnailComponent: React.FunctionComponent = () => (
    <>
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
                  <Link href='/blog/[detail]' as={`/blog/value/${value.href}`}>
                    <a href={`/blog/${value.href}`}>{value.title}</a>
                  </Link>
                </h4>
                <div className='portfolio-button'>
                  <Link href='/blog/[detail]' as={`/blog/${value.href}`}>
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
    </>
  );

  const ListComponent: React.FunctionComponent = () => (
    <>
      {data.map((value, index) => (
        <div className='col-lg-6 col-md-6 col-sm-12 col-12' key={index}>
          <div className='itemContent__wrapper'>
            <Link href='/blog/[detail]' as={`/blog/${value.href}`}>
              <>
                <a href={`/blog/${value.href}`} className='itemContent__inner'>
                  <h4>{value.title}</h4>
                </a>
                <ul className='tagList_wrapper body_article'>
                  {value.tags.map((item, i) => (
                    <li className='tagName__wrapper' key={i}>
                      <span
                        className='tagName__article'
                        onClick={() => _handleTagLoad(item)}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <a href={`/blog/${value.href}`} className='itemContent__inner'>
                  <div className='itemContent'>
                    <p className='itemContent__des'>{value.description}</p>
                  </div>
                </a>
              </>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
  function _handleTagLoad(item: string): any {
    console.log('🚀 ~ file: index.tsx ~ line 29 ~ _handleTagLoad ~ item', item);
  }
  return (
    <Layout title='Lifelong learner'>
      <Breadcrumb
        title='Blog'
        commit='Always keep an open mind to learn new things'
        quoteLink='http://science-technology.vn/?author=2'
        quoteAuthor='(Mr.) John D. Vu Director'
        bgImg='bg_lifelong_learner'
      />
      <div className='blog_area'>
        <div className='portfolio-area ptb--80 bg_clor--1'>
          <div className='portfolio-carousel-inner'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='section-title text-center service-style--3 mb--30'>
                    {/* <h2 className='title'>My Blog</h2> */}
                    <p>
                    When you go to work, when you begin your own independent lives, you are responsible for your own career and your own happiness. There are no grades, no degree, no judges, no pass or fail but you have to create your own rules, your own learning, and your own lives. How you live, how you work, how you react, how you support your family, your society, your people, and how do you educate yourselves to face the “Real life” will determine your happiness.
                    </p>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <div className='iconShow_wrapper'>
                    <div
                      className='iconShow'
                      onClick={(): any => setIsShowThumbnail(true)}
                    >
                      <FaFileImage />
                    </div>
                    <div
                      className='iconShow'
                      onClick={(): any => setIsShowThumbnail(false)}
                    >
                      <FaListUl />
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='learning_path_menu mt--20'>
                  <div className='col-12'>
                    <ul className='tagList_wrapper'>
                      {topics.map((item, i) => (
                        <li key={i} className='tagName__wrapper'>
                          <span
                            onClick={() => _handleTagLoad(item)}
                            className='tagName'
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className='row'>
                {isShowThumbnail === true ? (
                  <>
                    <ThumbnailComponent />
                  </>
                ) : (
                  <>
                    {' '}
                    <ListComponent />{' '}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default LearningPage;
