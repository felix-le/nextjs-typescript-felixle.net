import * as React from 'react';
import Layout from '../components/common/Layout';
import {NextPage} from 'next';

import HeroBanner from '../components/HeroBanner';
import About from '../components/About';
import TechnologyStack from '../components/TechnologyStack';

import Portfolio from '../components/Portfolio';
import portfolioData from '../data/portfolio';

import ContactDetails from '../components/ContactDetails';

const IndexPage: NextPage = () => {
  return(
    <Layout title="Felix Le's Website">
        <div className="slider-wrapper">
          <HeroBanner/>
        </div>
        
        <div className='about-area about-position-top ptb--120'>
          <About />
        </div>

        <div className='portfolio-area ptb--120 bg_color--3'>
          <div className='portfolio-sacousel-inner'>
            <TechnologyStack />
          </div>
        </div>

        <div className='portfolio-area ptb--120 bg_color--1'>
        <div className='portfolio-sacousel-inner mb--55'>
          <Portfolio data={portfolioData} />
        </div>
      </div>

      <div className='rn-contact-top-area ptb--120 bg_color--3'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='title'>Contact us</h2>
              <br />
            </div>
          </div>
          <ContactDetails />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
