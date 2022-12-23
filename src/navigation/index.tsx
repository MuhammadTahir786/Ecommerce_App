import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home/HomeScreen'
import CartScreen from '../screens/Cart/CartScreen'
import ProductDetailScreen from '../screens/ProductDetail/ProductDetailScreen'
import Splash from '../screens/Splash/Splash';


export type HomeStackParamList = {
    Splash:undefined,
    Home: undefined,
    Cart: undefined,
    ProductDetail: { data: {name:string,image:any,price:number,quantity:number} }
}

const Stack = createNativeStackNavigator<HomeStackParamList>();
const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
                <Stack.Screen name={"Splash"} component={Splash}/>
                <Stack.Screen name={'Home'} component={HomeScreen} />
                <Stack.Screen name={'Cart'} component={CartScreen} />
                <Stack.Screen name={'ProductDetail'} component={ProductDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes