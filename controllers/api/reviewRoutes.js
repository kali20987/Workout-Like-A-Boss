const router = require('express').Router();
const { Review } = require('../../models');



router.post('/review', async (req, res) => {
    const { reviewcontent: reviewContent } = req.body;
    const userReview = await Review.create({
        reviewcontent: reviewContent
    });

    res.json(userReview);
})

module.exports = router;