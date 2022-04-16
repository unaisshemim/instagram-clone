import React from 'react'
import {SafeAreaView} from 'react-native'
import PostUpload from '../Components/PostUpload'

const Upload = ({navigation}) => {
    return (
        
             <SafeAreaView style={{backgroundColor:'black',flex:1}}>         
            <PostUpload navigation={navigation}/>
            </SafeAreaView>
        
    )
}

export default Upload


