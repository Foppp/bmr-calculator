/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx, css } from '@emotion/react';
import FormComponent from './components/FormComponent.jsx';
import MaleIcon from './assets/male-icon.svg';
import FemaleIcon from './assets/female-icon.svg';

const iconStyle = css`
  width: 60px;
  height: 60px;
`;

const inputSteps = [
  { id: 1, name: 'Gender' },
  { id: 2, name: 'Age' },
  { id: 3, name: 'Height' },
  { id: 4, name: 'Weight' },
  { id: 5, name: 'Activity' },
];

const Calculator = () => {
  const [activeFormId, setActiveFormId] = useState(1);

  const nextStep = () => {
    const step =
      activeFormId < inputSteps.length ? activeFormId + 1 : activeFormId;
    setActiveFormId(step);
  };

  const prevStep = () => {
    const step = activeFormId === 1 ? activeFormId : activeFormId - 1;
    setActiveFormId(step);
  };

  return (
    <div className='container pt-3'>
      <div className='row'>
        <div className='col-md form-container d-flex flex-column justify-content-around'>
          <div className='form-header text-center py-3'>
            <h4 className='text-light py-3'>
              Calculate your Basal Metabolic Rate. Our bodies are like engines
              that are constantly running. They're always burning fuel or
              calories (even during sleep). BMR is the number of calories you
              burn each day simply by being alive...
            </h4>
          </div>
          <div className='form-header2 text-center'>
            <h6 className='text-light'>
              Our Basal Metabolic Rate (BMR) can vary based on your age, sex,
              size, and genetics.To get an accurate picture of the amount of
              calories you burn per day, start by calculating a value for your
              BMR.
            </h6>
          </div>
        </div>
        <div className='col-md'>
          <div className='row px-2'>
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

              <div className='col-md-4 col-sm-3'>
                <label htmlFor='inputCity' className='form-label'>
                  Age
                </label>
                <input type='text' className='form-control' id='inputCity' />
              </div>

              <div className='col-md-4 col-sm-3'>
                <label htmlFor='inputCity' className='form-label'>
                  Height
                </label>
                <input type='text' className='form-control' id='inputCity' />
              </div>

              <div className='col-md-4 col-sm-3'>
                <label htmlFor='inputCity' className='form-label'>
                  Weight
                </label>
                <input type='text' className='form-control' id='inputCity' />
              </div>

              <div className='col-md-12 col-sm-3'>
                <label htmlFor='inputState' className='form-label'>
                  Exercises
                </label>
                <select
                  id='inputState'
                  className='form-select'
                  defaultValue={1}
                >
                  <option value='1' disabled>
                    Choose...
                  </option>
                  <option value='2'>1</option>
                </select>
              </div>
              <button type='submit' className='btn btn-warning rounded-pill'>Calculate</button>
            </form>
          </div>
          {/* <div className='row mt-5'>
            <div className='col'>
              {activeFormId !== 1 && (
                <button className='btn btn-primary' onClick={prevStep}>
                  Prev
                </button>
              )}
            </div>
            <div className='col'>
              <button
                className='btn btn-secondary float-end'
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
