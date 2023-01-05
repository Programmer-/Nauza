import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import AuthNavigator from "./app/navigators/AuthNavigator";
import navigationTheme from "./app/navigators/navigationTheme";
import AppNavigator from "./app/navigators/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
