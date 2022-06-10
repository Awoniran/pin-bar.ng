// mongoose errors
function DuplicateError(res, error) {
    return res.status(400).json({
        status: 'fail',
        message: `Duplicate field(s): ${Object.entries(
            error.keyValue
        )}, already exist`,
    });
}

function JwtError(res) {
    return res.status(400).json({
        status: 'fail',
        message: 'your session has expired, try login again',
    });
}

function ValidationError(res, error) {
    const message = `${error._message} : ${Object.values(error.errors).map(
        (el) => el.message
    )}`;
    return res.status(400).json({
        status: 'fail',
        message,
    });
}

function CastError(res, error) {
    const message = `invalid ${error.path} :${error.value}`;
    return res.status(400).json({
        status: 'fail',
        message,
    });
}

module.exports = {
    DuplicateError,
    JwtError,
    ValidationError,
    CastError,
};
