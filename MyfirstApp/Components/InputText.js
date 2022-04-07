import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

export default function InputText() {
  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.TextInput}
        placeholder="Masukkan text di sini"
        onChangeText={(text) => setInput(text)}
        defaultValue={input}
      />
      <Text style={{ padding: 10, fontSize: 25 }}>The Text : {input}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  TextInput: {
    height: 40,
  },
});
