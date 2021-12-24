import React from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

function App() {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>LOGIN</Text>
        </View>
        <View>
          <TextInput
            style={styles.inputField}
            type="email"
            placeholder="Enter email"
          />
          <TextInput
            style={styles.inputField}
            textContentType="password"
            placeholder="Enter Password"
          />
        </View>
        <View style={styles.loginBtnMain}>
          <Button style={styles.loginBtn} title="&nbsp; &nbsp; Login NOW &nbsp; &nbsp;" />
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
    justifyContent: "center",
    alignItems: "center"
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#0971f1",
    marginVertical: 10
  },
  inputField: {
    paddingVertical: 15,
    paddingHorizontal: 9,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#d3d3d3",
    marginVertical: 10,
    width: "100%"
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
