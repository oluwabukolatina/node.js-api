const router = require('express').Router(),
    logger = require('../../util/logger'),
    controller = require('./postController')
    createRoutes = require('../../util/createRoutes')

createRoutes(controller, router);


module.exports = router;