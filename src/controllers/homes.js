const { response } = require('../utils/helper');
const AppError = require('../errors/operational');
const AsyncError = require('../errors/AsyncError');

exports.HttpHome = (req, res) => {
    response(res, 200, 'welcome to pinbar.ng  api');
};

exports.undefinedRoutes = (req, res, next) => {
    return next(
        new AppError(
            `can't find this ${req.originalUrl} on this server \n check the url with the correct HTTP method and try again`,
            404
        )
    );
};

exports.HttpGetHomes = AsyncError((req, res, next) => {});
exports.HttpPostNewHome = AsyncError((req, res, next) => {
    res.send('we dey here, I am working');
});
