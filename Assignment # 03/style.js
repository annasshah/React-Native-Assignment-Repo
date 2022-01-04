let mainColor = '#3A6FE6'

const styling = {
  container: {
    height: '100%',
    // paddingHorizontal: 40,
  },

  logoContainer: {
    elevation: 2,
    paddingVertical: 20,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  gifImageContainer: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  firstScreenInputMain: {
    flex: 3,
    alignItems: 'center',
  },

  firstScreenInput: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#B3CAFF',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    fontSize: 16,
  },
  getStartedBtn: {
    marginVertical: 15,
    backgroundColor: mainColor,
    width: '100%',
    paddingVertical: 10,
    borderRadius: 12,
  },
  getStartedBtnMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedBtnText: {
    color: 'white',
    alignItems: 'center',
    fontSize: 16,
  },
  topLogoMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  fs: {
    fontSize: 16,
  },
  fs1: {
    fontSize: 32,
  },
  fs2: {
    fontSize: 26,
  },
  fs3: {
    fontSize: 22,
  },
  fs4: {
    fontSize: 20,
  },
  fs5: {
    fontSize: 18,
  },
  fs6:{
    fontSize:15
  },


  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },

  newsContainer: {
    flex: 6,
  },

  searchBarMain: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 10,
  },

  searchBar: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 33,
    borderColor: '#B3CAFF',
  },
  searchInput: {
    flex: 9,
    fontSize: 16,
  },
  searchIcon: {
    flex: 1,
  },
  categoryButtonsMain: {
    flex: 0.5,
  },

  categoryButton: {
    marginRight: 12,
    borderRadius: 20,
    borderColor: '#DBDBDB',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 3,
  },


  bottomMenu: {
    height: 55,
    justifyContent: 'center',
    borderTopColor:'#E9E9E9',
    borderTopWidth:2
  },

  listViewRenderImageMain:{
    flex:2,
    marginRight:10
  },
  listItemMain:{
    alignItems:'center',
    flexDirection:'row'
  },
  listViewDetailsMain:{
    flex:5
  },


  GridItemContainer:{
    paddingBottom:15,
    marginBottom:15,
    borderBottomWidth:2,
    borderBottomColor:'#E9E9E9',

  },
  GridViewDetailsMain:{
    width:'100%'

  },


  GridItemMain:{
    alignItems:'center',

  }

  //   logoMain:{
  //     height:65,
  //     width:200,
  //     resizeMode:'cover'

  //   },

  // logo: {
  //   width: 190,
  //   height: 85,
  // },
  // headerLogo: {
  //   width: 50,
  //   height: 65,
  // },
  // logoBox: {
  //   paddingVertical: 40,
  // },

  // heading: {
  //   fontSize: 25,
  // },
}

// let _dark = '#1b568d';
// let _light = '#fffcf2';
// let obj = {
//   headerTitle: {
//     fontSize: 25,
//     color: _dark,
//     textAlign: 'left',
//     borderBottomWidth: 2,
//     borderBottomColor: _dark,
//   },
//   header: {
//     backgroundColor: _dark,
//     color: 'white',
//     height: 40,
//     width: '100%',
//   },
//   headerContainer: {
//     width: 350,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-end',
//   },
//   container: {
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 1,
//   },
//   container2: {
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 2,
//   },
//   container3: {
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 3,
//   },
//   container4: {
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 4,
//   },
//   container5: {
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 5,
//   },
//   w100: {
//     width: '100%',
//   },
//   _h1: {
//     fontSize: 32,
//   },
//   _h2: {
//     fontSize: 26,
//   },
//   dark: {
//     color: _dark,
//   },
//   bgdark: {
//     backgroundColor: _dark,
//   },
//   bglight: {
//     backgroundColor: _light,
//   },
//   bgWhite: {
//     backgroundColor: 'white',
//   },
//   light: {
//     color: 'white',
//   },
//   main: {
//     flex: 1,
//   },
//   heading: {
//     fontSize: 30,
//     backgroundColor: 'rgba(0,0,0,.2)',
//     color: 'white',
//     padding: 15,
//     margin: 10,
//   },
//   input: {
//     height: 50,
//     width: 300,
//     padding: 15,
//     fontSize: 16,
//     borderRadius: 15,
//     backgroundColor: 'rgb(255,255,255)',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.32,
//     shadowRadius: 5.46,

//     elevation: 9,
//   },
//   inputBox: {
//     paddingVertical: 10,
//   },
//   logo: {
//     width: 190,
//     height: 85,
//   },
//   headerLogo: {
//     width: 150,
//     height: 65,
//   },
//   logoBox: {
//     paddingVertical: 40,
//   },
//   btn: {
//     backgroundColor: _dark,
//     color: 'white',
//     height: 50,
//     width: 300,
//     padding: 15,
//     fontSize: 16,
//     borderRadius: 25,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.32,
//     shadowRadius: 5.46,

//     elevation: 9,
//   },
//   txtWhite: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 16,
//   },
//   text_white: {
//     color: 'white',
//   },
//   txtprime: {
//     color: _dark,
//     fontSize: 18,
//     textAlign: 'center',
//   },
//   signUpTxt: {
//     fontSize: 25,
//     color: _dark,
//   },
//   signUpBtn: {
//     width: '100%',
//   },
 
