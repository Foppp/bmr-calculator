import React from 'react';
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import Navbar from './Navbar.jsx';
import Content from './Content.jsx';
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
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='1080' preserveAspectRatio='none' viewBox='0 0 1440 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='1080' x='0' y='0' fill='rgba(47%2c 138%2c 195%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c704.977C127.469%2c731.442%2c240.106%2c612.162%2c338.998%2c527.492C428.1%2c451.204%2c487.964%2c351.797%2c536.973%2c245.227C586.097%2c138.406%2c644.019%2c26.097%2c622.755%2c-89.539C601.732%2c-203.863%2c494.691%2c-275.151%2c424.275%2c-367.637C348.175%2c-467.588%2c315.333%2c-629.536%2c192.298%2c-654.908C67.187%2c-680.707%2c-23.485%2c-531.503%2c-142.251%2c-484.462C-245.988%2c-443.374%2c-384.623%2c-480.912%2c-458.378%2c-397.187C-532.123%2c-313.473%2c-485.933%2c-182.528%2c-505.054%2c-72.616C-524.946%2c41.728%2c-626.272%2c158.568%2c-573.001%2c261.681C-519.236%2c365.749%2c-351.83%2c331.621%2c-259.183%2c403.296C-152.157%2c486.096%2c-132.491%2c677.469%2c0%2c704.977' fill='%232c80b5'%3e%3c/path%3e%3cpath d='M1440 1672.438C1546.6970000000001 1649.531 1613.8 1551.542 1700.1979999999999 1484.876 1777.996 1424.847 1863.424 1378.926 1922.326 1300.271 1992.6660000000002 1206.341 2088.4610000000002 1105.319 2071.373 989.222 2054.282 873.108 1917.65 821.377 1839.0140000000001 734.252 1762.412 649.38 1723.926 518.71 1615.094 483.68600000000004 1506.022 448.58500000000004 1392.104 512.51 1286.247 556.364 1189.991 596.241 1102.002 649.347 1031.051 725.644 958.1600000000001 804.028 903.812 895.696 874.862 998.745 842.827 1112.774 816.54 1234.961 856.656 1346.404 898.107 1461.555 989.679 1554.7730000000001 1096.51 1614.481 1199.964 1672.3020000000001 1324.124 1697.315 1440 1672.438' fill='%233593ce'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Proxima Nova';
  font-style: normal;
`;

const App = () => {
  return (
    <div className='main'>
      <div css={vectorCss} className="container-fluid">
        <Navbar />
        <Content />
        <Footer />
      </div>

    </div>
  );
};

export default App;
