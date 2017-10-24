const { parse } = require('url');
const { join } = require('path');

module.exports = app => {
  app.serverUse(async (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;
    if (pathname === '/service-worker.js') {
      const filePath = join(__dirname, '.avet', pathname);
      await app.serverStatic(req, res, filePath);
    }
  });
}
