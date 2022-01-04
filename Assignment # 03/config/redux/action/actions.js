import axios from 'axios'

let changeLayout = (dispatch, state) => {
  return dispatch({
    type: 'LAYOUTVIEW',
    listView: state,
  })
}

let getData = (dispatch) => {

  const apiHandle = axios.create({
    baseURL:
      'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cd48e970b9e04304ac53a55cc9b78fb2',
  })

  apiHandle.get().then(e => {
    dispatch({
      type: 'NEWSDATA',
      isLoading: false,
      data: e.data,
    })
  })
}

let updateUserDetails = (dispatch,name) => {
  return dispatch({
    type:'USERDATA',
    user:true,
    userName:name
  })
}

let BottomMenuState = (dispatch,state) => {
  return dispatch({
    type:'BOTTOMMENUSTATE',
    currentState:state

   
  })
}




export {changeLayout, getData, updateUserDetails,BottomMenuState}
