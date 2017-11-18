const { parse } = require('url');
const { join } = require('path');

module.exports = app => {
  const { dir } = app.config.avet;
  const { distDir } = app.config.build;

  app.use(function*(next) {
    const ctx = this;
    const parsedUrl = parse(ctx.req.url, true);
    const { pathname } = parsedUrl;

    if (pathname === '/service-worker.js') {
      const filePath = join(dir, distDir, pathname);
      yield app.serverStatic(ctx, filePath);
    } else {
      yield next;
    }
  });
};
