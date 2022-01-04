import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import styling from '../style'
import loadingGif from '../assets/images/logo.gif'


const LoadingComponent = () => {
    return (
        <View style={[styles.flex1,{justifyContent:'center',alignItems:'center'}]}>
            <Image style={{width:50,height:50}} source={loadingGif}/>
        </View>
    )
}

export default LoadingComponent

const styles = StyleSheet.create(styling)
