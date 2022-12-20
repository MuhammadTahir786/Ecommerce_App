import { CART_TYPES } from "../types/cartTypes";
import { CartType,props } from "./action-types";

const {ADD_TO_CART,REMOVE_FROM_CART,DECREMENT,INCREMENT } = CART_TYPES;

export const addToCart=(item:CartType)=>({
  type:ADD_TO_CART,
  payload:item
})

export const removeFromCart=(id:props)=>({
  type:REMOVE_FROM_CART,
  payload:id
})

export const decrement=(id:props)=>({
  type:DECREMENT,
  payload:id
})

export const increment=(id:props)=>({
  type:INCREMENT,
  payload:id
})