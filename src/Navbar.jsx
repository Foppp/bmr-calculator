import React from 'react';
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import BmrLogo from './assets/BMR-logos_white.png';

const bmrLogoStyle = css`
  height: 45px;
  width: 125px;
`;

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md bg-transparent navbar-dark shadow-sm'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          <img src={BmrLogo} alt='logo' css={bmrLogoStyle} />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo02'
          aria-controls='navbarTogglerDemo02'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse justify-content-center' id='navbarTogglerDemo02'>
          <ul className='navbar-nav mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' style={{color: '#56B9F7FC'}} href='#'>
                Calculator
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
