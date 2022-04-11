/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/react';

const formStyle = css`
  background-color: transparent;
  border-radius: 20px;
  &:focus {
    background-color: transparent;
    outline-width: 0;
    outline: none;
  }
`;

const AgeInput = () => {
  return (
    <div className='container form-container'>
      <h4 className='mt-2 mb-4 text-light text-center'>Enter Your Age</h4>
      <div className='form-floating'>
        <input
          css={formStyle}
          type='text'
          className='form-control'
          id='floatingInput'
          placeholder='5-85'
        />
        <label className='ms-2' htmlFor='floatingInput'>
          Age
        </label>
      </div>
    </div>
  );
};

export default AgeInput;
