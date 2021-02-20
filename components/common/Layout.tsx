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
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta 
          name="description"
          content="I am a software engineer in Canada"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Felix Le - a Web developer - ReactJS"
        />
        <meta
          property="og:description"
          content=" I am a web developer who provide consultant and mobile and web development"
        />
        <meta property="og:url" content="https://www.linkedin.com/in/felix-le/" />
        <meta property="og:site_name" content="Felix Le" />
        <meta property="og:image" content="/assets/images/about/VA3.jpg" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="961" />
        <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NJH9SVV');`
        }}
      ></script>
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
)
export default Layout;