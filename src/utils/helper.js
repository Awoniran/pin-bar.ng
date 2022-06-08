const jwt = require('jsonwebtoken');

function response(res, statusCode, data, token) {
    res.status(statusCode).json({
        status: 'success',
        data,
        token,
    });
}

function dumbUser(userObject) {
    return {
        id: userObject._id,
        firstName: userObject.firstName,
        lastName: userObject.lastName,
        email: userObject.email,
        joinedAt: userObject.joinedAt,
    };
}
function dumbHome(homeObject) {
    return {
        id: homeObject._id,
        type: homeObject.houseType,
        no_of_rooms: homeObject.rooms,
        no_of_toilets: homeObject.toilet,
        price: homeObject.price,
        region: homeObject.region,
        photos: homeObject.photos,
        created: homeObject.created,
    };
}

function signToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES,
    });
}

function verifyToken(id) {
    return jwt.verify(id, process.env.JWT_SECRET);
}

module.exports = {
    response,
    dumbUser,
    signToken,
    verifyToken,
    dumbHome,
};
