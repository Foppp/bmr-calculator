/** @jsx jsx */

import React from 'react';
import { Link } from 'react-router-dom';
import { jsx, css, keyframes } from '@emotion/react';
import brandLogo from './assets/BMR-logos_white.png'
const bmrLogoStyle = css`
  height: 45px;
  width: 125px;
`;

const Navbar = () => {
  return (
    <>
    <nav className='navbar navbar-expand-md bg-transparent navbar-dark shadow-sm'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          <img src={brandLogo} alt='logo' css={bmrLogoStyle} />
        </Link>
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
              <Link className='nav-link active' aria-current='page' to='/' >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' style={{color: '#56B9F7FC'}} to='/calculator'>
                Calculator
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
