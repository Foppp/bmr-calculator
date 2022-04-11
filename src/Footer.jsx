/** @jsx jsx */

import React from 'react';
import { jsx, css, keyframes } from '@emotion/react';

const footerStyles = css`
  background-color: #fff9d4;
`;

const Footer = () => {
  return (
    <div className='container mt-5'>
      <footer className='d-flex justify-content-center align-items-center border-top'>
        <p className='text-center text-muted my-3'>© 2022 BMR Calculator, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
