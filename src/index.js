import React from 'react';
import { hydrate } from 'react-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
// import './scss/main.css';
// import 'bootstrap/dist/js/bootstrap';
const cache = createCache({key: 'my-prefix-key'});

hydrate(
  <CacheProvider value={cache}>
    <App />
  </CacheProvider>,
  document.getElementById('root')
);