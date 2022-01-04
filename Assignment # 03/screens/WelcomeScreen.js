import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import logo from '../assets/images/logo.png'
import gifImage from '../assets/images/welcome-screen.gif'
import styling from '../style'
import { getData, updateUserDetails } from '../config/redux/action/actions'

const WelcomeScreen = ({navigation}) => {

  const [userName, setUserName] = useState()
  const [msg, setMsg] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    getData(dispatch)
  }, [])


  let pressHandle = () => {
    if(!userName){
      setMsg(true)
      
    }
    else{
      updateUserDetails(dispatch,userName)
      navigation.navigate('NewsPage')
    }
  }

  let userNameHandle = (e) => {
    setMsg(false)
    setUserName(e)
  }

  const state = useSelector(state => state)

  return (
    <View style={[styles.container,{paddingHorizontal: 40,backgroundColor:'white'}]}>
      <View style={styles.logoContainer}>
        <View>
          <Image style={styles.logoMain} source={logo} />
        </View>
      </View>
      <View style={styles.gifImageContainer}>
        <View>
          <Image source={gifImage} />
        </View>
      </View>

      <View style={styles.firstScreenInputMain}>
        <TextInput
        onChangeText={(e)=>userNameHandle(e)}
          style={styles.firstScreenInput}
          placeholder='Enter your name'
        />

        {msg && <Text style={{color:'red',fontSize:13, textAlign:'center',marginTop:8,marginBottom:-5}}>Please Enter Your Name!</Text>
}

        <TouchableOpacity onPress={pressHandle} style={styles.getStartedBtn}>
          <View style={styles.getStartedBtnMain}>
            <Text style={styles.getStartedBtnText}>Check News </Text>
            <View style={{marginStart: 5}}>
              <AntDesign name={'arrowright'} size={25} color='white' />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create(styling)
