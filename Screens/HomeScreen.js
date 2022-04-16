import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View} from 'react-native'
import Header from '../Components/Header'
import Post from '../Components/Post '
import Stories from '../Components/Stories'
import { Posts } from '../assets/Post'
import Footer from '../Components/Footer'
import { db } from '../firebase'
const HomeScreen = ({navigation}) => {
    const [post,setPost]=useState([])
    useEffect(()=>{
        db.collectionGroup('posts').onSnapshot(snapshot =>{
            setPost(snapshot.docs.map(doc=>doc.data()))
        })
    },[])


    return (
        <View style={styles.container}>
            
       <Header navigation={navigation}/>
       
       <Stories/>
       <ScrollView>
       {post.map((post,index)=>(    
           <Post  post={post} key={index}/>
           ))}
           </ScrollView>
          
               
           <Footer />
        
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex: 1,
    }
})
export default HomeScreen;
