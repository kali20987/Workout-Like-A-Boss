const router = require('express').Router();
const { GH } = require('../../models');

// Localhost:3001/
router.get('/', (req, res) => {
    res.render('homepage');
})

module.exports = router;
