import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home/HomeScreen'
import CartScreen from '../screens/Cart/CartScreen'
import ProductDetailScreen from '../screens/ProductDetail/ProductDetailScreen'


export type HomeStackParamList = {
    Home: undefined,
    Cart: undefined,
    ProductDetail: { data: {name:string,image:any,price:number} }
}

const Stack = createNativeStackNavigator<HomeStackParamList>();
const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'Home'} component={HomeScreen} />
                <Stack.Screen name={'Cart'} component={CartScreen} />
                <Stack.Screen name={'ProductDetail'} component={ProductDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes