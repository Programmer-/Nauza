import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import LIstItemSeparator from "../components/LIstItemSeparator";
import Screens from "../components/Screens";

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
    <Screens>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.desctription}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={ListItemDeleteAction}
          />
        )}
        ItemSeparatorComponent={LIstItemSeparator}
      />
    </Screens>
  );
}
const styles = StyleSheet.create({});
export default MessagesScreen;
