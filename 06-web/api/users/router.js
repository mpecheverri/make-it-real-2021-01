const express = require('express');
const { list, create, update, login } = require('./controller');
const { logger } = require('./../middleware/logger');
const { validateUser, validateLogin } = require('./../middleware/validator');
const { authenticator } = require('./../middleware/authenticator');
const router = express.Router();

router.use(logger);

router.route('/').get(authenticator, list).post(validateUser, create);

router.route('/login').post(validateLogin, login);

router.route('/:username').put(update);

module.exports = router;
