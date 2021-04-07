const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const users = require('./users/router');

const { config } = require('./../config');

const router = express.Router();
const accessLogDir = config.log.access;
const logStream = fs.createWriteStream(path.join(__dirname, accessLogDir), {
  flags: 'a',
});

router.use(morgan('combined', { stream: logStream }));
router.use('/users', users);

module.exports = router;
