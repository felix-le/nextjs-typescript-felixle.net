import React from 'react';
import Link from 'next/link';

interface IProps {
  title: string;
  commit?: string;
  quoteLink?: string;
  quoteAuthor?: string;
  bgImg?: string;
}

const Breadcrumb: React.FunctionComponent<IProps> = ({
  title,
  commit,
  quoteLink,
  quoteAuthor,
  bgImg = 'bg_image--2',
}) => (
  <div
    className={`${bgImg} breadcrumb-area rn-bg-color ptb--140 bg_image`}
    data-black-overlay='6'
  >
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div
            className={
              `${commit}`
                ? 'breadcrumb-inner pt--20'
                : 'breadcrumb-inner pt--100'
            }
          >
            <h2 className='title'>{title}</h2>
            <ul className='page-list'>
              <li className='breadcrumb-item'>
                <Link href='/'>
                  <a href='/'>Home</a>
                </Link>
              </li>
              <li className='breadcrumb-item active'>{title}</li>
            </ul>
            {/* <h4 className='commit'>{commit}</h4> */}
            {quoteLink && (
              <>
                <blockquote
                  className='commit'
                  cite='http://science-technology.vn/?author=2'
                >
                  {commit}
                </blockquote>
                <a href={quoteLink} className='link-quote' target='_blank'>
                  <i> {quoteAuthor}</i>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Breadcrumb;
