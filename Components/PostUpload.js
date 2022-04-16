import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import FormikPostUploader from './FormikPostUploader'

const PostUpload = ({navigation}) => {
    return (
        <View  >

            <Text style={styles.header}>NEW POST</Text>
            <FormikPostUploader navigation={navigation}/>
            
        </View>
    )
}

export default PostUpload

const styles = StyleSheet.create({
    header: {
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
        fontWeight: "700",
        

    }
})