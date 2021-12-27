import React from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

function App() {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>LOGIN</Text>
          <Text style={styles.dash}>_</Text>
        </View>
        <View>
          <TextInput
            style={styles.inputField}
            type="email"
            placeholder="Enter email"
          />
          <TextInput
            style={styles.inputField}
            secureTextEntry
            textContentType="password"
            placeholder="Enter Password"
          />
        </View>
        <View style={styles.loginBtnMain}>
          <Button style={styles.loginBtn} title="Login NOW" />
        </View>

        <View>
          <Text style={styles.bottomText}>
            Already have account <Text style={styles.link}>Signup</Text>{" "}
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent:'center',
    flex:1
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#0971f1",

  },
  dash: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#0971f1",
    marginBottom: 10,
    marginTop:-20
  },
  inputField: {
    paddingVertical: 15,
    paddingHorizontal: 9,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#d3d3d3",
    marginVertical: 10,
  },
  loginBtn: {
    backgroundColor: "#0971f1",
  },

  loginBtnMain: {
    marginVertical: 10
  },
  bottomText: {
    marginTop: 20,
    color: "gray"
  },
  link: {
    color: "#0971f1"
  }
});

export default App;