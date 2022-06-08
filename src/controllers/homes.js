const { response, dumbHome } = require('../utils/helper');
const AppError = require('../errors/operational');
const AsyncError = require('../errors/AsyncError');
const Home = require('../database/models/models');
const { Factory } = require('../utils/factory/factory');

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

exports.HttpGetHomes = AsyncError(async (req, res, next) => {
    let homes = await new Factory(Home).find(undefined, undefined, '-created');
    homes = homes.map((el) => dumbHome(el));
    response(res, 200, homes);
});

exports.HttpGetHome = AsyncError(async (req, res, next) => {});

exports.HttpPostNewHome = AsyncError((req, res, next) => {
    res.status(200).json('we dey here, I am working');
});
