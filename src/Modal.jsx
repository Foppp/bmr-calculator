/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/react';
import MaleIcon from './assets/male-icon.svg';
import FemaleIcon from './assets/female-icon.svg';

const iconStyle = css`
  width: 60px;
  height: 60px;
`;
const modalStyle = css`
  background-color: #0FA3B1;
`;

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

const Modal = () => {
  return (
    <>
      <button
        type='button'
        className='btn btn-warning mt-3 px-5 shadow-sm rounded-pill'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
      >
        Calculate your BMR
      </button>
      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg'>
          <div className='modal-content' css={modalStyle}>
            <div className='modal-header'>
              <h5 className='modal-title text-light' id='exampleModalLabel'>
                Calculate your Basal Metabolic Rate
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <form>
              <div className='modal-body row'>
                <div className='col-12 d-flex justify-content-around mb-3'>
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
                        <img
                          css={iconStyle}
                          src={FemaleIcon}
                          alt='femaleIcon'
                        />
                      </div>
                      <p className='mt-2'>FEMALE</p>
                    </label>
                  </div>
                </div>

                <div className='form-floating col-4 my-3 ps-2' css={formStyle}>
                  <input
                    type='text'
                    className='form-control'
                    id='floatingInput'
                    placeholder='Age'
                  />
                  <label htmlFor='floatingInput' className='text-light'>Age</label>
                </div>

                <div className='form-floating col-4 my-3 ps-2' css={formStyle}>
                  <input
                    type='text'
                    className='form-control'
                    id='floatingInput'
                    placeholder='Height'
                  />
                  <label htmlFor='floatingInput' className='text-light'>Height</label>
                </div>

                <div className='form-floating col-4 my-3 ps-2' css={formStyle}>
                  <input
                    type='text'
                    className='form-control'
                    id='floatingInput'
                    placeholder='weight'
                  />
                  <label htmlFor='floatingInput' className='text-light'>Weight</label>
                </div>

                <div className='form-floating mb-3 ps-2' css={formStyle}>
                  <select
                    className='form-select text-light'
                    id='floatingSelect'
                    defaultValue={1}
                    aria-label='Floating label select example'
                  >
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                  </select>
                  <label htmlFor='floatingSelect' className='text-light'>Activity</label>
                </div>
              </div>
              <div className='modal-footer'>
                <button
                  type='submit'
                  className='btn btn-warning rounded-pill py-2'
                >
                  Calculate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
