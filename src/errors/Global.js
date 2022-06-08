const { DuplicateError, JwtError, ValidationError } = require('./Mongoose');
function errorHandler(err, req, res, next) {
    if (process.env.NODE_ENV === 'production')
        return HandleProdError(err, res, next);
    return HandleDevError(err, res);
}

function HandleProdError(err, res, next) {
    const { ...error } = err;
    console.log(error, error.name);
    if (error.isOperational) {
        return res.status(400).json({
            status: err.status,
            message: err.message,
        });
    }
    if (error.code === 11000) return DuplicateError(res, error);
    if (error.name === 'JsonWebTokenError') return JwtError(res);
    if (error.name === 'ValidationError') return ValidationError(res, error);
}
function HandleDevError(err, res) {
    res.status(err.statusCode || 500).json({
        status: err.status,
        err,
        message: err.message,
    });
}

module.exports = errorHandler;
