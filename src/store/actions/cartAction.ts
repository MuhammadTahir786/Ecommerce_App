import { CART_TYPES } from "../types/cartTypes";
import { CartType,props } from "./action-types";

const {ADD_TO_CART,REMOVE_FROM_CART,DECREMENT,INCREMENT } = CART_TYPES;

export const addToCart=(item:{})=>({
  type:ADD_TO_CART,
  payload:item
})

export const removeFromCart=(id:number)=>({
  type:REMOVE_FROM_CART,
  payload:id
})

export const decrement=(id:number)=>({
  type:DECREMENT,
  payload:id
})

export const increment=(id:number)=>({
  type:INCREMENT,
  payload:id
})