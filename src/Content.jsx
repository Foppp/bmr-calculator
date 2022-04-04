import React from 'react';
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';

const trackingIn = keyframes`
  0% {
    letter-spacing: 3.8em;
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
            <h1 css={backText}>BMR</h1>
            <div className='col-sm-6 col-md-6 col-lg-4'>
              <img
                className='img-fluid'
                src='../public/food1_shadow.png'
                alt='food1'
              />
            </div>
            <div className='col-sm-6 col-md-6 col-lg-8'>
              <h1 className='text-white mt-2'>
                Find out your daily calorie need and choose the right meal
              </h1>
              <h5 className='mt-2' style={{ color: '#82BADDFC' }}>
                Our bodies are like engines that are constantly running. They're
                always burning fuel or calories (even during sleep). BMR is the
                number of calories you burn each day simply by being alive.
              </h5>
              <div className='col'>
                <button className='btn btn-warning mt-3 px-5 shadow-sm rounded-pill'>
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className='row'>fddd</div>
          <div className='row align-items-center justify-content-center mb-5'>
            <div className='row p-3'>
              <div className='col-sm mb-2 p-3'>
                <div className='row advice-icon justify-content-center p-2'>
                  <svg
                    width='60'
                    height='60'
                    viewBox='0 0 60 60'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='Combo Chart' clipPath='url(#clip0_202_187)'>
                      <path
                        id='Vector'
                        d='M22.8285 26.2817L37.1722 13.7192'
                        stroke='white'
                        strokeWidth='2.50185'
                        strokeMiterlimit='10'
                      />
                      <path
                        id='Vector_2'
                        d='M7.76587 17.5322L17.2346 26.2197'
                        stroke='white'
                        strokeWidth='2.50185'
                        strokeMiterlimit='10'
                      />
                      <path
                        id='Vector_3'
                        d='M40.0004 15.0007C42.0714 15.0007 43.7504 13.3218 43.7504 11.2507C43.7504 9.17966 42.0714 7.50073 40.0004 7.50073C37.9293 7.50073 36.2504 9.17966 36.2504 11.2507C36.2504 13.3218 37.9293 15.0007 40.0004 15.0007Z'
                        stroke='white'
                        strokeWidth='2.50185'
                        strokeMiterlimit='10'
                      />
                      <path
                        id='Vector_4'
                        d='M5.00055 18.7505C7.07162 18.7505 8.75055 17.0716 8.75055 15.0005C8.75055 12.9294 7.07162 11.2505 5.00055 11.2505C2.92948 11.2505 1.25055 12.9294 1.25055 15.0005C1.25055 17.0716 2.92948 18.7505 5.00055 18.7505Z'
                        stroke='white'
                        strokeWidth='2.50185'
                        strokeMiterlimit='10'
                      />
                      <path
                        id='Vector_5'
                        d='M20.0004 32.5005C22.0715 32.5005 23.7504 30.8216 23.7504 28.7505C23.7504 26.6794 22.0715 25.0005 20.0004 25.0005C17.9293 25.0005 16.2504 26.6794 16.2504 28.7505C16.2504 30.8216 17.9293 32.5005 20.0004 32.5005Z'
                        stroke='white'
                        strokeWidth='2.50185'
                        strokeMiterlimit='10'
                      />
                      <path
                        id='Vector_6'
                        d='M43.0003 13.501L52.0003 20.251'
                        stroke='white'
                        strokeWidth='2.50185'
                        strokeMiterlimit='10'
                      />
                      <path
                        id='Vector_7'
                        d='M55.0002 26.251C57.0713 26.251 58.7502 24.572 58.7502 22.501C58.7502 20.4299 57.0713 18.751 55.0002 18.751C52.9292 18.751 51.2502 20.4299 51.2502 22.501C51.2502 24.572 52.9292 26.251 55.0002 26.251Z'
                        stroke='white'
                        strokeWidth='2.50185'
                        strokeMiterlimit='10'
                      />
                      <path
                        id='Vector_8'
                        d='M55.0003 32.5005V52.5005H5.00031V25.0005'
                        stroke='white'
                        strokeWidth='2.50185'
                        strokeMiterlimit='10'
                      />
                      <path
                        id='Vector_9'
                        d='M20.0002 52.5005V38.7505'
                        stroke='white'
                        strokeWidth='2.50185'
                        strokeMiterlimit='10'
                      />
                      <path
                        id='Vector_10'
                        d='M40.0005 52.5007V21.2507'
                        stroke='white'
                        strokeWidth='2.50185'
                        strokeMiterlimit='10'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_202_187'>
                        <rect width='60' height='60' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className='row advice-text justify-content-center'>
                  Calculate your Basal Metabolic Rate
                </div>
              </div>
              <div className='col-sm mb-2 p-3'>
                <div className='row advice-icon justify-content-center p-2'>
                  <svg
                    width='60'
                    height='60'
                    viewBox='0 0 60 60'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='Dumbbell'>
                      <g id='Group'>
                        <path
                          id='Vector'
                          d='M33.75 52.715C33.75 51.7775 33.3775 50.8775 32.715 50.215L9.785 27.285C9.1225 26.6225 8.2225 26.25 7.285 26.25C5.3325 26.25 3.75 27.8325 3.75 29.785C3.75 30.7225 4.1225 31.6225 4.785 32.285L27.7137 55.2138C28.3762 55.8763 29.2762 56.2488 30.2137 56.2488C32.1675 56.25 33.75 54.6675 33.75 52.715Z'
                          stroke='white'
                          strokeWidth='2.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          id='Vector_2'
                          d='M9.785 37.285C9.1225 36.6225 8.2225 36.25 7.285 36.25C5.3325 36.25 3.75 37.8325 3.75 39.785C3.75 40.7225 4.1225 41.6225 4.785 42.285L17.7137 55.2138C18.3762 55.8763 19.2762 56.2488 20.2137 56.2488C22.1675 56.25 23.75 54.6675 23.75 52.715C23.75 51.7775 23.3775 50.8775 22.715 50.215'
                          stroke='white'
                          strokeWidth='2.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          id='Vector_3'
                          d='M8.75 46.25L5 50L10 55L13.75 51.25'
                          stroke='white'
                          strokeWidth='2.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          id='Vector_4'
                          d='M26.25 7.285C26.25 8.2225 26.6225 9.1225 27.285 9.785L50.2138 32.7137C50.8763 33.3762 51.7763 33.7488 52.7138 33.7488C54.6675 33.75 56.25 32.1675 56.25 30.215C56.25 29.2775 55.8775 28.3775 55.215 27.715L32.285 4.785C31.6225 4.1225 30.7225 3.75 29.785 3.75C27.8325 3.75 26.25 5.3325 26.25 7.285V7.285Z'
                          stroke='white'
                          strokeWidth='2.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          id='Vector_5'
                          d='M50.215 22.715C50.8775 23.3775 51.7775 23.75 52.715 23.75C54.6675 23.75 56.25 22.1675 56.25 20.215C56.25 19.2775 55.8775 18.3775 55.215 17.715L42.285 4.785C41.6225 4.1225 40.7225 3.75 39.785 3.75C37.8325 3.75 36.25 5.3325 36.25 7.285C36.25 8.2225 36.6225 9.1225 37.285 9.785'
                          stroke='white'
                          strokeWidth='2.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          id='Vector_6'
                          d='M51.25 13.75L55 10L50 5L46.25 8.75'
                          stroke='white'
                          strokeWidth='2.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          id='Vector_7'
                          d='M18.75 36.25L36.25 18.75'
                          stroke='white'
                          strokeWidth='2.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          id='Vector_8'
                          d='M23.75 41.25L41.25 23.75'
                          stroke='white'
                          strokeWidth='2.5'
                          strokeMiterlimit='10'
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className='row advice-text justify-content-center'>
                  Adjust your BMR to include physical activity
                </div>
              </div>
              <div className='col-sm mb-2 p-3'>
                <div className='row advice-icon justify-content-center p-2'>
                  <svg
                    width='60'
                    height='60'
                    viewBox='0 0 60 60'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='Lemonade' clipPath='url(#clip0_203_6463)'>
                      <g id='Group'>
                        <path
                          id='Vector'
                          d='M22.9844 24.9999L18.6094 5.96863C18.5458 5.69311 18.3906 5.4473 18.1692 5.27135C17.9479 5.0954 17.6734 4.9997 17.3906 4.99988H10'
                          stroke='white'
                          strokeWidth='2.5125'
                          strokeMiterlimit='10'
                        />
                        <path
                          id='Vector_2'
                          d='M27.0469 24.9999L33.4844 3.39052C33.5619 3.13211 33.721 2.90573 33.9379 2.7452C34.1547 2.58467 34.4177 2.49862 34.6875 2.49989H43.75'
                          stroke='white'
                          strokeWidth='2.5125'
                          strokeMiterlimit='10'
                        />
                        <path
                          id='Vector_3'
                          d='M26.2583 34.9952L31.2633 29.9902L36.2628 34.9897L31.2578 39.9947L26.2583 34.9952Z'
                          stroke='white'
                          strokeWidth='2.5125'
                          strokeMiterlimit='10'
                        />
                        <path
                          id='Vector_4'
                          d='M22.5 46.2499H30V53.7499H22.5V46.2499Z'
                          stroke='white'
                          strokeWidth='2.5125'
                          strokeMiterlimit='10'
                        />
                        <path
                          id='Vector_5'
                          d='M19.0156 58.7499C18.0879 58.7511 17.1926 58.4083 16.5029 57.7878C15.8131 57.1673 15.3779 56.3132 15.2813 55.3905L11.125 16.2499H46.375L42.2187 55.3905C42.1221 56.3132 41.6869 57.1673 40.9971 57.7878C40.3074 58.4083 39.4121 58.7511 38.4844 58.7499H19.0156Z'
                          stroke='white'
                          strokeWidth='2.5125'
                          strokeMiterlimit='10'
                        />
                        <path
                          id='Vector_6'
                          d='M12.0466 24.9999H45.4529'
                          stroke='white'
                          strokeWidth='2.5125'
                          strokeMiterlimit='10'
                        />
                        <path
                          id='Vector_7'
                          d='M45.5781 23.7186L46.25 23.7499C47.7334 23.7499 49.1834 23.31 50.4168 22.4859C51.6501 21.6618 52.6114 20.4905 53.1791 19.12C53.7468 17.7496 53.8953 16.2416 53.6059 14.7867C53.3165 13.3318 52.6022 11.9955 51.5533 10.9466C50.5044 9.89769 49.168 9.18338 47.7132 8.89399C46.2583 8.6046 44.7503 8.75313 43.3799 9.32078C42.0094 9.88844 40.8381 10.8497 40.014 12.0831C39.1899 13.3165 38.75 14.7665 38.75 16.2499'
                          stroke='white'
                          strokeWidth='2.5125'
                          strokeMiterlimit='10'
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id='clip0_203_6463'>
                        <rect width='60' height='60' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className='row advice-text justify-content-center'>
                  Choose your food based on daily calorie needs
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm mb-2 p-3'>
                <div className='row advice-icon justify-content-center p-2'>
                  <svg
                    width='60'
                    height='60'
                    viewBox='0 0 60 60'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='Documents'>
                      <path
                        id='Vector'
                        d='M13.7498 35.0002H36.2498'
                        stroke='white'
                        strokeWidth='2.50185'
                        strokeMiterlimit='10'
                      />
                      <path
                        id='Vector_2'
                        d='M13.7498 27.5H41.2498'
                        stroke='white'
                        strokeWidth='2.50185'
                        strokeMiterlimit='10'
                      />
                      <path
                        id='Vector_3'
                        d='M13.7498 19.9995H41.2498'
                        stroke='white'
                        strokeWidth='2.50185'
                        strokeMiterlimit='10'
                      />
                      <path
                        id='Vector_4'
                        d='M46.2496 12.5H7.49963V55H46.2496V12.5Z'
                        stroke='white'
                        strokeWidth='2.50185'
                        strokeMiterlimit='10'
                      />
                      <path
                        id='Vector_5'
                        d='M13.7498 12.5005V6.25049H52.4998V48.7505H46.2498'
                        stroke='white'
                        strokeWidth='2.50185'
                        strokeMiterlimit='10'
                      />
                    </g>
                  </svg>
                </div>
                <div className='row advice-text justify-content-center p-2'>
                  Start a food journal
                </div>
              </div>
              <div className='col-sm mb-2 p-3'>
                <div className='row advice-icon justify-content-center p-2'>
                  <svg
                    width='60'
                    height='61'
                    viewBox='0 0 60 61'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='Business progress'>
                      <g id='Group'>
                        <path
                          id='Vector'
                          d='M44.1155 44.3841C44.604 44.8726 45.3961 44.8726 45.8846 44.3841L53.8454 36.4232C54.3339 35.9347 54.3339 35.1427 53.8454 34.6542C53.3569 34.1656 52.5649 34.1656 52.0764 34.6542L45.0001 41.7304L37.9238 34.6542C37.4353 34.1656 36.6432 34.1656 36.1547 34.6542C35.6662 35.1427 35.6662 35.9347 36.1547 36.4232L44.1155 44.3841ZM43.7491 7.24951V43.4995H46.251V7.24951H43.7491Z'
                          fill='white'
                        />
                        <path
                          id='Vector_2'
                          d='M18.7501 14.7498C22.2019 14.7498 25.0001 11.9515 25.0001 8.49976C25.0001 5.04798 22.2019 2.24976 18.7501 2.24976C15.2983 2.24976 12.5001 5.04798 12.5001 8.49976C12.5001 11.9515 15.2983 14.7498 18.7501 14.7498Z'
                          stroke='white'
                          strokeWidth='2.50185'
                          strokeMiterlimit='10'
                        />
                        <path
                          id='Vector_3'
                          d='M18.7501 59.7498V42.2498'
                          stroke='white'
                          strokeWidth='2.50185'
                          strokeMiterlimit='10'
                        />
                        <path
                          id='Vector_4'
                          d='M12.5 39.7502H11.25C10.2554 39.7502 9.30161 39.3552 8.59835 38.6519C7.89509 37.9486 7.5 36.9948 7.5 36.0002V26.0002C7.5 24.3426 8.15848 22.7529 9.33058 21.5808C10.5027 20.4087 12.0924 19.7502 13.75 19.7502H23.75C24.5708 19.7502 25.3835 19.9119 26.1418 20.226C26.9001 20.5401 27.5891 21.0005 28.1694 21.5808C28.7498 22.1612 29.2102 22.8502 29.5242 23.6085C29.8383 24.3668 30 25.1795 30 26.0002V36.0002C30 36.9948 29.6049 37.9486 28.9017 38.6519C28.1984 39.3552 27.2446 39.7502 26.25 39.7502H25'
                          stroke='white'
                          strokeWidth='2.50185'
                          strokeMiterlimit='10'
                        />
                        <path
                          id='Vector_5'
                          d='M12.5001 27.2498V59.7498H25.0001V27.2498'
                          stroke='white'
                          strokeWidth='2.50185'
                          strokeMiterlimit='10'
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className='row advice-text justify-content-center p-2'>
                  Cut calories to lose weight
                </div>
              </div>
              <div className='col-sm mb-2 p-3'>
                <div className='row advice-icon justify-content-center p-2'>
                  <svg
                    width='60'
                    height='61'
                    viewBox='0 0 60 61'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='Business progress'>
                      <g id='Group'>
                        <path
                          id='Vector'
                          d='M45.0001 7.24951V43.4995'
                          stroke='white'
                          strokeWidth='2.50185'
                          strokeMiterlimit='10'
                        />
                        <path
                          id='Vector_2'
                          d='M54.4998 16.7495L44.9998 7.24951L35.4998 16.7495'
                          stroke='white'
                          strokeWidth='2.50185'
                          strokeMiterlimit='10'
                        />
                        <path
                          id='Vector_3'
                          d='M18.7501 14.7498C22.2019 14.7498 25.0001 11.9515 25.0001 8.49976C25.0001 5.04798 22.2019 2.24976 18.7501 2.24976C15.2983 2.24976 12.5001 5.04798 12.5001 8.49976C12.5001 11.9515 15.2983 14.7498 18.7501 14.7498Z'
                          stroke='white'
                          strokeWidth='2.50185'
                          strokeMiterlimit='10'
                        />
                        <path
                          id='Vector_4'
                          d='M18.7501 59.7498V42.2498'
                          stroke='white'
                          strokeWidth='2.50185'
                          strokeMiterlimit='10'
                        />
                        <path
                          id='Vector_5'
                          d='M12.5 39.7502H11.25C10.2554 39.7502 9.30161 39.3552 8.59835 38.6519C7.89509 37.9486 7.5 36.9948 7.5 36.0002V26.0002C7.5 24.3426 8.15848 22.7529 9.33058 21.5808C10.5027 20.4087 12.0924 19.7502 13.75 19.7502H23.75C24.5708 19.7502 25.3835 19.9119 26.1418 20.226C26.9001 20.5401 27.5891 21.0005 28.1694 21.5808C28.7498 22.1612 29.2102 22.8502 29.5242 23.6085C29.8383 24.3668 30 25.1795 30 26.0002V36.0002C30 36.9948 29.6049 37.9486 28.9017 38.6519C28.1984 39.3552 27.2446 39.7502 26.25 39.7502H25'
                          stroke='white'
                          strokeWidth='2.50185'
                          strokeMiterlimit='10'
                        />
                        <path
                          id='Vector_6'
                          d='M12.5001 27.2498V59.7498H25.0001V27.2498'
                          stroke='white'
                          strokeWidth='2.50185'
                          strokeMiterlimit='10'
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className='row advice-text justify-content-center'>
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
