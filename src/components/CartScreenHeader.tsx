import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { HomeStackParamList } from '../navigation';


interface props{
    navigation:NativeStackNavigationProp<HomeStackParamList>,
}
const CartScreenHeader = ({navigation}:props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name={'arrowleft'} size={20} color={'black'} />
            </TouchableOpacity>
            <Text style={styles.btnText}>Checkout</Text>
        </View>
    )
}

export default CartScreenHeader

const styles=StyleSheet.create({
    container:{ flexDirection: "row", marginVertical: 10, marginHorizontal: 20, alignItems: "center" },
    btnText:{ color: "black", textAlign: "center", fontSize: 18, fontWeight: "bold", left: 100 }
})