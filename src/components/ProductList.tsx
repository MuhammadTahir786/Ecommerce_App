import React from 'react'
import { View,FlatList,TouchableOpacity,Text,Image,StyleSheet } from 'react-native'
import { HomeStackParamList } from '../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface props{
    navigation:NativeStackNavigationProp<HomeStackParamList>
    data:{id:number,name:string,price:number,quantity:number,image:any}[],
    addToCart:({})=>void,
    searchText:string
}

const ProductList = ({navigation,data,searchText,addToCart}:props) => {
  return (
    <View style={styles.productListMainContainer}>
      <FlatList
        data={data.filter((item) => item.name.toUpperCase().includes(searchText.toUpperCase()))}
        numColumns={2}
        nestedScrollEnabled={true}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => { navigation.navigate("ProductDetail", { data: item }) }} style={styles.productListContainer}>
              <View style={styles.imageContainer}>
                <Image source={item?.image} style={styles.image} />
              </View>
              <Text style={styles.productText}>{item.name}</Text>
              <Text style={styles.productText}>$ {item.price}</Text>
              <TouchableOpacity onPress={() => { addToCart(item), console.log(item.id) }} style={styles.btnContainer}>
                <Text style={styles.btnText}>Add To Cart</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
    productListMainContainer:{marginHorizontal:10},
    productListContainer:{ backgroundColor: "white", marginHorizontal: 10, marginVertical: 10, height: 210, borderRadius: 20, flex: 0.5, overflow: "hidden" },
    imageContainer:{ alignItems: "center" },
    image:{ width: 100, height: 100, resizeMode: "contain", justifyContent: "center", alignItems: "center", marginTop: 10 },
    productText:{ color: "black", marginLeft: 10 },
    btnContainer:{ backgroundColor: "#041455", paddingHorizontal: 10, paddingVertical: 10, borderRadius: 5, marginTop: 10, marginHorizontal: 20 },
    btnText:{ fontWeight: "bold", color: "white", textAlign: "center" },
})