import {  SET_PRODUCT_LIST } from "../constants/constants";

export const productData = (data=[], action) =>{
    switch (action.type) {
        case SET_PRODUCT_LIST:
           // console.log("set_product in productReducer", action)
            return [...action.payload]
        default:
          return data;
    }
}