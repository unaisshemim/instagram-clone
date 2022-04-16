import * as React from "react";
import {  StatusBar,StyleSheet, Platform, View } from "react-native";
import AuthNavigation from "./AuthNavigation";





export default function App() {

  
    

  return (

    

    <View style={styles.androidView}>
      <AuthNavigation/>
      
    </View>
  
    
  );
}
const styles =StyleSheet.create({
  androidView:{
     paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex:1,
    backgroundColor:"#0a0a0a"
    
  
   
    
   
    
  }
})
