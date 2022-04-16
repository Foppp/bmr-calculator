/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import cn from 'classnames';
import MaleIcon from './assets/male-icon.svg';
import FemaleIcon from './assets/female-icon.svg';
import calculateBmr from './utils';

const iconStyle = css`
  width: 60px;
  height: 60px;
`;
const modalStyle = css`
  background-color: #0fa3b1;
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
  const validationSchema = Yup.object().shape({
    gender: Yup.string().required('Please select your gender'),
    age: Yup.string().required('Please enter your age'),
    height: Yup.string().required('Please enter your height'),
    weight: Yup.string().required('Please enter your weight'),
  });

  const formik = useFormik({
    initialValues: {
      gender: '',
      age: '',
      height: '',
      weight: '',
      activity: '',
    },
    validationSchema,
    onSubmit: (data) => {
      console.log(data);
      // calculateBmr(gender, age, height, weight, activity);
    },
  });

  const ageClassName = cn('form-control text-light', {
    'is-invalid': formik.errors.age && formik.touched.age,
  });
  const heightClassName = cn('form-control text-light', {
    'is-invalid': formik.errors.height && formik.touched.height,
  });
  const weightClassName = cn('form-control text-light', {
    'is-invalid': formik.errors.weight && formik.touched.weight,
  });

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
            <form onSubmit={formik.handleSubmit} className='needs-validation'>
              <div className='modal-body row'>
                <div className='col-12 d-flex justify-content-around mb-3'>
                  <div className='radio-button-male'>
                    <input
                      type='radio'
                      className='btn-check'
                      name='gender'
                      id='radio-button-male'
                      value={formik.values.gender}
                      onClick={(value) =>
                        formik.setFieldValue('gender', 'male')
                      }
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
                      name='gender'
                      id='radio-button-female'
                      value={formik.values.gender}
                      onClick={(value) =>
                        formik.setFieldValue('gender', 'female')
                      }
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
                {formik.errors.gender && formik.touched.gender ? (
                  <div className='text-danger'>{formik.errors.gender}</div>
                ) : null}
                <div className='form-floating col-4 my-3 ps-2' css={formStyle}>
                  <input
                    type='number'
                    className={ageClassName}
                    name='age'
                    id='floatingInput'
                    placeholder='Age'
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label htmlFor='floatingInput' className='text-light'>
                    Age
                  </label>
                  <div className='invalid-feedback'>{formik.errors.age}</div>
                </div>
                <div className='form-floating col-4 my-3 ps-2' css={formStyle}>
                  <input
                    type='number'
                    className={heightClassName}
                    id='floatingInput'
                    name='height'
                    placeholder='Height'
                    value={formik.values.height}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label htmlFor='floatingInput' className='text-light'>
                    Height
                  </label>
                  <div className='invalid-feedback'>{formik.errors.height}</div>
                </div>
                <div className='form-floating col-4 my-3 ps-2' css={formStyle}>
                  <input
                    type='number'
                    className={weightClassName}
                    id='floatingInput'
                    name='weight'
                    placeholder='weight'
                    value={formik.values.weight}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label htmlFor='floatingInput' className='text-light'>
                    Weight
                  </label>
                  <div className='invalid-feedback'>{formik.errors.weight}</div>
                </div>
                <div className='form-floating mb-3 ps-2' css={formStyle}>
                  <select
                    className='form-select text-light'
                    id='floatingSelect'
                    name='activity'
                    aria-label='Floating label select example'
                    defaultValue={formik.values.activity}
                    onChange={formik.handleChange}
                  >
                    <option value='0'>No exercise</option>
                    <option value='1'>1-3 days a week</option>
                    <option value='2'>3-5 days a week</option>
                    <option value='3'>Most days</option>
                    <option value='4'>Every day</option>
                  </select>
                  <label htmlFor='floatingSelect' className='text-light'>
                    Activity
                  </label>
                </div>
              </div>
              <div className='d-flex justify-content-between modal-footer'>
                <button
                  type='reset'
                  className='btn btn-warning rounded-pill py-2'
                  onClick={() => formik.resetForm()}
                >
                  Clear All
                </button>
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
