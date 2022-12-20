import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { styles } from './style';
import { connect } from 'react-redux';
import { removeFromCart, decrement, increment } from '../../store/actions/cartAction';
import CartScreenHeader from '../../components/CartScreenHeader';
import CartList from '../../components/CartList';
import { RootState } from '../../store';

interface props{
    navigation:any,
    products:{cart:{ id: number;name: string;price: number;quantity: number;image: any;}[],total:number},
    increment:(id:number)=>void,
    decrement:(id:number)=>void,
    removeFromCart:(id:number)=>void
}
const CartScreen = ({ navigation, products, increment, decrement, removeFromCart }:props) => {
    const { cart, total } = products;
    console.log(products)
    return (
        <SafeAreaView style={styles.container}>
            <CartScreenHeader navigation={navigation} />
            <ScrollView>
                <CartList
                    cart={cart}
                    removeFromCart={removeFromCart}
                    increment={increment}
                    decrement={decrement} />
            </ScrollView>
            <View style={styles.cartBottomContainer}>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Total</Text>
                    <Text style={styles.totalText}>$ {total}</Text>
                </View>
                <TouchableOpacity style={styles.checkoutBtnContainer}>
                    <Text style={styles.checkoutBtnText}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const mapStateToProps = (state:RootState) => ({
    products: state.products
})
const mapDispatchToProps = {
    removeFromCart,
    increment,
    decrement,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)