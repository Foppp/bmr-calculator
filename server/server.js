import path from 'path';
import fs from 'fs';
import fastify from 'fastify';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import React from 'react';
import App from '../src/App.jsx';
import fastifyStatic from 'fastify-static';

const app = fastify({ logger: true });
const PORT = process.env.PORT || 5000;
const address = '0.0.0.0';
const bootstrapSDNcss =
  '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">';
const bootstrapSDNscript =
  '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>';

const setupViews = (app) => {
  app.register(fastifyStatic, {
    root: path.join(__dirname, '../dist/'),
    prefix: '/dist/',
  });

  app.register(fastifyStatic, {
    root: path.join(__dirname, '../dist/assets'),
    prefix: '/assets/',
    decorateReply: false,
  });
};

const start = async (app) => {
  setupViews(app);
  app.get('*', async (req, res) => {
    const indexFile = path.resolve('./dist/index.html');
    const appHtml = renderToString(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    );
    fs.readFile(indexFile, 'utf-8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
      return res
        .status(200)
        .header('Content-Type', 'text/html')
        .send(
          data.replace(
            '<div id="root"></div>',
            `<div id="root">${appHtml}</div>`
          )
        );
    });
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
