import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import InputReview from './InputReview'
import ReviewData from './ReviewData'
import { addToCart, removeToCart } from '../../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../../redux/actions/productAction';

function Review() {
  const [singleProduct, setSingleProduct] = useState('');
  const [reviews, setReviews] = useState([]);

  let { productId } = useParams()

  const dispatch = useDispatch();
  const result = useSelector((state) => state.productData)

  function productData() {
    fetch(`http://localhost:3002/api/products`)
      .then(res => res.json())
      .then(res => {
        res.filter((item) => {
          if (item.id === productId) {
            setSingleProduct(item)
          }
        })
      })
  }

  function productReview() {
    fetch(`http://localhost:3002/api/reviews/${productId}`)
      .then(res => res.json())
      .then(res => setReviews(res))
  }

  function deleteReview(paramsId) {
    fetch(`http://localhost:3002/api/reviews/${paramsId}`, { method: 'DELETE' })
      .then((res) => {
        console.log("deleted ", paramsId)
        productReview();
      })
   
  }

  //console.log("singleProduct", singleProduct)
  useEffect(() => {
    productData();
    // dispatch function for cat
    dispatch(productList())

    productReview()
  }, [])

  return (
    <div className='container'>
      <div className='row m-3'>
        <div className='col-md-4 border'>
          <h4 className='fs-4 fw-bolder'>Product Details</h4>
          <div className='product-item' >
            <div>Name: {singleProduct.name} </div>
            <div>Price: Rs-{singleProduct.price}</div>
            <div><button className='btn'
              onClick={() => dispatch(addToCart(singleProduct))}
            >Add to cart</button></div>
            <div><button className='btn'
              onClick={() => dispatch(removeToCart(singleProduct.id))}
            >Remove to cart</button></div>
          </div>
        </div>
        <div className='col-md-8 border '>
          <InputReview productReviewFunc={productReview} />
          <h6 className='fs-6 fw-bold'>Check reviews</h6>
          <div data-bs-spy="scroll" >
            {
              reviews && reviews.map((item) => {
                return <ReviewData key={item.id} items={item} deleteReviewFunc={deleteReview} />
              })
            }

          </div>

        </div>
      </div>
    </div>
  )
}

export default Review