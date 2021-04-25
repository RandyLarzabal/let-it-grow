const errorType = require('./error-type');

const errorMiddleware = (error, request, response, next) => {
  error && console.error(error);
  const status = getStatus(error);
  const message = getMessage(error);
  response.status(status);
  response.json({
    type: error?.type || errorType.UNEXPECTED_ERROR,
    message
  });
};

const getStatus = error => {
  switch (error?.type) {
    case errorType.BAD_RESOURCE_ID_FORMAT:
    case errorType.MISSING_RESOURCE_FIELD:
      return 400;
    case errorType.RESOURCE_ID_NOT_FOUND:
    case errorType.RESOURCE_NOT_FOUND:
      return 404;
    case errorType.INVALID_CREDENTIALS:
    case errorType.INVALID_TOKEN:
    case errorType.MISSING_TOKEN:
      return 401;
    case errorType.MISSING_AUTHORIZATION:
      return 403;
    default:
      return 500;
  }
};

const getMessage = error => {
  switch (error?.type) {
    case errorType.BAD_RESOURCE_ID_FORMAT:
      return `Resource id must be an integer but was id=${error.param}`;
    case errorType.MISSING_RESOURCE_FIELD:
      return `Resource field is missing field=${error.param}`;
    case errorType.RESOURCE_ID_NOT_FOUND:
      return `Resource with id=${error.param} not found`;
    case errorType.RESOURCE_NOT_FOUND:
      return `Resource with url=${error.param} not supported`;
    case errorType.INVALID_CREDENTIALS:
      return 'Given credentials are invalid';
    case errorType.INVALID_TOKEN:
      return 'Given authenticaiton token is invalid'
    case errorType.MISSING_TOKEN:
      return 'Authentication is required to access this resource';
    case errorType.MISSING_AUTHORIZATION:
      return `Role ${error.param} is required to access this resource`
    default:
      return 'Unhandled error';
  }
};

module.exports = errorMiddleware;
