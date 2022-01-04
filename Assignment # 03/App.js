import React, { useEffect } from 'react'
import {Provider} from 'react-redux'
import StackNavigationApp from './config/navigation/StackNavigationApp'
import store from './config/redux/store/store'
import axios from 'axios'

function App () {

  
  return (
    <>
      <Provider store={store}>
        <StackNavigationApp />
      </Provider>
    </>
  )
}

export default App

