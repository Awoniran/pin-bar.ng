const router = require('express').Router();

const {
    HttpHome,
    HttpGetHomes,
    HttpGetHome,
    HttpPostNewHome,
    HttpEditHome,
    HttpDeleteHome,
} = require('../controllers/homes');
const Auth = require('../controllers/auth');

router.get('/', HttpHome);

router
    .route('/homes')
    .get(HttpGetHomes)
    .post(Auth.HttpCheckLogin, HttpPostNewHome);

router
    .route('/homes/:HomeId')
    .get(HttpGetHome)
    .patch(HttpEditHome)
    .delete(HttpDeleteHome);

module.exports = router;
