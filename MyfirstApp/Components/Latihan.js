import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import Layouts from "./Layouts";

const url = "https://randomuser.me/api/?results=20";

export default function Latihan() {
  const [list, setList] = useState([]);

  const getRandomUser = async () => {
    const res = await fetch(url);
    const randUser = await res.json();
    setList(randUser.results);
  };

  useEffect(() => {
    getRandomUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Customers</Text>
      <ScrollView style={styles.scroll}>
        {/* <Text>{list.length && JSON.stringify(list[0])}</Text> */}
        {list.map((data) => {
          const {
            name: { title, first, last },
            location: {
              street: { number, name },
              city,
              country,
            },
            email,
            login: { uuid },
            picture: { medium },
          } = data;
          return (
            <View key={uuid} style={styles.box}>
              <Image
                style={styles.image}
                source={{
                  uri: medium,
                }}
              />
              <View>
                <Text style={styles.name}>
                  {title}. {first}
                  {last}
                </Text>
                <Text>
                  {number} {name}, {city}, {country}
                </Text>
                <Text style={styles.email}>{email}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    backgroundColor: "#C2B8A3",
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 25,
    paddingBottom: 20,
    paddingLeft: 10,
    backgroundColor: "#5F4E31",
    color: "#fff",
  },

  image: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 5,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  email: {
    color: "blue",
  },

  box: {
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});
