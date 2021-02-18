import * as React from 'react';
import { NextPage } from 'next';

import ContactDetails from '../components/ContactDetails';
import Layout from '../components/common/Layout';
import Contact from '../components/Contact';
import Breadcrumb from '../components/common/Breadcrumb';

const ContactPage: NextPage = () => {
  return (
    <Layout title="Felix Le - Contact Me">
      <Breadcrumb title="Contact Me" />

      <div className="rn-contact-top-area ptb--120 bg_color--5">
        <div className="container">
          <ContactDetails />
        </div>
      </div>
      {/* End Contact Top Area  */}
      {/* Start Contact Page Area  */}
      <div className="rn-contact-page ptb--120 bg_color--1">
        <Contact />
      </div>
      {/* End Contact Page Area  */}
    </Layout>
  );
};

export default ContactPage;
