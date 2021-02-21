import React from 'react';
import {FaArrowRight} from 'react-icons/fa';
const HeroBanner: React.FunctionComponent = () => (
  <>
    <div className='heroBanner-c'>
      <div className='container'>
        <div className='heroBanner__wrapper d-flex '>
          <div className='heroBanner__text__wrapper'>
            <h1 className='heroBanner__tittle'>Welcome to my house!</h1>
            <p className='heroBanner__des'>
              <FaArrowRight/> I'm Felix Le,
              <span className='text-success'> a Web Developer </span>
              and
              <span className='text-danger'> Lifelong learner</span>!
            </p>
          </div>
          <div className='heroBanner__image__wrapper'>
            <div className='overlay'></div>
            <div className='heroBanner__bgAva'></div>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default HeroBanner;
