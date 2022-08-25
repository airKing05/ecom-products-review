
import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from '../constants/constants';

export const cartData = (data=[], action) =>{
    switch (action.type) {
        case ADD_TO_CART:
            //console.log("reducer addToCart called", action.payload)
            return [action.payload, ...data] 
        case REMOVE_TO_CART: 
           // console.log("reducer removeToCart called", action.payload)
            let remainingItem = data.filter((item)=> item.id !== action.payload)
           // console.warn("remainingItem", remainingItem)
          
            return [...remainingItem];  
        case EMPTY_CART:
           // console.log("reducer removeToCart called")
            data =[]
            return [...data]
        default:
            return data; 
    }
}   