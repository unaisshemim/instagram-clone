import React, { useEffect } from 'react'
import { View, Text, TextInput, Button, } from 'react-native'
import {Formik} from 'formik'
import * as Yup from 'yup';
import { Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import ValidUrl from 'valid-url'
import {firebase,db} from '../firebase'


const PlaceHolderImg="https://empowher.org/wp-content/uploads/2021/03/image-placeholder-350x350-1.png"

const UploadPostSchema= Yup.object().shape({
    imageUrl:Yup.string().url().required(' A url is required'),
    caption:Yup.string().max(2200,'Caption has reached its maximim character')
})
const FormikPostUploader = ({navigation}) => {
    const [thumbnailUrl,setThumnailUrl]=useState(PlaceHolderImg)
    const [currentLoggedInUser,setCurrentLoggedInUser]=useState(null)

    const getUserName=async()=>{
        const user= await firebase.auth().currentUser
        const unSubscribe =db
        .collection('users')
        .where('owner_uid','==',user.uid).limit(1).onSnapshot(
            snapshot => snapshot.docs.map(doc=>{
                setCurrentLoggedInUser({
                    username:doc.data().username,
                    profilePicture:doc.data().profilePicture
                })
            }))
        return unSubscribe;
        }

        useEffect(()=>getUserName(),[])

        const uploadPostToFirebase=(imageUrl,caption)=>{
            const unsubscribe=db
            .collection('users')
            .doc(firebase.auth().currentUser.email)
            .collection('posts')
            .add({
                imageUrl:currentLoggedInUser.profilePicture,
                user:currentLoggedInUser.username,
                profile_Picture:currentLoggedInUser.profilePicture,
                owner_uid:firebase.auth().currentUser.uid,
                caption:caption,
                createdAt:firebase.firestore.FieldValue.serverTimestamp(),
                likes:0,
                likes_by_user:[4],
                Comments:[]               

            })
         
            .then(()=>navigation.goBack())
            return unsubscribe
        }
    return (
        <Formik
        initialValues={{caption:'',imageUrl:''}}
        onSubmit={(values)=>{
            uploadPostToFirebase(values.imageUrl,values.caption)
           
        }
        }
        validationSchema={UploadPostSchema}
        validateOnMount={true}
        >
            {({handleBlur,handleChange,handleSubmit,values,errors,isValid})=>
            
            < >
            <View style={{flexDirection:'row',alignItems:'flex-start',padding:20}}>
                <Image source={{uri:ValidUrl.isUri(thumbnailUrl) ? thumbnailUrl:PlaceHolderImg}}
                style={{
                    width:130,
                    height: 130,
                }}/>
             <TextInput
             placeholder='Enter your caption' 
            placeholderTextColor='grey' 
            style={{color:'white',fontSize:18,marginStart:10}}
            multiline={true}
            onBlur={handleBlur('caption')}
            onChangeText={handleChange('caption')}
            value={values.caption}
            />
            </View>
            <Divider width={0.2} orientation='vertical'/>
            
            <TextInput placeholder='Enter Url'
            placeholderTextColor='grey'
             style={{color:'white',fontSize:18,marginStart:20}}
             multiline={true}
             onBlur={handleBlur('imageUrl')}
             onChangeText={handleChange('imageUrl')}
             value={values.imageUrl}
             onChange={(e)=>setThumnailUrl(e.nativeEvent.text)}

             />
             {errors.imageUrl && (
                 <Text style={{fontSize:15,color:'red'}}>
                     {errors.imageUrl}
                 </Text>
             )}
        
                    <TouchableOpacity style={{marginTop:9}}>
                        
                <Button title='share'  onPress={handleSubmit} disabled={!isValid}></Button>
                    </TouchableOpacity>
 
            </>
            }
        </Formik>
    )
}

export default FormikPostUploader
