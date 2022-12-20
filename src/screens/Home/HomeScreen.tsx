import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, TextInput, View, Text, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import { styles } from './style';
import { connect } from 'react-redux'
import { productsAction, addToCart } from '../../store/actions';
import HomeScreenHeader from '../../components/HomeScreenHeader';
import ProductList from '../../components/ProductList';
import { ProductListData } from '../../components/ProductsData';
import HorizentalProductList from '../../components/HorizentalProductList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation';
import { RootState } from '../../store';

interface props{
 productsAction:any,
 products:{data:{id: number;name: string;price: number;quantity: number;image: any;}[],count:number},
 addToCart:({})=>void;
 navigation:NativeStackNavigationProp<HomeStackParamList,'ProductDetail'>
}

const HomeScreen = ({ navigation, productsAction, products, addToCart }:props) => {

  const [searchText, setSearchText] = useState("");
  const [like, setLike] = useState(false)

  const { data, count } = products;

  useEffect(() => { productsAction() }, [])

  return (
    <SafeAreaView  style={styles.container}>
     <StatusBar animated={true} backgroundColor="#041455"  barStyle="dark-content" />
      <View style={styles.headerMainContainer}>
        <HomeScreenHeader navigation={navigation} count={count} />
        <TextInput
          placeholder='Search'
          style={styles.searchContainer}
          onChangeText={(text) => { setSearchText(text) }}
        />
      </View>

      <ScrollView>
        <HorizentalProductList
          data={ProductListData}
          searchText={searchText}
          navigation={navigation}
          addToCart={addToCart}
          like={like}
          setLike={setLike}
        />
        <ProductList
          data={data}
          navigation={navigation}
          searchText={searchText}
          addToCart={addToCart}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
const mapStateToProps = (state:RootState) => ({
  products: state.products,
})
const mapDispatchToProps = {
  productsAction,
  addToCart,

}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
