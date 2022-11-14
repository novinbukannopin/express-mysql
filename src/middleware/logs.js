const logRequest = (req, res, next) => {
    console.log("Log Request di Path : ", req.path)
    next();
  }

  module.exports = logRequest;