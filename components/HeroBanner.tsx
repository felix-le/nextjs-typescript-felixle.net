import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const HeroBanner: React.FunctionComponent = () =>(
  <>
    <div className="heroBanner-c">
      <div className="container">
        <div className="heroBanner__wrapper d-flex ">
          <div className="heroBanner__text__wrapper">
              <h1 className="heroBanner__tittle">Welcome to my house!</h1>
              <p className="heroBanner__des">
                <FontAwesomeIcon icon={faArrowRight} /> Hi, I'm Felix, a Web Developer and Lifelong learner
              </p>
          </div>
          <div className="heroBanner__image__wrapper">
              <div className="overlay"></div>
              <div className="heroBanner__bgAva"></div>
          </div>
        </div>
      </div>
    </div>
  </>
)
export default HeroBanner;