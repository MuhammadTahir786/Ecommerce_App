import React from 'react'
import { View, TouchableOpacity, Text,StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { HomeStackParamList } from '../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface props{
    navigation:NativeStackNavigationProp<HomeStackParamList>
    count:number
}

const HomeScreenHeader = ({ navigation, count }:props) => {
    return (

        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Products</Text>
            <TouchableOpacity onPress={() => { navigation.navigate("Cart") }}>
                <Text style={styles.headerIconCount}>{count}</Text>
                <FontAwesome5 name={'opencart'} color={"white"} size={25} />
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreenHeader

const styles = StyleSheet.create({
    headerContainer: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10, marginVertical: 20 },
    headerText: { color: "white", fontSize: 25, fontWeight: "bold" },
    headerIconCount: { backgroundColor: "red", width: 20, borderRadius: 50, textAlign: "center", color: "white", position: "absolute", zIndex: 1, right: 25 },
})