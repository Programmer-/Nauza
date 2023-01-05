import React from "react";
import { Button, Text } from "react-native";
import Screen from "./app/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AuthNavigator from "./app/navigators/AuthNavigator";
import navigationTheme from "./app/navigators/navigationTheme";
import AppNavigator from "./app/navigators/AppNavigator";

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "dodgerblue",
      activeTintColor: "white",
      inactiveTintColor: "black",
      inactiveBackgroundColor: "gray",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={StackNavigator}
      options={{
        tabBarIcon: ({ size }) => (
          <MaterialCommunityIcons name="home" size={size} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
