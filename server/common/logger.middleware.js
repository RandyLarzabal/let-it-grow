const loggerMiddleware = (request, response, next) => {
  console.log(`method=${request.method} url=${request.originalUrl} queryParam=${JSON.stringify(request.query)} body=${JSON.stringify(request.body)} content-type=${request.headers['content-type']}`);
  next();
};

module.exports = loggerMiddleware;
