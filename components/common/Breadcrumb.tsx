import React from 'react';
import Link from 'next/link';

interface IProps {
  title: string;
}

const Breadcrumb: React.FunctionComponent<IProps> = ({ title }) => (
  <div
    className="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1"
    data-black-overlay="6"
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-inner pt--100">
            <h2 className="title">{title}</h2>
            <ul className="page-list">
              <li className="breadcrumb-item">
                <Link href="/">
                  <a href="/">Home</a>
                </Link>
              </li>
              <li className="breadcrumb-item active">{title}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Breadcrumb;
