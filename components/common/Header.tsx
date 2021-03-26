import React, { useEffect } from 'react';
import { FiX, FiMenu } from 'react-icons/fi';
import ActiveLink from './ActiveLink';

const Header: React.FunctionComponent = () => {
  function menuTrigger() {
    (document.querySelector('.header-wrapper') as HTMLElement).classList.toggle(
      'menu-open'
    );
  }
  function closeMenuTrigger() {
    (document.querySelector('.header-wrapper') as HTMLElement).classList.remove(
      'menu-open'
    );
  }

  function handleScroll() {
    var value = window.scrollY;

    if (value > 100) {
      (document.querySelector('.header--fixed') as HTMLElement).classList.add(
        'sticky'
      );
    } else {
      (document.querySelector(
        '.header--fixed'
      ) as HTMLElement).classList.remove('sticky');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='header-area formobile-menu header--fixed default-color'>
      <div className='header-wrapper' id='header-wrapper'>
        <div className='header-left'>
          <div className='logo'>
            <a
              href='/'
              className='logoTopLeft'
              style={{
                color: '#f9004d',
                fontSize: '20px',
                fontWeight: 'bold',
                letterSpacing: '2px',
              }}
            >
              Felix Le
            </a>
          </div>
        </div>
        <div className='header-right'>
          <nav className='mainMenuNav d-lg-block'>
            <ul className='mainMenu'>
              <ActiveLink href='/' title='Home' />
              <ActiveLink href='/about' title='About' />
              <li>
                <a
                  className='nav-link blog-link'
                  href='https://felixle.ca/'
                  target='_blank'
                >
                  Blog{' '}
                </a>
              </li>
              <ActiveLink href='/portfolio' title='Portfolio' />
              <ActiveLink href='/contact' title='Contact' />
            </ul>
          </nav>
          {/* Start Hamburger Menu  */}
          <div className='hamburger-menu d-block d-lg-none pl--20'>
            <span className='menuTrigger text-white' onClick={menuTrigger}>
              <FiMenu />
            </span>
          </div>

          {/* End Hamburger Menu  */}
          <div className='close-menu d-block d-lg-none'>
            <span className='closeTrigger' onClick={closeMenuTrigger}>
              <FiX />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
