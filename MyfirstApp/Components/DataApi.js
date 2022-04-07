import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

export default function Latihan() {
  const [list, setList] = useState([]);

  const getJsonPlaceHolder = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const resJson = await res.json();
    setList(resJson);
  };

  useEffect(() => {
    getJsonPlaceHolder();
  }, [list]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {/* <Text>{list.length && JSON.stringify(list[0])}</Text> */}
        {list.length &&
          list.map((data) => {
            return (
              <View style={styles.box} key={data.id}>
                <Text style={styles.title}>{data.title}</Text>
                <Text>{data.body}</Text>
              </View>
            );
          })}
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
    textAlign: "center",
  },
});
