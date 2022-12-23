import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar,View,Text } from 'react-native'
import { HomeStackParamList } from '../../navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from './style';

interface props{
    navigation:NativeStackNavigationProp<HomeStackParamList,"Splash">
}

const Splash:React.FC<props> = ({navigation}):JSX.Element => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }]
           })
        },3000)
    },[])
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} backgroundColor="#041455" barStyle="dark-content" />
            <View style={styles.subContainer}>
                <FontAwesome5 name="opencart" color={"#FFF"} size={100}/>
             <Text style={styles.text}>Ecommerce App</Text>
            </View>
        </SafeAreaView>
    )
}
export default Splash