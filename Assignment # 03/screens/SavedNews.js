import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import styling from '../style'

const SavedNews = () => {
    return (
        <View style={[styles.flex1, {justifyContent: 'space-between',marginBottom:15,paddingBottom:15,borderBottomWidth:2,borderBottomColor:'#E9E9E9'}]}>
        <View style={styles.listItemMain}>
          <View>
            <View style={styles.listViewRenderImageMain}>
              <Image
                style={{width: 100, height: 110,overflow:'hidden',borderRadius:5,}}
                source={{
                  uri:
                    'https://techcrunch.com/wp-content/uploads/2021/01/TuSimple_Fleet.jpg?w=759',
                }}
              />
            </View>
          </View>

          <View style={styles.listViewDetailsMain}>
            <Text style={{fontSize: 10, color: '#AEAEAE'}}>
              Al Jazeera English
            </Text>

            <Text
              style={[styles.fs6, {fontWeight: 'bold', color: 'black'}]}>
              The Investing Highs And Lows Of 2021
            </Text>

            <Text
              style={{fontSize: 10, color: 'black'}}>
              Any way you look at it, 2021 was an eventful year—from a new president to new virus
            </Text>

            <Text style={{fontSize: 9, color: '#AEAEAE'}}>
              Alyssa Stringer, Miranda Halpern
            </Text>
            <Text style={{fontSize: 9, color: '#AEAEAE'}}>
              2021-12-30 19:23:17
            </Text>
          </View>
        </View>
      </View>
    )
}

export default SavedNews

const styles = StyleSheet.create(styling)
