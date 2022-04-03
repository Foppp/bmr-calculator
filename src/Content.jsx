import React from 'react';
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';

const data = [
  { id: 1, name: 'first', img: 'https://www.pngmart.com/files/7/Fresh-Healthy-Food-PNG-Transparent.png' },
  { id: 2, name: 'second', img: 'https://www.pngmart.com/files/7/Fresh-Healthy-Food-PNG-Transparent.png' },
]
const trackingIn = keyframes`
  0% {
    letter-spacing: 0.4em;
    opacity: 0;
  }
  40% {
    opacity: 10%;
  }
  100% {
    letter-spacing: normal;
    opacity: 25%;
  }
`;

const backText = css`
  position: absolute;
  z-index: -1;
  color: transparent;
  font-size: calc(10vw + 4vh + 4vmin);
  -webkit-text-stroke: 1px #fafaf0;
  animation: ${trackingIn} 1.8s cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;

const Content = () => {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center'>
      <div className='container justify-content-center text-center'>
        <div className='col mt-5'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-sm-6 col-md-6 col-lg-4'>
              <img
                className='img-fluid'
                src='../public/food1_shadow.png'
                alt='food1'
              />
            </div>
            <div className='col-sm-6 col-md-6 col-lg-8'>
              <h1 className='text-white'>
               Find out your daily calorie need and choose the right meal
              </h1>
              <h5 className='text-dark'>
                Our bodies are like engines that are constantly running. They're
                always burning fuel or calories (even during sleep). BMR is the
                number of calories you burn each day simply by being alive.
              </h5>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <button className='btn btn-warning px-5 py-2 mt-3 shadow-sm rounded-pill'>
                Get Started
              </button>
            </div>
          </div>
          <div className='row align-items-center justify-content-center mt-5'>
            <div className='col'>
              <h6>
                Calculate your Basal Metabolic Rate - Adjust your BMR to include
                physical activity - Choose your food based on daily calorie
                needs - Start a food journal - Cut calories to lose weight -
                Increase calories to gain weight{' '}
              </h6>
            </div>
            <div className='col'>learn more</div>
            <div>
              {data.map(({id, name, img}) => {
                return (
                  <div key={id}>
                    <p>{name}</p>
                    <img src={img} alt={name} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
