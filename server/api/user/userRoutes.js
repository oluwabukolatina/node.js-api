const router = require('express').Router(),
 logger = require('../../util/logger');

// setup boilerplate route jsut to satisfy a request
// for building

router.route('/').get((req, res) => {
    logger.log('hey');
    res.send({ok: true});
});

module.exports = router;