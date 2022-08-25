import React from 'react';
import { Link } from 'react-router-dom';
import {emptyCart} from '../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';


export default function Cart() {
  const cartData = useSelector((state) => state.cartData);
  const dispatch = useDispatch()


  let amount = cartData.length && cartData.map((item)=>parseInt(item.price)).reduce((previousValue, currentValue)=> previousValue+currentValue)
  console.log("total amount", amount)
  console.log("cartData in cart page", cartData)
  return (

    <div className='cart-container'>
      <Link to="/" >
        <span >&#8592; Go to product list</span>
      </Link>
      <h2> Cart Page</h2>
      <button className='btn' onClick={() => dispatch(emptyCart())}>Empty cart</button> <br /><br />
      {
        cartData.length > 0 ? 
        <div className='cart-container-details row'>
          <table className='col'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                cartData && cartData.map((item) =>
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{parseInt(item.price)}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
          <div className='price-details col'>
            <div className='adjust-price'>
              <span>Amount</span>
              <span>{amount}</span>
            </div>
            <div className='adjust-price'>
              <span>Discount</span>
              <span>{amount / 10}</span>
            </div>
            <div className='adjust-price'>
              <span>Tax</span>
              <span>{amount * 8 / 100}</span>
            </div>
            <div className='adjust-price'>
              <span>Total Amount</span>
              <span>{parseInt(amount + (amount * 18 / 100) - (amount / 10))}</span>
            </div>
          </div>
        </div> : <div>
            <h4>No data found</h4>
            <img src='https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg' alt='no item found'/>
            <Link style={{textDecoration:'none'}} to="/">
              <h4>&#8592; Add item in to cart</h4>
            </Link>
        </div>
      }
    </div>
  )
}
