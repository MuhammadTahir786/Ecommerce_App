import React, { useEffect, useState, useRef } from 'react'
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
import Animated from 'react-native-reanimated';
import { useWindowDimensions } from 'react-native';

interface props {
  productsAction: any,
  products: { data: { id: number; name: string; price: number; quantity: number; image: any; }[], count: number },
  addToCart: ({ }) => void;
  navigation: NativeStackNavigationProp<HomeStackParamList, 'ProductDetail'>
}

const HomeScreen: React.FC<props> = ({ navigation, productsAction, products, addToCart }): JSX.Element => {

  const [searchText, setSearchText] = useState("");
  const [like, setLike] = useState(false)
  const { width, height } = useWindowDimensions();
  const { data, count } = products;

  useEffect(() => { productsAction() }, [])


  const scrollPosition = useRef(new Animated.Value(0)).current;
  const minHeaderHeight = 120
  const maxHeaderHeight = 150

  const headerHeight = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [maxHeaderHeight, minHeaderHeight],
  });
  const opacity = scrollPosition.interpolate({
    inputRange: [0, 100, 200],
    outputRange: [1, 0.5, 0],
  });
  const searchPosition = scrollPosition.interpolate({
    inputRange: [0, 400],
    outputRange: [0, -40],
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#041455" barStyle="dark-content" />
      <Animated.View style={{ ...styles.headerMainContainer, height: headerHeight }}>
        <HomeScreenHeader navigation={navigation} count={count} opacity={opacity} />
        <Animated.View style={{ transform: [{ translateY: searchPosition }] }}>
          <TextInput
            placeholder='Search'
            placeholderTextColor={"black"}
            style={styles.searchContainer}
            onChangeText={(text) => { setSearchText(text) }}
          />
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollPosition } } }],
          { useNativeDriver: false },
        )}
        contentInsetAdjustmentBehavior="automatic"
      >
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
      </Animated.ScrollView>
    </SafeAreaView>
  )
}
const mapStateToProps = (state: RootState) => ({
  products: state.products,
})
const mapDispatchToProps = {
  productsAction,
  addToCart,

}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
