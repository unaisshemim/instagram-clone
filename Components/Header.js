

import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import {firebase} from '../firebase'


const SignedOut=async()=>{
try{
    await firebase.auth().signOut()
    console.log("success")
}catch(error){
    console.log(error)
}
}

const Header = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={SignedOut}
            >

                <Image style={styles.headerLogo} source={require('../assets/header-logo.png')} />
            </TouchableOpacity>
            <View style={styles.containerLeft}>
                <TouchableOpacity onPress={()=>navigation.navigate('Upload')}>

                    <Image source={{
                        uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'
                        
                    }} style={styles.icons}/>
                   
                </TouchableOpacity>

                <TouchableOpacity >
                    <View style={styles.unreadBadege}>
                        <Text style={styles.unreadBadegeText}>2</Text>
                    </View>
                    <Image source={{
                        uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'

                    }} style={styles.icons} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({


    headerLogo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
        marginHorizontal: 8


    },
    container: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 5


    },
    containerLeft: {
        display: "flex",
        flexDirection: 'row',
        marginEnd: 8,
    },
    icons: {

        width: 30,
        height: 30,
        marginLeft: 3,
    }
    ,
    unreadBadege:{
        backgroundColor:'red',
        position: 'absolute',
        width: 25,
        height: 18,
        bottom:18,
        left:20,
        top:-4,
        borderRadius:25,
        zIndex:100,
        alignItems:'center',
        justifyContent:'center'
    },
    unreadBadegeText:{
        color: 'white',
        fontWeight:"600"
    }
})
export default Header
