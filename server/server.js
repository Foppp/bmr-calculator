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

const app = fastify();

// const key = 'custom';
// const cache = createCache({ key });
// const { extractCriticalToChunks, constructStyleTagsFromChunks } =
//   createEmotionServer(cache);

// const html = renderToString(
//   <CacheProvider value={cache}>
//     <App />
//   </CacheProvider>
// );

// const chunks = extractCriticalToChunks(html);
// const styles = constructStyleTagsFromChunks(chunks);

const PORT = process.env.PORT || 5000;

const start = async () => {
  app.register(fastifyStatic, {
    root: path.join(__dirname, '../public'),
    prefix: '/public/',
  });

  app.register(fastifyStatic, {
    root: path.join(__dirname, '../dist'),
    prefix: '/assets/',
    decorateReply: false,
  });

  app.get('*', async (req, res) => {
    // const indexFile = path.resolve('./dist/index.html');
    const appHtml = renderToString(<App />);

    // fs.readFile(indexFile, 'utf-8', (err, data) => {
    //   if (err) {
    //     console.error('Something went wrong:', err);
    //     return res.status(500).send('Oops, better luck next time!');
    //   }

    return res.status(200).header('Content-Type', 'text/html').send(`
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <title>WP-React-SSR</title>
</head>
<body>
  <div id="root">${appHtml}</div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>
      `);
  });

  try {
    await app.listen(PORT, '0.0.0.0');
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.log(err);
    app.log.error(err);
    process.exit(1);
  }
};

start();
