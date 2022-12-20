export type State={
    data: any[],
    cart: any[],
    total: number,
    count: number
}

export interface AddToCart{
    type:'ADD_TO_CART',
    payload:any
}

export interface DECREMENT{
    type:'DECREMENT',
    payload:number

}
export interface INCREMENT{
    type:'INCREMENT',
    payload:number
}
export interface REMOVE_FROM_CART{
    type:'REMOVE_FROM_CART',
    payload:number
}

export type Action=AddToCart | DECREMENT | INCREMENT | REMOVE_FROM_CART