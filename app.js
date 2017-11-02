const { parse } = require('url');
const { join } = require('path');

module.exports = app => {
  const dir = app.config.server.dir;
  const dist = app.config.build.distDir;

  app.use(function* (next) {
    const ctx = this;
    const parsedUrl = parse(ctx.req.url, true);
    const { pathname } = parsedUrl;

    if (pathname === '/service-worker.js') {
      const filePath = join(dir, dist, pathname);
      yield app.serverStatic(ctx, filePath);
    } else {
      yield next;
    }
  });
}
