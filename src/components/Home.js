import React, { useEffect } from 'react';
import {Link } from 'react-router-dom'
import { addToCart, removeToCart } from '../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/actions/productAction';


export default function Home() {
    const dispatch = useDispatch();
    const result = useSelector((state)=> state.productData)
    //console.log("state data in home from saga", result)
    
    
    // api data on onload
    useEffect(()=>{
      dispatch(productList())
    }, [])
  return (
    <div>
        
      <h1>E-Commerce Product Reviews </h1> <br /> <br />
      {/* <button onClick={() => dispatch(addToCart(product))}> Add to cart</button> <br/><br/> */}
      {/* <button onClick={() => dispatch(removeToCart(product.name))}>Remove to cart</button> <br /><br /> */}
      {/* <button onClick={() => dispatch(emptyCart())}>Empty cart</button> <br /><br /> */}
      {/* <button onClick={() => dispatch(productData())}>get product</button> <br /><br /> */}

     <div className='product-container'>
       
      { 
        result && result.map((item)=>
          <Link to={`review/${item.id}`} className='product-item text-decoration-none' key={item.id}>
            <div>Name: {item.name}</div>
            <div>Price: Rs-{item.price}</div>
            <div><button className='btn' onClick={() => dispatch(addToCart(item))}>Add to cart</button></div> 
            <div><button className='btn' onClick={() => dispatch(removeToCart(item.id))}>Remove to cart</button></div>
          </Link>
        )
      }
     </div>
    </div>
  )
}
