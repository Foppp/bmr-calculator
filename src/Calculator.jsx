/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx, css } from '@emotion/react';
import AgeInput from './components/AgeInput.jsx';
import HeigthInput from './components/HeigthInput.jsx';
import WeightInput from './components/WeightInput.jsx';

const inputSteps = [
  { id: 1, name: 'Age', active: true },
  { id: 2, name: 'Height', active: false },
  { id: 3, name: 'Weight', active: false },
];

const forms = {
  1: AgeInput,
  2: HeigthInput,
  3: WeightInput,
};

const Calculator = () => {
  const [activeFormId, setActiveFormId] = useState(1);
  const FormComponent = forms[activeFormId];

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
    <div className='container p-5 shadow-lg' >
                <FormComponent />

      {/* <div className='col'>
        <div className='row'>
          <FormComponent />
        </div>
        <div className='row mt-5'>
          <div className='col'>
            {activeFormId !== 1 && (
              <button className='btn btn-primary' onClick={prevStep}>
                Prev
              </button>
            )}
          </div>
          <div className='col'>
            <button className='btn btn-secondary float-end' onClick={nextStep}>
              Next
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Calculator;
