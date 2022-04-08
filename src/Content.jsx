import React from 'react';
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import FoodFruits from './assets/food1_shadow.png';
import MetaRateIcon from './assets/metaRate.svg';
import ActivityIcon from './assets/Dumbbell.svg';
import FoodIcon from './assets/Lemonade.svg';
import JournalIcon from './assets/Documents.svg';
import GainWeightIcon from './assets/ProgressUp.svg';
import LoseWeightIcon from './assets/ProgressDown.svg';

const trackingIn = keyframes`
  0% {
    letter-spacing: 6.8em;
    opacity: 0;
  }
  100% {
    letter-spacing: normal;
    opacity: 25%;
  }
`;
const getStarted = css`
  background-color: #72C166;
`;
const iconAbout = css`
  width: 75px;
  height: 75px;
  background-color: #D5D8A3;
  border-radius: 25%;
`;
const backText = css`
  color: transparent;
  font-size: calc(4vw + 2vh + 2vmin);
  -webkit-text-stroke: 1px #fafaf0;
  animation: ${trackingIn} 1.8s both;
`;

const titleDescription = css`
  color: #FFF9D4;
  text-shadow: 2px 5px #0000;
`;

const iconDescription = css`
  color: #ffff;
  justify-content: center;
`;

const Content = () => {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center'>
      <div className='container justify-content-center text-center'>
        {/* <h1 css={backText}>BasalMetabolicRate</h1> */}
        <div className='col'>
          <div className='row mt-5 py-5 align-items-center justify-content-center'>
            <div className='col-md-4'>
              <img className='img-fluid' src={FoodFruits} alt='food1' />
            </div>
            <div className='col-md-8'>
              <h1 className='text-white mt-2 title-text'>
                Find out your daily calorie need and choose the right meal
              </h1>
              <h5 className='mt-2' css={titleDescription}>
                Our bodies are like engines that are constantly running. They're
                always burning fuel or calories (even during sleep). BMR is the
                number of calories you burn each day simply by being alive.
              </h5>
              <div className='col'>
                <button
                  className='btn mt-3 px-5 shadow-sm rounded-pill'
                  css={getStarted}
                >
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
          <div className='row align-items-center justify-content-center mb-5 mt-5'>

            <div className='row'>

              <div className='col-sm mb-2 p-3'>
                <div className='row justify-content-center p-2'>
                  <img className="img-thumbnail shadow-sm" src={MetaRateIcon} css={iconAbout} alt='metaRate' />
                </div>
                <div className='row mt-3 fs-5' css={iconDescription}>
                  Calculate your Basal Metabolic Rate
                </div>
              </div> 

              <div className='col-sm mb-2 p-3'>
                <div className='row justify-content-center p-2'>
                  <img className="img-thumbnail shadow-sm" src={ActivityIcon} css={iconAbout} alt='metaRate' />
                </div>
                <div className='row mt-3 fs-5' css={iconDescription}>
                  Adjust your BMR to include physical activity
                </div>
              </div>

              <div className='col-sm mb-2 p-3'>
                <div className='row justify-content-center p-2'>
                  <img className="img-thumbnail shadow-sm" src={FoodIcon} css={iconAbout} alt='metaRate' />
                </div>
                <div className='row mt-3 fs-5' css={iconDescription}>
                  Choose your food based on daily calorie needs
                </div>
              </div>

            </div>

            <div className='row'>

              <div className='col-sm mb-2 p-3'>
                <div className='row justify-content-center p-2'>
                  <img className="img-thumbnail shadow-sm" src={JournalIcon} css={iconAbout} alt='metaRate' />
                </div>
                <div className='row mt-3 fs-5' css={iconDescription}>
                  Start a food journal
                </div>
              </div>

              <div className='col-sm mb-2 p-3'>
                <div className='row justify-content-center p-2'>
                  <img className="img-thumbnail shadow-sm" src={GainWeightIcon} css={iconAbout} alt='metaRate' />
                </div>
                <div className='row mt-3 fs-5' css={iconDescription}>
                  Cut calories to lose weight
                </div>
              </div>

              <div className='col-sm mb-2 p-3'>
                <div className='row justify-content-center p-2'>
                  <img className="img-thumbnail shadow-sm" src={LoseWeightIcon} css={iconAbout} alt='metaRate' />
                </div>
                <div className='row mt-3 fs-5' css={iconDescription}>
                  Increase calories to gain weight
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
