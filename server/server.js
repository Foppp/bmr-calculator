
import path from 'path';
import fs from 'fs';
import fastify from 'fastify';
import { CacheProvider } from '@emotion/react';
import { renderToString } from 'react-dom/server';
import React from 'react';
import App from '../src/App.jsx';
import fastifyStatic from 'fastify-static';

const app = fastify({ logger: true });
const PORT = process.env.PORT || 5000;
const address = '0.0.0.0';
const bootstrapSDNcss = '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">';
const bootstrapSDNscript = '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>';

const setupViews = (app) => {
  app.register(fastifyStatic, {
    root: path.join(__dirname, '../public'),
    prefix: '/public/',
  });
};

const start = async (app) => {
  setupViews(app);
  app.get('*', async (req, res) => {
    const appHtml = renderToString(<App />);
    return res.status(200).header('Content-Type', 'text/html').send(`
      <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
              ${bootstrapSDNcss}
            <title>WP-React-SSR</title>
          </head>
          <body>
            <div id="root">${appHtml}</div>
            <script src="./main.js"></script>
            ${bootstrapSDNscript}
          </body>
        </html>
    `);
  });

  try {
    await app.listen(PORT, address);
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.log(err);
    app.log.error(err);
    process.exit(1);
  }
};

start(app);