//   shadow1: {
//     shadowColor: 'rgba(0,0,0,.5)',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.23,
//     shadowRadius: 2.62,

//     elevation: 4,
//   },
//   shadow2: {
//     shadowColor: 'rgba(0,0,0,.5)',
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: 4.65,

//     elevation: 8,
//   },
//   shadow3: {
//     shadowColor: 'rgba(0,0,0,.5)',
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     shadowOpacity: 0.37,
//     shadowRadius: 7.49,

//     elevation: 12,
//   },
//   shadow4: {
//     shadowColor: 'rgba(0,0,0,.5)',
//     shadowOffset: {
//       width: 0,
//       height: 8,
//     },
//     shadowOpacity: 0.44,
//     shadowRadius: 10.32,

//     elevation: 16,
//   },
//   shadow5: {
//     shadowColor: 'rgba(0,0,0,.5)',
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 0.51,
//     shadowRadius: 13.16,

//     elevation: 20,
//   },
//   shadow6: {
//     shadowColor: 'rgba(0,0,0,.5)',
//     shadowOffset: {
//       width: 0,
//       height: 12,
//     },
//     shadowOpacity: 0.58,
//     shadowRadius: 16.0,

//     elevation: 24,
//   },
//   p1: {
//     padding: 10,
//   },
//   p2: {
//     padding: 20,
//   },
//   p3: {
//     padding: 30,
//   },
//   p4: {
//     padding: 40,
//   },
//   p5: {
//     padding: 50,
//   },
//   py1: {
//     paddingVertical: 10,
//   },
//   py2: {
//     paddingVertical: 20,
//   },
//   py3: {
//     paddingVertical: 30,
//   },
//   py4: {
//     paddingVertical: 40,
//   },
//   py5: {
//     paddingVertical: 50,
//   },
//   px1: {
//     paddingHorizontal: 10,
//   },
//   px2: {
//     paddingHorizontal: 20,
//   },
//   px3: {
//     paddingHorizontal: 30,
//   },
//   px4: {
//     paddingHorizontal: 40,
//   },
//   px5: {
//     paddingHorizontal: 50,
//   },
//   ps1: {
//     paddingLeft: 10,
//   },
//   ps2: {
//     paddingLeft: 20,
//   },
//   ps3: {
//     paddingLeft: 30,
//   },
//   ps4: {
//     paddingLeft: 40,
//   },
//   ps5: {
//     paddingLeft: 50,
//   },
//   pe1: {
//     paddingEnd: 10,
//   },
//   pe2: {
//     paddingEnd: 20,
//   },
//   pe3: {
//     paddingEnd: 30,
//   },
//   pe4: {
//     paddingEnd: 40,
//   },
//   pe5: {
//     paddingEnd: 50,
//   },
//   pt1: {
//     paddingTop: 10,
//   },
//   pt2: {
//     paddingTop: 20,
//   },
//   pt3: {
//     paddingTop: 30,
//   },
//   pt4: {
//     paddingTop: 40,
//   },
//   pt5: {
//     paddingTop: 50,
//   },
//   pb1: {
//     paddingBottom: 10,
//   },
//   pb2: {
//     paddingBottom: 20,
//   },
//   pb3: {
//     paddingBottom: 30,
//   },
//   pb4: {
//     paddingBottom: 40,
//   },
//   pb5: {
//     paddingBottom: 50,
//   },
//   largeText: {
//     fontSize: 40,
//     marginBottom: 20,
//     color: _dark,
//     borderBottomColor: _dark,
//     borderBottomWidth: 2,
//   },
//   dflex: {
//     flex: 1,
//   },
//   flexRow: {
//     flexDirection: 'row',
//   },
//   flexCenter: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   flexWrap: {
//     flexWrap: 'wrap',
//   },
//   textRight: {
//     textAlign: 'right',
//   },
//   justifyContentCenter: {
//     justifyContent: 'center',
//   },
//   justifyContentStart: {
//     justifyContent: 'flex-start',
//   },
//   justifyContentEnd: {
//     justifyContentEnd: true,
//   },
//   alignItemsCenter: {
//     alignItems: 'center',
//   },
//   alignItemsStart: {
//     alignItems: 'flex-start',
//   },
//   alignItemsEnd: {
//     alignItems: 'flex-end',
//   },
//   _flexDirectionColumn: {
//     flexDirection: 'column',
//   },
//   justifyContentBetween: {
//     justifyContent: 'space-between',
//   },
//   justifyContentAround: {
//     justifyContent: 'space-around',
//   },
//   textLeft: {
//     textAlign: 'left',
//   },
//   textCenter: {
//     textAlign: 'center',
//   },
//   whiteTransparent: {
//     backgroundColor: 'rgba(255,255,255,.6)',
//   },
//   blackTransparent: {
//     backgroundColor: 'rgba(0,0,0,.3)',
//   },
//   h100: {
//     height: '100%',
//   },
//   productCard: {
//     backgroundColor: _light,
//     borderRadius: 5,
//     marginBottom: 5,
//     borderBottomWidth: 1,
//     borderBottomColor: _dark,
//   },
//   darkColor: _dark}

export default styling
