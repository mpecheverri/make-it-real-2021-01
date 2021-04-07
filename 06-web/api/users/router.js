const express = require('express');
const { list, create, update } = require('./controller');
const { logger } = require('./../middleware/logger');
const { validateUser } = require('./../middleware/validator');
const router = express.Router();

router.use(logger);

router.route('/').get(list).post(validateUser, create);

router.route('/:username').put(update);

module.exports = router;
