// mongoose errors
function DuplicateError(res, error) {
    return res.status(400).json({
        status: 'fail',
        message: `Duplicate field name(s) ${Object.entries(
            error.keyValue
        )}, try another value`,
    });
}

function JwtError(res) {
    return res.status(400).json({
        status: 'fail',
        message: 'your session has expired, try login again',
    });
}

module.exports = {
    DuplicateError,
    JwtError,
};
