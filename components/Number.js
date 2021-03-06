import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Colors from "../constants/colors";

const Number = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

export default Number;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.primary,
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.reset,
    fontSize: 25,
  },
});
