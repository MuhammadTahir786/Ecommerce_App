import React from 'react'
import { FlatList, SafeAreaView, TextInput, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Rating } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { HomeStackParamList } from '../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface props{
    navigation:NativeStackNavigationProp<HomeStackParamList>
    data:{id:number,name:string,price:number,quantity:number,image:any}[],
    like:boolean,
    setLike: React.Dispatch<React.SetStateAction<boolean>>,
    addToCart:({})=>void,
    searchText:string
}

const HorizentalProductList = ({ data, like, setLike,addToCart,navigation,searchText }:props) => {
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={data.filter((item) => item.name.toUpperCase().includes(searchText.toUpperCase()))}
                horizontal
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled={true}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={()=>{navigation.navigate("ProductDetail",{data:item})}} style={styles.productListContainer}>
                            <Image source={item.image} resizeMode="contain" style={styles.image} />
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Rating
                                imageSize={20}
                                style={{ right: 50 }}
                            />
                            <View style={styles.itemBottomContainer}>
                                <Text style={styles.itemPrice}>$ {item.price}</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={styles.likeIcon}>
                                    <TouchableOpacity onPress={() => { setLike(!like) }}>
                                        <AntDesign name={like ? 'heart' : 'hearto'} size={20} style={{ color: like ? 'red' : "gray" }} />
                                    </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity onPress={()=>{console.log("Horizental Item",item),addToCart(item)}}>
                                        <AntDesign name={'plus'} size={20} style={styles.cartIcon} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default HorizentalProductList

const styles = StyleSheet.create({
    listContainer: { height: 200, marginTop: 20, marginLeft: 5,paddingHorizontal:10 },
    productListContainer: { backgroundColor: "white", elevation: 1, marginHorizontal: 5, borderRadius: 20, paddingHorizontal: 20 },
    image: { width: 200, height: 100 },
    itemName: { color: "black", fontWeight: "bold", fontSize: 18 },
    itemBottomContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
    itemPrice: { fontSize: 19, color: "black" },
    likeIcon: { backgroundColor: "white", padding: 10, borderRadius: 10, elevation: 10, marginHorizontal: 10 },
    cartIcon: { backgroundColor: "white", padding: 10, borderRadius: 10, elevation: 10, color: "blue" },
})