import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { portfolioSlick2 } from '../constants/script';
import { IData } from '../data/portfolio';

interface IProps {
  data: Array<IData>;
}

interface IPortfolioLink {
  title: string;
  href: string;
}

const PortfolioLink: React.FC<IPortfolioLink> = ({ title, href }) => (
  <Link href='/portfolio/[detail]' as={`/portfolio/${href}`}>
    <a href={`/portfolio/${href}`} title={title} className='portfolio-link'></a>
  </Link>
);

const Portfolio: React.FunctionComponent<IProps> = ({ data }) => (
  <div className='portfolio-wrapper'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='section-title'>
            <h2 className='title'>Portfolio</h2>
            <p>These are some products that I made</p>
          </div>
        </div>
      </div>
    </div>
    <div className='portfolio-slick-activation mt--70 mt_sm--40'>
      <Slider {...portfolioSlick2}>
        {data.map((value) => {
          return (
            <div className='portfolio' key={value.href}>
              <div className='thumbnail-inner'>
                <div className={`thumbnail ${value.image}`}></div>
                <div className={`bg-blr-image ${value.image}`}></div>
              </div>
              <div className='content'>
                <div className='inner'>
                  <h4>
                    <PortfolioLink href={value.href} title={value.title} />
                  </h4>
                  <div className='portfolio-button'>
                    <Link
                      href='/portfolio/[detail]'
                      as={`/portfolio/${value.href}`}
                    >
                      <a className='rn-btn' href={`/portfolio/${value.href}`}>
                        View Details
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  </div>
);
export default Portfolio;
