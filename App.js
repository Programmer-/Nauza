import React from "react";
import Icon from "./app/components/Icon";
import Screens from "./app/components/Screens";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { TextInput } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import { Picker } from "react-native";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return <ListingEditScreen />;
}
