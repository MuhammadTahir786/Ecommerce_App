import React from 'react'
import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Animated, { Easing, FadeInDown, Layout, SlideOutDown, SlideOutLeft } from 'react-native-reanimated';

interface props {
    cart: { id: number, name: string, price: number, quantity: number, image: any }[],
    increment: (id: number) => void,
    decrement: (id: number) => void,
    removeFromCart: (id: number) => void
}

const CartList = ({ cart, removeFromCart, increment, decrement }: props) => {
    return (
        <>
            {cart?.map((item, index) => {
                return (
                    <Animated.View
                        key={index}
                        layout={Layout.easing(Easing.bounce).delay(index * 100)}
                        exiting={SlideOutLeft}
                        style={styles.cartListContainer}>
                        <Image source={item.image} resizeMode="contain" style={styles.image} />
                        <View style={styles.listDetailContainer}>
                            <View style={styles.listAlignContainer}>
                                <Text style={styles.cartListText}>{item.name}</Text>
                                <TouchableOpacity style={styles.closeIcon} onPress={() => { removeFromCart(item.id) }}>
                                    <AntDesign name={'close'} color={'white'}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.listAlignContainer}>
                                <Text style={styles.cartListText}>$ {item.price}</Text>
                                <View style={styles.countContainer}>
                                    <TouchableOpacity style={styles.decrementIcon} onPress={() => { decrement(item.id) }} >
                                        <AntDesign name={"minus"} size={15} color={"blue"} />
                                    </TouchableOpacity>
                                    <Text style={styles.quantityText}>{item.quantity}</Text>
                                    <TouchableOpacity style={styles.incrementIcon} onPress={() => { increment(item.id) }}>
                                        <AntDesign name={"plus"} size={15} color={"white"}  />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Animated.View>
                )
            })}
        </>
    )
}

export default CartList

const styles = StyleSheet.create({
    cartListContainer: { flexDirection: "row", marginHorizontal: 20, marginVertical: 10, backgroundColor: "#ccd9eb", padding: 10, borderRadius: 20 },
    image: { width: 100, height: 100, borderRadius: 20 },
    listDetailContainer: { flexDirection: "column", justifyContent: "space-between", flex: 1 },
    listAlignContainer: { marginHorizontal: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
    cartListText: { color: "black" },
    closeIcon: { color: "white", backgroundColor: "#041455", padding: 5, borderRadius: 50 },
    countContainer: { flexDirection: "row", alignItems: "center" },
    quantityText: { marginHorizontal: 10, color: "black", fontSize: 20 },
    decrementIcon: { backgroundColor: "white", color: "blue", padding: 10, borderRadius: 10 },
    incrementIcon: { backgroundColor: "#041455", color: "white", padding: 10, borderRadius: 10 },
})