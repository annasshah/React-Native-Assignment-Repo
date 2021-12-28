import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, } from "react-native";
import stylesFile from "./styles/stylesFile";

function App() {

  const [userName, setUserName] = useState()
  const [msg, setMsg] = useState(false)

  const [allTodos, setAllTodos] = useState([])

  const [firstScreen, setFirstScreen] = useState(true)
  const [inputTxt, setInputTxt] = useState()



  const [currentStateIndex, setCurrentStateIndex] = useState(null)
  const [editState, setEditState] = useState(false)


  // let todosObj = {
  //   todoTxt:'Lorem ipsum dolor sit amet cons adipisicing elit.',
  //   dataAndTime:'27 dec 2021 18:23:49',
  //   updated:false,
  //   finished:false
  // }

  let usernameInputHandle = (e) => {
    setUserName(e)
    setMsg(false)
  }

  let addInputTextHandle = (e) => {
    setInputTxt(e)
    setMsg(false)
  }


  let StartTodoHandle = () => {
    if (!userName) {
      setMsg(true)
    }
    else {
      setFirstScreen(false)
      setMsg(false)
    }

  }

  let editHandle = (ind) => {
    let text = allTodos[ind].todoTxt
    setInputTxt(text)
    setEditState(true)
    setCurrentStateIndex(ind)
  }

  let addTodoHandle = () => {
    const d = new Date();
    let postDate = `${d.getDate()}/${(d.getMonth() + 1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`

    if (!inputTxt) {
      setMsg(true)
    } else {

      if (editState) {
        allTodos[currentStateIndex].todoTxt = inputTxt
        allTodos[currentStateIndex].dataAndTime = postDate
        allTodos[currentStateIndex].updated = true

        setEditState(false)
        setCurrentStateIndex(null)
      }
      else {
        let obj = {
          todoTxt: inputTxt,
          dataAndTime: postDate,
          updated: false,
          finished: false
        }
        allTodos.push(obj)
      }
      setAllTodos([...allTodos])
      setInputTxt('')
      setMsg(false)
    }

  }


  let deleteHandle = (ind) => {
    allTodos.splice(ind, 1)
    setAllTodos([...allTodos])

  }

  let finishHandle = (ind) => {
    let statusFinish = allTodos[ind].finished
    allTodos[ind].finished = !statusFinish
    setAllTodos([...allTodos])

  }

  let deleteAllHandle = () => {
    setAllTodos([])

  }


  return (
    <>
      <View style={styles.container}>
        {firstScreen ? <View style={styles.firstScreen}>
          <View style={styles.firstScreenHeading}>
            <Text style={styles.firstScreenHeadingText}>TODO LIST</Text>
          </View>




          <View style={styles.firstScreenContent}>
            <View><TextInput
              onChangeText={(e) => usernameInputHandle(e)}
              style={styles.firstScreenInput}
              placeholder="Enter your name"
            />{msg ? <Text style={{ color: 'red', fontSize: 12, textAlign: 'center', marginTop: 10, marginBottom: -10 }}> Please enter your name!</Text> : null}
            </View>
            <TouchableOpacity
              style={styles.firstScreenButton}
              onPress={StartTodoHandle}
            >
              <Text style={styles.firstScreenButtonText} >Let's Start</Text>
            </TouchableOpacity>
          </View>

        </View> : <View style={styles.secondScreenContainer}>

          <View style={styles.secondScreenTopSection}>
            <Text style={styles.secondScreenGreeting} >Hello {userName}!</Text>
            <Text style={styles.secondScreenDesc} >What are you going to do?</Text>
          </View>


          <View style={styles.secondScreenContentSection}>
            <View style={styles.secondScreenInputMain}>
              <TextInput style={styles.secondScreenInput}
                multiline
                placeholder="Add To-Do here"
                value={inputTxt}
                onChangeText={(e) => addInputTextHandle(e)}
              />
              <TouchableOpacity
                style={styles.secondScreenAddTaskButton}
                onPress={addTodoHandle}
              >
                <Text style={styles.secondScreenAddTaskButtonTxt} >+</Text>
              </TouchableOpacity>
            </View>

            {msg ? <Text style={{ color: 'red', fontSize: 12, textAlign: 'left', marginTop: 10, marginBottom: -10, paddingLeft: 20 }}> Please enter something to add!</Text> : null}

            <View style={styles.secondScreenYourTodosHeadingAndDeleteButtonMain}>

              <View >
                <Text style={styles.secondScreenYourTodosHeading}>Your To-Do List:</Text>
              </View>


              <View >
                <TouchableOpacity
                  style={styles.deleleAllButton}
                  onPress={deleteAllHandle}
                >
                  <Text
                    style={styles.deleleAllButtonTxt}
                  >Delete All</Text>
                </TouchableOpacity>
              </View>


            </View>

            <View style={styles.secondScreenTodosContainer}>

                <ScrollView>
                  {allTodos.map((e, index) => {
                    return <View key={index} style={styles.secondScreenTodosMain}>

                      <View style={styles.TodoCheckBoxAndText}>
                        <View style={styles.TodoCheckBoxMain}>

                          <TouchableOpacity
                            onPress={() => finishHandle(index)}

                          >
                            {e.finished ? <View><Text style={{ color: 'green' }}>✔</Text></View> : <View style={styles.TodoCheckBox}></View>}

                          </TouchableOpacity>
                        </View>
                        <View style={styles.TodoTextMain}>
                          {e.finished ? <Text style={styles.TodoTextFinished}>{e.todoTxt}</Text> : <Text style={styles.TodoText}>{e.todoTxt}</Text>}
                          <View style={styles.TodoDetailsMain}>

                            <View style={styles.TodoActionButtonsMain}>
                              <View style={styles.TodoEditButton} >
                                <TouchableOpacity
                                  onPress={() => editHandle(index)}
                                >
                                  <Text style={styles.TodoEditButtonTxt}>Edit</Text>
                                </TouchableOpacity>
                              </View>
                              <View
                              // style={styles.TodoDeleteButton} 
                              >
                                <TouchableOpacity
                                  onPress={() => deleteHandle(index)}
                                >
                                  <Text style={styles.TodoDeleteButtonTxt}>Delete</Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                            <View>
                              <Text style={styles.TodoDateAndTimeTxt}>{e.updated ? 'updated ' : null} {e.dataAndTime}</Text></View>
                          </View>
                        </View>
                      </View>
                    </View>

                  })}
                </ScrollView>
                {/* : <View style={styles.emptyTodoMessage}><Text style={styles.emptyTodoMessageText}>Todo list is Empty</Text></View> */}
               
            </View>
          </View>
        </View>}



      </View>
    </>
  );
}

const styles = StyleSheet.create(stylesFile);

export default App;



{/* <View style={styles.secondScreenTodosMain}>

                  <View style={styles.TodoCheckBoxAndText}>
                    <View style={styles.TodoCheckBoxMain}>

                      <TouchableOpacity>
                        <View style={styles.TodoCheckBox}></View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.TodoTextMain}>
                      <Text style={styles.TodoText}>Lorem ipsum dolor sit amet cons adipisicing elit.</Text>
                      <View style={styles.TodoDetailsMain}>

                        <View style={styles.TodoActionButtonsMain}>
                          <View style={styles.TodoEditButton} >
                            <TouchableOpacity>
                              <Text style={styles.TodoEditButtonTxt}>Edit</Text>
                            </TouchableOpacity>
                          </View>
                          <View style={styles.TodoDeleteButton} >
                            <TouchableOpacity>
                              <Text style={styles.TodoDeleteButtonTxt}>Delete</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <View>
                          <Text style={styles.TodoDateAndTimeTxt}>27 dec 2021 18:23:49</Text></View>
                      </View>
                    </View>
                  </View>
                </View> */}