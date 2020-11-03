import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Number from "../components/Number";
import Card from "../components/Card";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return random;
  }
};

export default function GameScreen({ userChoice }) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess:</Text>
      <Number>{currentGuess}</Number>
      <Card style={styles.buttons}>
        <Button title="LOWER" onPress={() => {}} />
        <Button title="HIGHER" onPress={() => {}} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 15,
    width: 200,
    maxWidth: "80%",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});
