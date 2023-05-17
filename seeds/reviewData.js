const { Review } = require('../models');

const reviewData = [
    {
        reviewcontent: 'Thanks to this website, I had the best leg day of my life!',
        username: 'User1234'
    },
    {
        reviewcontent: 'OMG! What a fantastic push session. I will definitely use this website again!',
        username: 'this-is-definitely-a-real-account'
    },
    {
        reviewcontent: 'After using this program, my back was so sore!!! I am so excited for these gainz!',
        username: 'juhuyoon'
    }
]

const seedReviewData = () => Review.bulkCreate(reviewData)

module.exports = seedReviewData;