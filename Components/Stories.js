
import {User} from '../assets/data'
import React from 'react'
import { View, Text,ScrollView, Image, StyleSheet } from 'react-native'

const Stories = () => {
    console.log(User.user);
    return (
        
        <View style={{marginBottom:20}}>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
             {User.map((item,index)=>(
                <View key={index}>

                <Image style={styles.story} source={{uri:item.image}}/>
                 
                    <Text style={{color:"white",textAlign:'center'}}>{item.user.length > 8 ? item.user.slice(0,7).toLowerCase() + '...' :item.user.toLowerCase()}</Text> 
                </View>
             ))}
               </ScrollView> 
               
        </View>
    )
}
const styles =StyleSheet.create({
    story:{
        width:70,
        height: 70,
        borderRadius:50,
        marginRight:10,
        borderWidth:3,
        borderColor:"#ebad1e",
        justifyContent:'center',
        alignItems:'center',
        

        
        
        

    },
})

export default Stories
