const express = require('express');
const route = express.Router();
const productControllers = require('../controller/productControllers')
const reviewsControllers = require('../controller/reviewsControllers')

//product data
route.get('/products', productControllers.getProducts);
route.post('/products', productControllers.postProducts);
route.put('/products/:productId', productControllers.putProducts);
route.delete('/products/:productId', productControllers.deleteProducts);


//reviews data

route.get('/reviews/:productId', reviewsControllers.getReviews);
route.post('/reviews', reviewsControllers.postReviews);
route.put('/reviews/:reviewId', reviewsControllers.putReviews);
route.delete('/reviews/:reviewId', reviewsControllers.deleteReviews);


module.exports = route;