import {SET_PRODUCTS, TOGGLE_ITEM_IN_CART, TOGGLE_ITEM_IN_WISHLIST} from "../action-types"
import {services} from "../../services";

const {productService}= services;

// export const setProducts = () => async (dispatch) => {
//   const response = await productService.getProducts();
//   const json = await response.json();
//
//   dispatch({ type: SET_PRODUCTS, payload: json });
// };

// можно ще так
export const setProducts = () => (dispatch) => {
  productService
      .getProducts()
      .then(response => response.json())
      .then(products => dispatch({ type: SET_PRODUCTS, payload: products }))
      .catch(err => console.warn(err))


};

export  const toggleItemInCart=(product)=>({type: TOGGLE_ITEM_IN_CART, payload: product})
export const toggleItemInWishList=(product)=>({type: TOGGLE_ITEM_IN_WISHLIST,  payload: product})



