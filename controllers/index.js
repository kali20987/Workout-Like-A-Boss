const router = require('express').Router();
const review = require('./api/reviewRoutes')
const pages = require('./pages');

// localhost:3001/
router.use('/', pages);

// localhost:3001/api
router.use('/api', review);

module.exports = router;
