class BadRequestError extends Error {
  constructor(errors) {
    super("Validation failed!");
    this.errors = errors;
    this.status = 400;
  }
}

class NotFoundError extends Error {
  constructor(message) {
    if (message) {
      super(message);
    } else {
      super("Data is Not Found!");
    }
    this.status = 404;
  }
}

class UnauthorizedError extends Error {
  constructor(message) {
    if (message) {
      super(message);
    } else {
      super("Access Denied!");
    }
    this.status = 401;
  }
}

class ForbiddenError extends Error {
  constructor(message) {
    if (message) {
      super(message);
    } else {
      super("Forbidden");
    }
    this.status = 403;
  }
}

class InternalServerError extends Error {
  constructor(errors) {
    super("Internal Server Error");
    this.status = 500;
    this.errors = errors;
  }
}

module.exports = {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
  ForbiddenError,
  InternalServerError,
};
