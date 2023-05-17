const router = require('express').Router();
const { Review } = require('../../models');



router.post('/review', async (req, res) => {
    const { reviewcontent: reviewContent, username: username } = req.body;
    const userReview = await Review.create({
        reviewcontent: reviewContent,
        username: username
    });

    res.json(userReview);
})

module.exports = router;