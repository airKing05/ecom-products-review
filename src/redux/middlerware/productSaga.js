import {takeEvery, put} from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from '../constants/constants';

function* getProducts(){
   
    let data = yield fetch('http://localhost:3002/api/products');
    data = yield data.json();
   
    yield put({ type: SET_PRODUCT_LIST, payload:data})
};


function* productSaga(){
yield takeEvery(PRODUCT_LIST, getProducts);

};
export default productSaga;