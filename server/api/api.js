 //const router = require('express').Router();

const express 			= require('express'),
      router        		= express.Router(),
        userRouter  		= require('./user/userRoutes'),
     categoryRouter	 	= require('./category/categoryRoutes'),
     postRouter    =  require('./post/postRoutes');

// api router will mount other routers
// for all our resources
router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/posts', postRouter);

 module.exports = router;