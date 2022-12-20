import React, { useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { styles } from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Rating } from 'react-native-elements';
import { addToCart } from '../../store/actions';
import { connect } from 'react-redux';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation';
import { RootState,AppDispatch} from '../../store';

interface props{
    route:RouteProp<HomeStackParamList,'ProductDetail'>
    navigation:NativeStackNavigationProp<HomeStackParamList>
    addToCart:({})=>void
    products:{count:string}
    

}

const ProductDetailScreen = ({ route, navigation, addToCart, products }:props) => {
  
    const data= route?.params?.data;
    const { count } = products;
    const [like, setLike] = useState(false)

    return (
        <SafeAreaView style={styles.productDetailContainer}>
            <ScrollView>
                <View style={styles.productDetailHeaderContainer}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <AntDesign name="arrowleft" size={20} color={'black'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("Cart") }}>
                        <Text style={styles.headerIconCount}>{count}</Text>
                        <FontAwesome5 name={'opencart'} color={"black"} size={25} />
                    </TouchableOpacity>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={data.image} resizeMode="contain" style={styles.image} />
                </View>
                <View>
                    <View style={styles.productInfoContainer}>
                        <Text style={styles.productName}>{data?.name}</Text>
                        <TouchableOpacity onPress={() => { setLike(!like) }}>
                            <AntDesign name={like ? 'heart' : 'hearto'} size={20} style={{ ...styles.productLikeIcon, color: like ? 'red' : "gray" }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.productRatingContainer}>
                        <View>
                            <Rating
                                imageSize={20}
                                style={styles.productRating}
                            />
                            <Text style={{ color: "gray" }}>(25 Reviews)</Text>
                        </View>
                        <Text style={styles.productPrice}>$ {data?.price}</Text>
                    </View>
                    <Text style={styles.aboutItemHeading}>About this Item</Text>
                    <Text style={styles.aboutText}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Text>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => { addToCart(data) }} style={styles.checkoutBtn}>
                    <Text style={styles.btnText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const mapStateToProps = (state:RootState) => ({
    products: state.products,
})
const mapDispatchToProps = {
    addToCart,
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailScreen)

