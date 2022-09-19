import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/laptop.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Laptop for sale</AppText>
        <AppText style={styles.price}>$599</AppText>
        <ListItem>image={require("../assets/ocean-cat.jpg")}</ListItem>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});

export default ListingDetailsScreen;
