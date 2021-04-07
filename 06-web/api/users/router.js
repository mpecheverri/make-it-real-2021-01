const express = require('express');
const { list, create, update, authenticate } = require('./controller');
const { logger } = require('./../middleware/logger');
const { validateUser, validateLogin } = require('./../middleware/validator');
const router = express.Router();

router.use(logger);

router.route('/').get(list).post(validateUser, create);

router.route('/login').post(validateLogin, authenticate);

router.route('/:username').put(update);

module.exports = router;
