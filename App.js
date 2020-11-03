import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import LandingScreen from "./screens/LandingScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState();

  const startGame = (selectedNumber) => {
    setSelectedNumber(selectedNumber);
  };

  let content = <LandingScreen onStartGame={startGame} />;

  if (selectedNumber) {
    content = <GameScreen userChoice={selectedNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header title={"Guess The Number"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
