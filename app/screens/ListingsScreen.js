import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screens from "../components/Screens";
import colors from "../config/colors";

const Listings = [
  {
    id: 1,
    title: "comfy rustic chair",
    price: 2500,
    image: require("../assets/africhair.jpg"),
  },
  {
    id: 2,
    title: "cute cat",
    price: 0,
    image: require("../assets/ocean-cat.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screens style={styles.screen}>
      <FlatList
        data={Listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screens>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
export default ListingsScreen;
