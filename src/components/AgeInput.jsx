/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/react';
import MaleIcon from '../assets/male-icon.svg';
import FemaleIcon from '../assets/female-icon.svg';

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

const iconStyle = css`
  width: 60px;
  height: 60px;
`;

const AgeInput = () => {
  return (
    <div className='form-container'>
      <div className="form-header text-center">
      <h5>
        Calculate your Basal Metabolic Rate. Our bodies are like engines that
        are constantly running. They're always burning fuel or calories (even
        during sleep). BMR is the number of calories you burn each day simply by
        being alive.
      </h5>
      <h6>
        our Basal Metabolic Rate (BMR) can vary based on your age, sex, size,
        and genetics.[1] To get an accurate picture of the amount of calories
        you burn per day, start by calculating a value for your BMR.
      </h6>
      </div>
      <form className='row g-3'>
        <div className='col-12 d-flex justify-content-around'>
          <div className='radio-button-male'>
            <input
              type='radio'
              className='btn-check'
              name='radio-button'
              id='radio-button-male'
            />
            <label
              className='btn btn-outline-light shadow-sm'
              htmlFor='radio-button-male'
            >
              <img css={iconStyle} src={MaleIcon} alt='maleIcon' />
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
              className='btn btn-outline-light shadow-sm'
              htmlFor='radio-button-female'
            >
              <img css={iconStyle} src={FemaleIcon} alt='femaleIcon' />
            </label>
          </div>
        </div>
        <div className='col-md-4' css={formStyle}>
          <label htmlFor='inputCity' className='form-label'>
            Age
          </label>
          <input type='text' className='form-control' id='inputCity' />
        </div>
        <div className='col-md-4' css={formStyle}>
          <label htmlFor='inputCity' className='form-label'>
            Height
          </label>
          <input type='text' className='form-control' id='inputCity' />
        </div>
        <div className='col-md-4' css={formStyle}>
          <label htmlFor='inputCity' className='form-label'>
            Weight
          </label>
          <input type='text' className='form-control' id='inputCity' />
        </div>
        <div className='col-12' css={formStyle}>
          <label htmlFor='inputState' className='form-label'>
            Exercises
          </label>
          <select id='inputState' className='form-select' defaultValue={1}>
            <option value='1' disabled>
              Choose...
            </option>
            <option value='2'>1</option>
          </select>
        </div>

        <div className='col-12'>
          <button type='submit' className='btn btn-primary'>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgeInput;
