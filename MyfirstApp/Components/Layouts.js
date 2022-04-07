import React from "react";
import { SafeAreaView, Platform, View } from "react-native";

export default function Layouts(props) {
  if (Platform.OS === "android") {
    return <SafeAreaView>{props.children}</SafeAreaView>;
  }

  return <View>{props.children}</View>;
}
