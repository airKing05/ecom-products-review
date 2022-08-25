const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const app = express();

app.use(express.json());

//get review
const getReviews = async function (req, res) {
    const {
        productId
    } = req.params;
    let data = await fs.readFileSync("db1.json");
    data = JSON.parse(data);
    let reviewsData = data.reviews;
    reviewsData = reviewsData.filter((review) => review.productId == productId);
    res.send(reviewsData);
};

//post review
const postReviews = async function (req, res) {
   
    const { productId } = req.body;
    console.log("productid", req.params)
    let reviewsData = await fs.readFileSync('db1.json');
    reviewsData = JSON.parse(reviewsData);
    
    let newId = uuidv4();
    let date = new Date();
    
    const reviewToAdd = { ...req.body, id: newId, createdAt: date, productId: productId };
    console.log("reviewsData", reviewsData.reviews, "reviewToAdd", reviewToAdd )
    if (reviewToAdd.userId !== undefined & reviewToAdd.review !== undefined) {
        reviewsData.reviews.unshift({
            ...reviewToAdd
        });

        await fs.writeFile('db1.json', JSON.stringify(reviewsData), err => {
            if (err) throw err;
        });
        res.send(reviewToAdd);
    } else {
        console.log('all fields required')
    }
};

//put request
const putReviews = async function (req, res) {
    let reviewsData = await fs.readFileSync('db1.json');
    reviewsData = JSON.parse(reviewsData);

    let editReviewData = reviewsData.reviews &&  reviewsData.reviews.find((item) => {
        if(item.id === req.params.reviewId){
            return "abcd"
        }
    })
    
     console.log("editReviewData", editReviewData)

   
    let date = new Date();

    
    const editReviewToAdd = { ...editReviewData, ...req.body,  editAt: date };
    // console.log("editReviewToAdd", editReviewToAdd)

    if (editReviewToAdd.userId !== undefined & editReviewToAdd.review !== undefined) {
        reviewsData.reviews.push({
            ...editReviewToAdd
        });
        
        reviewsData.reviews.find((item) => {
            if (item.id === req.params.reviewId) {
                delete item
                console.log("items", item)
            }else{
                // await fs.writeFile('db1.json', JSON.stringify(reviewsData), err => {
                //     if (err) throw err;
                // });
                // res.send(editReviewToAdd);
            }
        })

       
    } else {
        console.log('all fields required')
    }

   // console.log("reviewsData", reviewsData.reviews)
};


const deleteReviews = async function (req, res) {
    let data = await fs.readFileSync("db1.json");
    data = JSON.parse(data);
    const reviewsData = data.reviews;

    const filteredReviewData = reviewsData.filter((item) => item.id !== req.params.reviewId);
    await fs.writeFile('db1.json', JSON.stringify({
        ...data,
        reviews: [
            ...filteredReviewData,
        ],
    }), err => {
        if (err) throw err;
    });

    res.send("done")
};

module.exports = { getReviews, postReviews, putReviews, deleteReviews };
