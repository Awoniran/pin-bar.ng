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

exports.HttpGetHome = AsyncError(async (req, res, next) => {
    const home = await new Factory(Home).findOne({ _id: req.params.HomeId });
    if (!home)
        return next(new AppError('no home found with the provided ID', 404));
    response(res, 200, dumbHome(home));
});

exports.HttpDeleteHome = AsyncError(async (req, res, next) => {
    await new Factory(Home).Delete(req.params.HomeId);
    response(res, 200, 'Home deleted successfully');
});

exports.HttpEditHome = AsyncError(async (req, res, next) => {
    const home = await new Factory(Home).Update(req.params.HomeId, req.body);
    if (!home)
        return next(new AppError('no home found with the provided ID', 404));
    response(res, 200, dumbHome(home));
});

exports.HttpPostNewHome = AsyncError(async (req, res, next) => {
    const newHome = await new Factory(Home).create(req.body);
    response(res, 200, dumbHome(newHome));
});
