import React from 'react';
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Main from './Main.jsx';
import About from './About.jsx';
import Calculator from './Calculator.jsx';
import Footer from './Footer.jsx';

// const bounce = keyframes`
//   from, 20%, 53%, 80%, to {
//     transform: translate3d(0,0,0);
//   }

//   40%, 43% {
//     transform: translate3d(0, -30px, 0);
//   }

//   70% {
//     transform: translate3d(0, -15px, 0);
//   }

//   90% {
//     transform: translate3d(0,-4px,0);
//   }
// `;

// const cssStyle = css`
// animation: ${bounce} 1s ease infinite;
// color: green;
// `;

const vectorCss = css`
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='1080' preserveAspectRatio='none' viewBox='0 0 1440 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1001%26quot%3b)' fill='none'%3e%3crect width='1440' height='1080' x='0' y='0' fill='rgba(15%2c 163%2c 177%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c508.402C95.352%2c488.795%2c183.008%2c460.726%2c274.204%2c426.67C391.747%2c382.775%2c554.304%2c390.882%2c612.443%2c279.693C669.944%2c169.725%2c578.027%2c40.055%2c537.729%2c-77.314C504.38%2c-174.443%2c449.593%2c-256.076%2c398.004%2c-344.872C333.101%2c-456.584%2c319.118%2c-628.271%2c195.608%2c-666.18C72.478%2c-703.972%2c-34.947%2c-569.744%2c-150.716%2c-513.292C-245.096%2c-467.27%2c-339.375%2c-430.654%2c-421.521%2c-365.25C-519.547%2c-287.202%2c-658.579%2c-221.25%2c-673.735%2c-96.868C-688.93%2c27.828%2c-548.18%2c112.281%2c-493.49%2c225.369C-440.464%2c335.015%2c-463.361%2c496.011%2c-357.709%2c556.606C-251.185%2c617.701%2c-120.284%2c533.135%2c0%2c508.402' fill='%230d919e'%3e%3c/path%3e%3cpath d='M1440 1617.525C1539.987 1619.2069999999999 1615.3609999999999 1534.405 1708.29 1497.467 1829.6100000000001 1449.2440000000001 2007.952 1482.633 2069.297 1367.3899999999999 2129.529 1254.239 2020.661 1121.873 1971.1660000000002 1003.63 1932.641 911.593 1882.388 828.54 1813.522 756.342 1747.397 687.017 1668.396 637.567 1582.17 595.812 1480.632 546.642 1379.05 476.36800000000005 1267.298 491.832 1151.019 507.922 1044.805 583.107 977.74 679.45 913.345 771.9580000000001 940.607 895.207 910.831 1003.917 875.347 1133.468 721.509 1260.867 786.256 1378.555 852.897 1499.687 1047.598 1441.074 1177.4479999999999 1488.539 1270.923 1522.708 1340.49 1615.851 1440 1617.525' fill='%2311b5c5'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1001'%3e%3crect width='1440' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Proxima Nova';
  font-style: normal;
`;

const App = () => {
  return (
    <div css={vectorCss} className='container-fluid px-0'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
    </div>
  );
};

export default App;
