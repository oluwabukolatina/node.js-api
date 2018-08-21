const router = require('express').Router(),
    logger = require('../../util/logger'),
    controller = require('./categoryController'),
    createRoutes = require('../../util/createRoutes');

createRoutes(controller, router);
module.exports = router;