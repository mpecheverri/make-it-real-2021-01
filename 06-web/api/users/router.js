const express = require('express');
const { list, create, update } = require('./controller');
const { logger } = require('./../middleware/logger');
const router = express.Router();

router.use(logger);

router.route('/')
    .get(list)
    .post(create);

router.route('/:username')
    .put(update);

module.exports = router;
