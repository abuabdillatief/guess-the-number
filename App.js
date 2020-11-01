import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import LandingScreen from "./screens/LandingScreen";
export default function App() {
  return (
    <View style={styles.screen}>
      <Header title={"Guess The Number"} />
      <LandingScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
