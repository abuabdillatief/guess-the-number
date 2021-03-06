import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.header__title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 35,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  header__title: {
    fontSize: 20,
    color: "white",
  },
});
