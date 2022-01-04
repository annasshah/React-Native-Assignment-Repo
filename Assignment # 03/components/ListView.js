import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import styling from '../style'

const ListView = ({data}) => {
  const {title,description,url,urlToImage,publishedAt,content,source,author} = data
    return (
        <View style={[styles.flex1, {justifyContent: 'space-between',marginBottom:15,paddingBottom:15,borderBottomWidth:2,borderBottomColor:'#E9E9E9'}]}>
        <View style={styles.listItemMain}>
          <View>
            <View style={styles.listViewRenderImageMain}>
              <Image
                style={{width: 100, height: 110,overflow:'hidden',borderRadius:5,}}
                source={{
                  uri:urlToImage,
                }}
              />
            </View>
          </View>

          <View style={styles.listViewDetailsMain}>
            <Text style={{fontSize: 10, color: '#AEAEAE'}}>
              {source.name}
            </Text>

            <Text
              style={[styles.fs6, {fontWeight: 'bold', color: 'black'}]}>
              {(title).slice(0,50)}...
            </Text>

            <Text
              style={{fontSize: 10, color: 'black'}}>
              {content? `${(content).slice(0,75)}...` : '...'}
            </Text>

            <Text style={{fontSize: 9, color: '#AEAEAE'}}>
             {author}
            </Text>
            <Text style={{fontSize: 9, color: '#AEAEAE'}}>
              {publishedAt}
            </Text>
          </View>
        </View>
      </View>
    )
}

export default ListView

const styles = StyleSheet.create(styling)
