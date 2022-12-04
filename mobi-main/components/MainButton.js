import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function MainButton(props) {
  const { title, onPress, style, isSubButton } = props;

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...style,
        ...(isSubButton && styles.subButton),
      }}
      onPress={onPress}
    >
      <Text
        style={{ ...styles.title, color: isSubButton ? "#fff" : "#fff" }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "pink",
    borderRadius: 100,
  
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight:"bold",
  },
  subButton: {
    backgroundColor: "pink",
  
    borderRadius: 100,
  },
});
