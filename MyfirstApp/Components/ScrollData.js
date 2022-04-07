import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

export default function ScrollData() {
  let posts = [];

  for (let i = 1; i <= 20; i++) {
    posts.push({
      title: `Title ${i}`,
      description: `Deskripsi untuk title ${i}`,
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {posts.map((post, id) => (
          <View style={styles.box} key={id}>
            <Text style={styles.title}>{post.title}</Text>
            <Text>{post.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scroll: {
    backgroundColor: "#C2B8A3",
    padding: 10,
  },
  box: {
    backgroundColor: "#FEF7DC",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
