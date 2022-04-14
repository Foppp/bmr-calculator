/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/react';
import AgeInput from './AgeInput.jsx';
import HeigthInput from './HeigthInput.jsx';
import WeightInput from './WeightInput.jsx';
import GenderInput from './GenderInput.jsx';
import ActivityInput from './ActivityInput.jsx';

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

const forms = {
  1: GenderInput,
  2: AgeInput,
  3: HeigthInput,
  4: WeightInput,
  5: ActivityInput,
};

const FormComponent = ({ activeFormId, prevStep, nextStep }) => {
  const Form = forms[activeFormId];

  return (
    <form className='row g-3 my-5'>
      <Form />
      <div className="col">
          {activeFormId !== 1 && (
              <button className='btn btn-primary' onClick={prevStep}>
                Prev
              </button>
            )}
          </div>
          <div className="col">
          <button className='btn btn-secondary float-end' onClick={nextStep}>
              Next
            </button>
          </div>
    </form>
  );
};

export default FormComponent;
