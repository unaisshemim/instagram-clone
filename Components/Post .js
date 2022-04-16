
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

const Post = ({ post }) => {


    return (
        <View style={{ marginBottom: 70, }}>

            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post}/>
            <PostFooter post={post}/>
            <Likes post={post}/>
            <Caption post={post}/>
            {/* <Comment post={post}/> */}
        </View>
    )
}
const PostHeader = ({ post }) => (
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5,
            alignItems: 'center'
        }}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Image source={{ uri: post.profilePicture }} style={styles.postHeader} />
          <Text style={{color:'white',fontWeight:'500'}}>{post.user} </Text>
          </View>
             <View>           
        <Text style={{
            color: 'white',
            fontWeight: '900',
            alignItems:'center',
            justifyContent:'center',
            margin: 9            
        }}>...</Text>
        </View>
    </View>
)
const PostImage=({post})=>(
    <View style={{height:450,width:"100%"}}>
        <Image source={{uri:post.imageUrl}} style={{height:"100%" ,resizeMode:'cover'}} />
    </View>
)

const PostFooter=({post})=>(
    <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        margin: 5
    }}>
        <View style={{
        flexDirection:'row',
        marginStart:5
    }}>

        <Image source={{uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'}} style={{marginEnd:0,width:35,height:35,}}  />
        <Image source={{uri:'https://img.icons8.com/ios/50/ffffff/topic.png'}} style={{width:30,height:30,marginEnd:10}}/>
        <Image source={{uri:'https://img.icons8.com/ios/50/ffffff/sent.png'}} style={{width:30,height:30}}/>
         </View>
         <View>
         <Image source={{uri:'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik00NC4wNzUsNi44OGMtMS42MzkzNywwLjMwOTA2IC0yLjgyMTg3LDEuNzYwMzEgLTIuNzk1LDMuNDR2MTUxLjM2Yy0wLjAxMzQ0LDEuMjM2MjUgMC42NDUsMi4zNzg0NCAxLjcwNjU2LDIuOTk2NTZjMS4wNjE1NiwwLjYzMTU2IDIuMzc4NDQsMC42MzE1NiAzLjQ1MzQ0LDAuMDEzNDRsMzkuNTYsLTIzLjExMjVsMzkuNTYsMjMuMTEyNWMxLjA3NSwwLjYxODEzIDIuMzkxODgsMC42MTgxMyAzLjQ1MzQ0LC0wLjAxMzQ0YzEuMDYxNTYsLTAuNjE4MTMgMS43MiwtMS43NjAzMSAxLjcwNjU2LC0yLjk5NjU2di0xNTEuMzZjMCwtMS44OTQ2OSAtMS41NDUzMSwtMy40NCAtMy40NCwtMy40NGgtODIuNTZjLTAuMTA3NSwwIC0wLjIxNSwwIC0wLjMyMjUsMGMtMC4xMDc1LDAgLTAuMjE1LDAgLTAuMzIyNSwwek00OC4xNiwxMy43Nmg3NS42OHYxNDEuOWwtMzYuMTIsLTIxLjA3Yy0xLjA2MTU2LC0wLjYxODEyIC0yLjM3ODQ0LC0wLjYxODEyIC0zLjQ0LDBsLTM2LjEyLDIxLjA3eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+'}} style={{width:30,height:30,}}/>
         </View>
    </View>
)

const  Likes=({post})=>(
    <View>
        <Text style={{color:'white',fontWeight:'600',marginStart:10,marginTop:2}}>{post.likes.length} likes</Text>
    </View>
)

const Caption =({post})=>(
<Text style={{color:'white',marginStart:10}}>
    <Text style={{fontWeight:'600'}}>{post.user}</Text>
    <Text style={{marginStart:10}}>{post.caption}</Text>
</Text>
)
const Comment =({post})=>(
    <View style={{marginTop:5}}>
       {post.comments.length > 0 ?
       <View><Text style={{color:'grey',marginLeft:8}}>
           View {post.comments.length > 0 ? 'all' :''} {post.comments.length } {post.comments.length > 0 ? 'comments' :'comment'}
           </Text></View>:''
       }
        </View>
)



const styles = StyleSheet.create({
    postHeader: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginRight: 10,
        borderWidth: 3,
        borderColor: "#ebad1e",
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default Post

