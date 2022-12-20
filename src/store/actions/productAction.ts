import { PRODUCTS_TYPES } from "../types/productTypes";
import { productsData } from "../../components/ProductsData";
import { Action } from "../reducers/reducer-types";
import { Dispatch } from "redux";

const { SET_PRODUCTS_DATA } = PRODUCTS_TYPES;

export interface ProductActionType{
  type:string,
  payload:{}
}

export const setProductsData = (data:{}):ProductActionType => ({
  type: SET_PRODUCTS_DATA,
  payload: data
})


export const productsAction = () => async (dispatch:Dispatch) => {
  dispatch(setProductsData(productsData))
}