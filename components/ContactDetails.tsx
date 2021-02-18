import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const ContactDetails = () => (
  <div className='row'>
    {/* Start Single Address  */}
    <div className='col-lg-3 col-md-6 col-sm-6 col-12 mt_mobile--50'>
      <div className='rn-address'>
        <a href='mailto:mc.vietanh@gmail.com'>
          <div className='icon'>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </a>
        <div className='inner'>
          <h4 className='title'>Email</h4>
          <p>
            <a href='mailto:mc.vietanh@gmail.com'>mc.vietanh@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
    {/* End Single Address  */}
    {/* Start Single Address  */}
    <div className='col-lg-3 col-md-6 col-sm-6 col-12 mt_mobile--50'>
      <div className='rn-address'>
        <div className='icon'>
          <a href='https://www.linkedin.com/in/felix-le/' target='_blank'>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <div className='inner'>
          <h4 className='title'>LinkedIn</h4>
          <p>
            <a href='https://www.linkedin.com/in/felix-le/' target='_blank'>
              Felix Le
            </a>
          </p>
        </div>
      </div>
    </div>
    {/* End Single Address  */}

    <div className='col-lg-3 col-md-6 col-sm-6 col-12 mt_sm--50'>
      <div className='rn-address'>
        <div className='icon'>
          <a href='tel:+057 254 365 456'>
            <FontAwesomeIcon icon={faPhoneAlt} />
          </a>
        </div>
        <div className='inner'>
          <h4 className='title'>Phone</h4>
          <p>
            <a href='tel:+057 254 365 456'>XXX-XXXX-XXXX</a>
          </p>
        </div>
      </div>
    </div>
    {/* End Single Address  */}

    {/* Start Single Address  */}
    <div className='col-lg-3 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50'>
      <div className='rn-address'>
        <a href='https://github.com/felix-le' target='_blank'>
          <div className='icon'>
            <FontAwesomeIcon icon={faGithubAlt} />
          </div>
        </a>
        <div className='inner'>
            <h4 className='title'>Github</h4>
          <p>
            <a  href='https://github.com/felix-le' >My repositories</a>
          </p>
        </div>
      </div>
    </div>
    {/* End Single Address  */}
  </div>
);

export default ContactDetails;
