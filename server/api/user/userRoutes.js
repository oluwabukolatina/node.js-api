const router = require('express').Router(),
 logger = require('../../util/logger'),
    controller = require('./userController'),
    createRoutes = require('../../util/createRoutes');

createRoutes(controller, router);

// router.route('/')
//     .get(function(req, res){
//         logger.log('Hey from user!!');
//         res.send({ok: true});
//     });

module.exports = router;