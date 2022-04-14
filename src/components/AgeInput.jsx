/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/react';

const formStyle = css`
  input,
  select {
    background-color: transparent;
    border-radius: 20px;
    &:focus {
      background-color: transparent;
      outline-width: 0;
      outline: none;
    }
  }
`;

const AgeInput = () => {
  return (
    <div className="row">
      <div className="col-md">
      <h6 className='text-light py-3'>
                Our Basal Metabolic Rate (BMR) can vary based on your age, sex,
                size, and genetics.To get an accurate picture of the amount of
                calories you burn per day, start by calculating a value for your
                BMR.
              </h6>
      </div>
      <div className='col-md'>
      <label htmlFor='inputCity' className='form-label'>
        Age
      </label>
      <input type='text' className='form-control' id='inputCity' />
    </div>
    </div>

  );
};

export default AgeInput;
