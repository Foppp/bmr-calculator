import path from 'path';
import fs from 'fs';
import fastify from 'fastify';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';
import { renderToString } from 'react-dom/server';
import React from 'react';
import App from '../src/App.jsx';
import fastifyStatic from 'fastify-static';
// import serveStatic from 'serve-static';

const app = fastify();
const key = 'custom';
const cache = createCache({ key });
const { extractCriticalToChunks, constructStyleTagsFromChunks } =
  createEmotionServer(cache);

const html = renderToString(
  <CacheProvider value={cache}>
    <App />
  </CacheProvider>
);

const chunks = extractCriticalToChunks(html);
const styles = constructStyleTagsFromChunks(chunks);

app.register(fastifyStatic, {
  root: path.join(__dirname, '../dist'),
  prefix: '/dist/',
});

app.register(fastifyStatic, {
  root: path.join(__dirname, '../public'),
  prefix: '/public/',
  decorateReply: false,
});

app.get('*', async (req, res) => {
  const indexFile = path.resolve('./dist/index.html');
  const appHtml = renderToString(<App />);

  fs.readFile(indexFile, 'utf-8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res
      .status(200)
      .header('Content-Type', 'text/html')
      .send(
        data
          .replace('<style data-emotion=""></style>', styles)
          .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
      );
  });
});

const PORT = process.env.PORT || 5000
console.log(process.env.PORT)
const start = async () => {
  try {
    await app.listen(PORT);
    console.log(`Server running on port ${PORT}`)
  } catch (err) {
    console.log(err)
    app.log.error(err)
    process.exit(1)
  }
}
start();
