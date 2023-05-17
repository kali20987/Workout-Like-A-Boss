const router = require('express').Router();
const { Review } = require('../../models');

// localhost:3001/api/review
router.get('/review', async (req, res) => {
    res.render('review');
})

router.post('/review', async (req, res) => {
    const { reviewcontent: reviewContent } = req.body;
    const userReview = await Review.create({
        reviewcontent: reviewContent
    });

    res.json(userReview);
})

module.exports = router;