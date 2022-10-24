import React from "react";
import Screens from "../components/Screens";
import ListItem from "../components/ListItem";
import Icons from "../components/Icon";
import { FlatList, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import LIstItemSeparator from "../components/LIstItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen() {
  return (
    <Screens style={styles.screens}>
      <View style={styles.container}>
        <ListItem
          title="JUsto"
          subTitle="justnjuru@gmail.com"
          image={require("../assets/ocean-cat.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={LIstItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icons
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Log Out"
          IconComponent={<Icons name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </Screens>
  );
}

const styles = StyleSheet.create({
  screens: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
