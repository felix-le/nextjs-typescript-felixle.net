import * as React from 'react';
import Layout from '../components/common/Layout';
import {NextPage} from 'next';

import HeroBanner from '../components/HeroBanner';
import About from '../components/About';
import TechnologyStack from '../components/TechnologyStack';

import Portfolio from '../components/Portfolio';
import portflioData from '../data/portfolio';


const IndexPage: NextPage = () => {
  return(
    <Layout title="Felix Le's Website">
        <div className="slider-wrapper">
          <HeroBanner/>
        </div>
        
        <div className='about-area about-position-top pb--120'>
          <About />
        </div>

        <div className='portfolio-area pb--120 bg_color--1'>
          <div className='portfolio-sacousel-inner mb--55'>
            <TechnologyStack />
          </div>
        </div>

        <div className='portfolio-area pb--120 bg_color--1'>
        <div className='portfolio-sacousel-inner mb--55'>
          <Portfolio data={portflioData} />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
