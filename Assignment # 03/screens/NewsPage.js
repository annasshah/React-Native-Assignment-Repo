import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import styling from '../style'
import logo from '../assets/images/Top-logo.png'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
import ListView from '../components/ListView'
import GridView from '../components/GridView'
import {useSelector} from 'react-redux'
import {useState} from 'react'
import {useEffect} from 'react'
import {changeLayout, getData} from '../config/redux/action/actions'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import LoadingComponent from '../components/LoadingComponent'

const NewsPage = () => {


  const dispatch = useDispatch()



  const [listView, setListView] = useState(true)

  const updateState = useSelector(state => state)

  const allNews = useSelector(state => state.NewsDataReducer.data.articles)

  const [news, setNews] = useState(updateState.NewsDataReducer.data.articles)
  const isLoading = useSelector(state => state.NewsDataReducer.isLoading)

  const [selectedSource, setSelectedSource] = useState('All')

  let sources = ['All']

  if (news) {
    for (let index = 0; index < allNews.length; index++) {
      sources.push(allNews[index].source.name)
    }
    let uniqueChars = [...new Set(sources)]
    sources = uniqueChars
  }

  let toGrid = () => {
    changeLayout(dispatch, false)
    setListView(false)
  }

  let toList = () => {
    changeLayout(dispatch, true)
    setListView(true)
  }

  let sourceFilterHandle = val => {
    setSelectedSource(val)
    if (val === 'All') {
      setNews(allNews)
    } else {
      let filterdNews = allNews.filter(e => e.source.name === val)
      setNews(filterdNews)
    }
  }




  return isLoading ? (
    <LoadingComponent />
  ) : (
    <View style={styles.container}>
      <View style={[styles.flex1, {paddingHorizontal: 40}]}>
        <View style={styles.topLogoMain}>
          <Image source={logo} />
        </View>

        <View style={styles.searchBarMain}>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder='Search here...'
            />

            <TouchableOpacity style={styles.searchIcon}>
              <AntDesign name={'search1'} size={25} color='#CCCCCC' />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categoryButtonsMain}>
          <ScrollView horizontal>
            {sources.map((e, i) => {
              if (e === selectedSource) {
                return (
                  <View key={i}>
                    <TouchableOpacity
                      style={[styles.categoryButton, {borderColor: '#3A6FE6'}]}>
                      <Text style={{color: '#3A6FE6'}}>{e}</Text>
                    </TouchableOpacity>
                  </View>
                )
              } else {
                return (
                  <View key={i}>
                    <TouchableOpacity
                      onPress={() => sourceFilterHandle(e)}
                      style={styles.categoryButton}>
                      <Text>{e}</Text>
                    </TouchableOpacity>
                  </View>
                )
              }
            })}
          </ScrollView>
        </View>

        <View style={[styles.flex1, {paddingTop: 10}]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}>
            <View>
              <View>
                <Text
                  style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
                  {selectedSource}
                </Text>
                <View style={{marginTop: -5, marginStart: -5}}>
                  <Entypo name='minus' color='black' size={25} />
                </View>
              </View>
            </View>

            <View style={{marginTop: 8}}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={toGrid}
                  style={{justifyContent: 'center'}}>
                  <Fontisto
                    name='nav-icon-grid'
                    color={listView ? '#B4B4B4' : '#3A6FE6'}
                    size={15}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={toList}
                  style={{justifyContent: 'center', marginStart: 10}}>
                  <Fontisto
                    name='nav-icon-list'
                    color={listView ? '#3A6FE6' : '#B4B4B4'}
                    size={15}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.newsContainer}>
          {listView ? (
            <ScrollView vertical>
              {news.map((e, i) => (
                <ListView key={i} data={e} />
              ))}
            </ScrollView>
          ) : (
            <ScrollView vertical>
              {news.map((e, i) => (
                <GridView key={i} data={e} />
              ))}
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  )
}

export default NewsPage

const styles = StyleSheet.create(styling)
