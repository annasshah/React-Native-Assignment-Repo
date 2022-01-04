import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { BottomMenuState } from '../config/redux/action/actions'
import styling from '../style'


const BottomMenu = ({navigation}) => {
  const state = useSelector(state => state.BottomMenuState.currentState)

  const [currentState, setcurrentState] = useState(state)

  console.log(currentState);

  const dispatch = useDispatch()


  let changeMenuHandleToHome = () => {
    BottomMenuState(dispatch,'HOME')
    setcurrentState('HOME')
    navigation.navigate('NewsPage')
    
  }
  
  let changeMenuHandleToSaved = () => {
    BottomMenuState(dispatch,'SAVED')
    setcurrentState('SAVED')
    navigation.navigate('SavedNews')

  }

  useEffect(() => {
    setcurrentState(state)

  }, [state])



    return (
        <View style={styles.bottomMenu}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={[styles.flex1, {alignItems: 'center'}]}
          onPress={changeMenuHandleToHome}
          
          >
            <Text style={currentState === 'HOME' ?{color:'#3A6FE6',fontWeight:'bold'}: {color:'#B4B4B4'}}>HOME</Text>
          </TouchableOpacity>
          <View>
            <Text>|</Text>
          </View>
          <TouchableOpacity style={[styles.flex1, {alignItems: 'center'}]}
          onPress={changeMenuHandleToSaved}
          
          >
            <Text style={currentState === 'SAVED' ?{color:'#3A6FE6',fontWeight:'bold'}: {color:'#B4B4B4'}}>SAVED</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}

export default BottomMenu

const styles = StyleSheet.create(styling)
