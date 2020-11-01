import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Card (props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    borderRadius: 10,
    padding: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 10,
    backgroundColor: "white",
  },
});
