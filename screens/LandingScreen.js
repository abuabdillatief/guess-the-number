import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Alert,
} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import Number from "../components/Number";

export default function LandingScreen() {
  let confirmedOutput;
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const inputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
    Keyboard.dismiss();
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Numer has to be between 1 to 99.", [
        {
          text: "Ok",
          style: "destructive",
          onPress: resetInputHandler,
        },
      ]);
      return;
    }
    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber(parseInt(enteredValue));
  };

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.chosen}>
        <Text>You selected:</Text>
        <Number>{selectedNumber}</Number>
        <Button title="START GAME" />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
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
              <Button
                title={"Reset"}
                onPress={() => {
                  setEnteredValue("");
                }}
                color={Colors.reset}
              />
            </View>
            <View style={styles.button}>
              <Button
                title={"Confirm"}
                onPress={() => {
                  confirmInputHandler();
                }}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
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
    justifyContent: "center",
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
  input: {
    alignItems: "center",
    width: "90%",
    marginTop: 10,
    marginBottom: 10,
  },
  chosen: {
    marginVertical: 20,
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
  },
});
