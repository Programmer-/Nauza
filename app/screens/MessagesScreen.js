import React from "react";
import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";

console.log(Constants);

const messages = [
  {
    id: 1,
    title: "T1",
    desctription: "D1",
    image: require("../assets/ocean-cat.jpg"),
  },
  {
    id: 2,
    title: "T2",
    desctription: "D2",
    image: require("../assets/ocean-cat.jpg"),
  },
];

function MessagesScreen(props) {
  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.subTitle}
          image={item.image}
        />
      )}
    />
  );
}

export default MessagesScreen;
