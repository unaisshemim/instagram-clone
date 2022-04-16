import { View, Text, StyleSheet, Button, Pressable, Alert } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Validator from 'email-validator'
import {firebase} from'../firebase'






const Schema =Yup.object().shape({
    email:Yup.string().email().required("enter you valid email"),
    password:Yup.string().required().min(6,'your password have atleast 8 character')
});   
const Logo="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-256.png" 
const LoginScreen = ({navigation}) => 

{
const onLogin=async(email,password)=>{
    try{
        await firebase.auth().signInWithEmailAndPassword(email,password)
        console.log("logged successfully");
    }catch(error){
        Alert.alert(error.message)
        console.log('invalid password')
    }
}
    return(
     <View style={styles.container}>
    <Formik
    initialValues={{email:'',password:''}}
    onSubmit={(values)=>{onLogin(values.email,values.password)}}
    validateOnMount={true}
    validationSchema={Schema}>
        {({handleChange,handleSubmit,handleBlur,values,isValid})=>(
            <>
            <View style={styles.logoContainer}>
            <Image source={{uri:Logo,height:100,width:100}}
            />
           </View>
           <View style={styles.inputContainer}>
               <TextInput 
               onBlur={handleBlur('email')}
               onChangeText={handleChange('email')}
               value={values.email}
               placeholderTextColor={"#142423"} placeholder='Email , usename or mobile number'   
               style={[styles.input,{
                borderColor:values.email.length < 1 || Validator.validate(values.email) ? 'grey':'red',
               }]}
                autoFocus={true} 
                textContentType='emailAddress'/>
               
               <TextInput 
               onBlur={handleBlur('password')}
               onChangeText={handleChange('password')}
               value={values.password}
               
               placeholderTextColor={"#142423"}
                placeholder='password' secureTextEntry={true}   
                style={[styles.input,{
                    borderColor:values.password.length < 1 ||values.password.length >= 6 ? 'grey':'red',
                   }]} />
                <TouchableOpacity>
                   <Text style={styles.forgot}>Forgot Password ? </Text>
                   </TouchableOpacity>
                   <TouchableOpacity >
                       
               <Button title='Login'  onPress={handleSubmit} disabled={!isValid}></Button>
                   </TouchableOpacity>
        
           </View>
           <Text style={styles.signUp}>Dont have an Account ?<Pressable onPress={()=>navigation.navigate('SignUpScreen')}><Text style={{color:'#2390cf',fontWeight:'700',marginTop:7}}> SignUp</Text></Pressable></Text>
        </>
        )}
</Formik>
</View>)
   
}


   
 
 
 ;
const styles=StyleSheet.create({
    container:{
        flex:1,
        
    },
    logoContainer:{
        alignItems:'center',
        marginTop:80
    },
    inputContainer:{
        marginTop:80,
        
    },
    input:{ 
        padding:5,
        borderWidth:1,
        marginLeft:10,
        marginRight:10,
        fontSize:15,
        marginBottom:10,
        backgroundColor:'#e6e9ed',
        color:"black",
        borderRadius:4,
        
    },
    forgot:{
        color: '#2390cf',
        fontSize:15,
        fontWeight:'700',
        marginStart:250,
        marginBottom:20,
        
   
    },
    signUp:{
        fontSize:17,
        marginTop:60,
        marginStart:70
    }

})

export default LoginScreen;
