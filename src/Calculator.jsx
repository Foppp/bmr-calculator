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
      <h2 className='text-center text-warning mt-3'>
        Basal Metabolic Rate Calculator
      </h2>
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
            <h5 className='text-light'>
              Our Basal Metabolic Rate (BMR) can vary based on your age, sex,
              size, and genetics.To get an accurate picture of the amount of
              calories you burn per day, start by calculating a value htmlFor
              your BMR.
            </h5>
          </div>
        </div>
      </div>
      <div className='row mt-5 p-2'>
        <h4 className='text-light text-center'>
          Whether a person gains or loses weight is determined by whether they
          eat more or less calories per day than they expend through daily
          activities. Knowing how to calculate the number of calories you burn
          per day can help you maintain a healthy weight or track your exercise
          progress. There are a variety of ways to calculate how many calories
          you burn in a day. In addition, you can use this information to help
          you lose weight, gain weight, maintain your weight or just get more
          detailed information on your body's specific needs.
        </h4>
        <h5 className='text-light text-center mt-3'>
          Start a food journal. It will be useful to track your total calorie
          intake using a food journal, food journaling app or website. This will
          help you manipulate your predetermined caloric goal to result in any
          desired weight changes. It can also help keep you accountable to your
          diet plan.
        </h5>
      </div>
    </div>
  );
};

export default Calculator;
