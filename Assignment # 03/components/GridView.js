import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import styling from '../style'


const GridView = ({data}) => {
  
  const {title,description,url,urlToImage,publishedAt,content,source,author} = data


  return (
    <View style={styles.GridItemContainer}>
      <View style={styles.GridItemMain}>
        <View>
          <View>
            <Image
              style={{resizeMode: 'cover', width: 400, height: 150}}
              source={{
                uri:urlToImage,
              }}
            />
          </View>
        </View>

        <View style={styles.GridViewDetailsMain}>
          <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
            <Text style={{fontSize: 12, color: '#AEAEAE',marginEnd:10}}>
              {source.name}
            </Text>
            {/* <Text style={{fontSize: 10, color: '#AEAEAE',marginEnd:10}}>-</Text>
            <Text style={{fontSize: 10, color: '#3A6FE6',marginEnd:10}}>
              Technology
            </Text> */}
          </View>

          <Text style={[styles.fs5, {fontWeight: 'bold', color: 'black'}]}>
            {title}
          </Text>

          <Text style={{fontSize: 12, color: 'black'}}>
          {content? `${(content).slice(0,90)}...` : '...'}
          </Text>

         

         <View  style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between', marginTop:5}}>
         <Text style={{fontSize: 10, color: '#AEAEAE'}}>
            {author? author : 'anonymous'}
          </Text>
          <Text style={{fontSize: 10, color: '#AEAEAE'}}>
           {publishedAt}
          </Text>
         </View>
        </View>
      </View>
    </View>
  )
}

export default GridView

const styles = StyleSheet.create(styling)
