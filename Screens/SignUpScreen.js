import { View, Text, StyleSheet, Button, Pressable } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { TextInput } from 'react-native';
import { TouchableOpacity,Alert } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Validator from 'email-validator'
import {firebase} from '../firebase'
import {db } from '../firebase'

const Schema =Yup.object().shape({
    email:Yup.string().email().required("enter you valid email"),
    username:Yup.string().required().min(4,'user name is required'),
    password:Yup.string().required().min(8,'your password have atleast 8 character')
})



const Logo="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-256.png" 


const SignUpScreen = ({navigation}) => {

 const getRandomProfilePicture=async()=>{
    const response= await fetch('https://randomuser.me/api/')
    const data = await response.json();
    return data.results[0].picture.large
 }



const onSignUp=async(email,password,username)=>{

    try {
        const authUser =  await firebase.auth().createUserWithEmailAndPassword(email,password)
        console.log("signup success")
        
            db.collection('users').doc(authUser.user.email).set({
                owner_uid:authUser.user.uid,
                username:username,
                email:authUser.user.email,
                profilePicture:await getRandomProfilePicture(),
            })

    }catch(error){
        Alert.alert(error.message)
        console.log("not success")
    }

}
  return(
        <>
   <View style={styles.container}>
  <Formik
initialValues={{email:'',username:'',password:''}}
onSubmit={(values)=>{onSignUp(values.email,values.password,values.username)}}
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
           onBlur={handleBlur('username')}
           onChangeText={handleChange('username')}
           value={values.username}
           placeholderTextColor={"#142423"} placeholder=' username '   
           style={[styles.input,{
               borderColor:values.username.length < 1 ||values.username.length > 4   ? 'grey':'red',
            }]}
            autoFocus={true} 
            />
           
           <TextInput 
           onBlur={handleBlur('password')}
           onChangeText={handleChange('password')}
           value={values.password}
           
           placeholderTextColor={"#142423"}
           placeholder='password' secureTextEntry={true}   
           style={[styles.input,{
               borderColor:values.password.length < 1 ||values.password.length > 8 ? 'grey':'red',
            }]} />
            
               <TouchableOpacity >
                   
           <Button title='Login'  onPress={handleSubmit} disabled={!isValid}></Button>
               </TouchableOpacity>
    
       </View>
       <Text style={styles.signUp}>Dont have an Account ?<Pressable onPress={()=>navigation.navigate('LoginScreen')}><Text style={{color:'#2390cf',fontWeight:'700',marginTop:7}}> SignUp</Text></Pressable></Text>
    </>
    )}
</Formik>
</View>
    </>
    );
}
    
    
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

export default SignUpScreen;
