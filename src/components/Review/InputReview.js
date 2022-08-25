import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const initialPostReviewData = {
  userId: '',
  review: ''
}
export default function InputReview({ productReviewFunc }) {
  const [postReviewData, setPostReviewData] = useState(initialPostReviewData);
  let { productId } = useParams();

  function handleChange(e) {
    const { name, value } = e.target;
    setPostReviewData({ ...postReviewData, [name]: value })
  }

  async function handleSubmit() {
    console.log('hhandle call')
    const { name, review } = postReviewData;

    console.log(name, typeof name, review, typeof review);
    let reviewData = await fetch(`http://localhost:3002/api/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: name, review: review, productId }),
    });

    reviewData = await reviewData.json();
    console.log(reviewData)
    setPostReviewData({
      name: '',
      review: ''
    })
    //get reviews
    productReviewFunc();
    
  }

  return (
    <div className='shadow-none p-3 mt-2 mb-5 bg-light rounded'>
      <h6 className='fs-6 fw-bold'>Add your reviews</h6>
      <div class="my-3  d-flex mx-auto">
        <input
          type="type"
          name='name'
          value={postReviewData.name}
          onChange={handleChange}
          class="form-control"
          placeholder="User-Id" required/>
        <button
          onClick={handleSubmit}
          className='btn btn-primary'>Add</button>
      </div>
      <div class="mb-3">
        <textarea
          name='review'
          value={postReviewData.review}
          onChange={handleChange}
          class="form-control"
          rows="3"
          placeholder='add  your review' required></textarea>
      </div>
    </div>
  )
}
