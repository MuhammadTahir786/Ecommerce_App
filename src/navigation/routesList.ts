import React from 'react'
import HomeScreen from '../screens/Home/HomeScreen'
import CartScreen from '../screens/Cart/CartScreen'
import ProductDetailScreen from '../screens/ProductDetail/ProductDetailScreen'

export const routesList =[
    {
        name:"Home",
        component:HomeScreen
    },
    {
        name:"Cart",
        component:CartScreen
    },
    {
        name:"ProductDetail",
        component:ProductDetailScreen
    }
]
