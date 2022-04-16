import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import Upload from '../Screens/Upload'
import HomeScreen from '../Screens/HomeScreen'
import LoginScreen from '../Screens/LoginScreen'
import SignUpScreen from '../Screens/SignUpScreen'

const ScreenOptions={
    headerShown:false ,
}
const Stack = createNativeStackNavigator();

export const SignedInStack = () => {
    
    return (
         <NavigationContainer >
             <Stack.Navigator initialRouteName='HomeScreen' screenOptions={ScreenOptions}>
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="Upload" component={Upload}/>
                
             </Stack.Navigator>
         </NavigationContainer>
    )
}
export const SignedOutStack=()=>{

    return(
        <NavigationContainer >
        <Stack.Navigator initialRouteName='LoginScreen' screenOptions={ScreenOptions}>
           <Stack.Screen name="LoginScreen" component={LoginScreen}/>
           <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
)
}


