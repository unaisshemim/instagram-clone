import React, { useState } from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'
import {bottomTabIcons} from '../assets/Bottom Tab Icons'
const Footer = () => {
    const [clicked,setClicked]=useState('Home');
     console.log(clicked)
    return (
        <View style={styles.wrapper}> 
            <Divider width={1} orientation='vertical' />          
        <View style={{flexDirection:'row',justifyContent:'space-around',padding:10}}>
        {bottomTabIcons.map((item,index)=>(
            <TouchableOpacity  key={index} onPress={()=>(setClicked(item.name))}>
                <View >

            <Image  source={{uri:clicked === item.name ? item.active:item.inactive}} style={[
                styles.icons,
                item.name === 'Profile' ? styles.profilePic():null,
                clicked === 'Profile' && item.name === 'Profile' ? styles.profilePic(clicked):null
        ]}/>
                </View>
            </TouchableOpacity>
            ))}           
            </View>
          
        </View>
    )
}
const styles=StyleSheet.create({
    icons:{
        width: 30,
        height: 30,
        borderWidth:1,
        
        
      
    }, wrapper:{
        width:'100%',
       position:'absolute',
       bottom: '0%',
       zIndex:999,
       backgroundColor:'black',
       


     
    },
    profilePic:( clicked = '')=>({
        borderRadius:50,
        borderWidth:clicked === 'Profile' ? 2:0,
        borderColor:'#fff'
    })

})
export default Footer
 
