import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import {Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { HomeStackParamList } from '../navigation';

interface props{
    navigation:NativeStackNavigationProp<HomeStackParamList>
}
const CartScreenHeader = ({navigation}:props) => {
    return (
        <View style={{ flexDirection: "row", marginVertical: 10, marginHorizontal: 20, alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name={'arrowleft'} size={20} color={'black'} />
            </TouchableOpacity>
            <Text style={{ color: "black", textAlign: "center", fontSize: 18, fontWeight: "bold", left: 100 }}>Checkout</Text>
        </View>
    )
}

export default CartScreenHeader