import { Text, StyleSheet, View, FlatList } from "react-native";
import React from "react";

export default function ListData() {
  let posts = [];

  for (let i = 1; i <= 20; i++) {
    posts.push({
      title: `Title ${i}`,
    });
  }

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 50,
  },
});
