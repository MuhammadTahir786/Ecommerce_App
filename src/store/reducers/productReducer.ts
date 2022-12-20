import { PRODUCTS_TYPES } from "../types/productTypes";
import { CART_TYPES } from "../types/cartTypes";
import { Action,State } from "./reducer-types";
const { SET_PRODUCTS_DATA } = PRODUCTS_TYPES;
const { ADD_TO_CART, REMOVE_FROM_CART, DECREMENT, INCREMENT } = CART_TYPES;

const initialState = {
    data: [],
    cart: [],
    total: 0,
    count: 0
}

export const ProductReducer = (state:State = initialState, action:Action) => {
    switch (action.type) {
        case SET_PRODUCTS_DATA:
            return {
                ...state,
                data: action.payload
            }
            case ADD_TO_CART:
                const addedItem =state.data.filter((item) => item.id == action.payload.id)[0]
                const alreadyExistingItem= state.cart.filter((item) => item.id == action.payload.id)[0]
                console.log("alreadyExistingItem",alreadyExistingItem)
                console.log("Toatal ======",state.total)
                console.log("addedItem",addedItem)
                if (alreadyExistingItem) {
                    alreadyExistingItem.quantity++;
                    return {
                        ...state,
                        total: state.total+alreadyExistingItem.price,
                        count: state.count+1
                    }
                }
                else {
                    return {
                        ...state,
                        cart: [...state.cart, action.payload],
                        total: state.total+addedItem.price,
                        count: state.count+1
                    }
                }
            case DECREMENT:
                const decrementItem = state.cart.find((item) => item.id == action.payload)
                console.log("Decrement Item", decrementItem)
                decrementItem.quantity--
                if (decrementItem.quantity <= 0) {
                    return {
                        ...state,
                        cart: state.cart.filter((item) => item.id != action.payload),
                        total: state.total-decrementItem.price,
                        count: state.count-1
                    }
    
                }
                return {
                    ...state,
                    total: state.total-decrementItem.price,
                    count: state.count-1
    
                }
            case INCREMENT:
                const incrementItem = state.cart.find((item) => item.id == action.payload)
                console.log("Increment Item", incrementItem)
                console.log("Total ===",state.total)
                incrementItem.quantity++
                return {
                    ...state,
                    total: state.total+incrementItem.price,
                    count: state.count+1
                }
    
            case REMOVE_FROM_CART:
                const removeItem = state.cart.find((item) => item.id == action.payload)
                console.log("Remove Item", removeItem)
                return {
                    ...state,
                    cart: state.cart.filter((item) => item.id != action.payload),
                    total: state.total-(removeItem.price*removeItem.quantity),
                    count: state.count-removeItem.quantity
    
                } 
        default:
            return state;

    }
}