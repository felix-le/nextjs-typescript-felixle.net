import React from 'react';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

type IProps = {
  title?:string;
};

const Layout: React.FunctionComponent<IProps> = ({
  children,
  title='this is the default title'
}) => (
  <>
    <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <title>{title}</title>
    <meta
        name="description"
        content="I am a software engineer in Canada"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Felix Le - a Web developer - React, NodeJS"
      />
       <meta
        property="og:description"
        content=" I am a web developer who provide consultant and mobile and web development"
      />
      <meta property="og:url" content="https://www.linkedin.com/in/felix-le/" />
      <meta property="og:site_name" content="Felix Le" />
      <meta property="og:image" content="/assets/images/aboutMe/normal1.jpg" />
      <meta property="og:image:width" content="1000" />
      <meta property="og:image:height" content="961" />
    </Head>
    <Header />
    {children}
    <Footer />
  </>
)
export default Layout;