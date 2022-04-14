/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/react';
import MaleIcon from '../assets/male-icon.svg';
import FemaleIcon from '../assets/female-icon.svg';

const iconStyle = css`
  width: 60px;
  height: 60px;
`;

const GenderInput = () => {
  return (
    <>
      <h3 className='text-warning text-center '>Choose your gender</h3>
      <div className='col-12 d-flex justify-content-around'>
        <div className='radio-button-male'>
          <input
            type='radio'
            className='btn-check'
            name='radio-button'
            id='radio-button-male'
          />
          <label
            className='btn btn-outline-warning shadow-sm'
            htmlFor='radio-button-male'
          >
            <div className='px-4 mt-3'>
              <img css={iconStyle} src={MaleIcon} alt='maleIcon' />
            </div>
            <p className='mt-2'>MALE</p>
          </label>
        </div>
        <div className='radio-button-female'>
          <input
            type='radio'
            className='btn-check'
            name='radio-button'
            id='radio-button-female'
          />
          <label
            className='btn btn-outline-warning shadow-sm'
            htmlFor='radio-button-female'
          >
            <div className='px-4 mt-3'>
              <img css={iconStyle} src={FemaleIcon} alt='femaleIcon' />
            </div>
            <p className='mt-2'>FEMALE</p>
          </label>
        </div>
      </div>
    </>
  );
};

export default GenderInput;
