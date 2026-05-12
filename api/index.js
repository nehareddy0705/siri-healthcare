import app from '../dist/server/server.js';

export const config = {
  runtime: 'edge',
};

export default function (req, event) {
  return app.fetch(req, process.env, event);
}
