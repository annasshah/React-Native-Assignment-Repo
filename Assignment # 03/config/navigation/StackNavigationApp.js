import React, { useEffect } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import WelcomeScreen from '../../screens/WelcomeScreen'
import NewsPage from '../../screens/NewsPage'
import SavedNews from '../../screens/SavedNews'
import BottomMenu from '../../components/BottomMenu'
import getData from '../redux/action/actions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'





function StackNavigationApp () {

  const userState = useSelector(state => state.UserDataReducer.user)  

  const Stack = createNativeStackNavigator()


  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='WelcomeScreen' options={{headerShown:false}}  component={WelcomeScreen} />
          <Stack.Screen name='NewsPage' options={{headerShown:false}}  component={NewsPage} />
          <Stack.Screen name='SavedNews' component={SavedNews} />
        </Stack.Navigator>
        {/* {userState?<BottomMenu />:null} */}
      </NavigationContainer>
    </>
  )
}

export default StackNavigationApp

