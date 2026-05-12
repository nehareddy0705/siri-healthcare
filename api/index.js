import { Readable } from 'node:stream';
import app from '../dist/server/server.js';

export const config = {
  runtime: 'nodejs',
};

export default async function (req, res) {
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
  const url = new URL(req.url, `${protocol}://${host}`);

  let body = undefined;
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    body = new ReadableStream({
      async start(controller) {
        for await (const chunk of req) {
          controller.enqueue(chunk);
        }
        controller.close();
      }
    });
  }

  const fetchReq = new Request(url.href, {
    method: req.method,
    headers: req.headers,
    body,
    duplex: body ? 'half' : undefined
  });

  try {
    const fetchRes = await app.fetch(fetchReq, process.env, {});

    res.statusCode = fetchRes.status;
    fetchRes.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (fetchRes.body) {
      Readable.fromWeb(fetchRes.body).pipe(res);
    } else {
      res.end();
    }
  } catch (err) {
    console.error('SSR Error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
