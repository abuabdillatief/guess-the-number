import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";

export default function LandingScreen() {
  const [enteredValue, setEnteredValue] = useState("");
  function inputHandler(inputText) {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text>Start A New Game!</Text>
        <Card style={styles.input}>
          <Text style={styles.title}>Select a Number</Text>
          <Input
            style={styles.input}
            placeholder="Add your number here..."
            blurOnSubmit
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={inputHandler}
            value={enteredValue}
          />
          <View style={styles.buttons}>
            <View style={styles.button}>
              <Button title={"Reset"} onPress={() => {}} color={Colors.reset} />
            </View>
            <View style={styles.button}>
              <Button title={"Confirm"} onPress={() => {}} />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  imput: {
    width: 30,
    marginBottom: 10,
  },
});
