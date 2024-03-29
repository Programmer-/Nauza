import React from "react";
import { Text } from "react-native";
import defaultStyles from "../config/styles";

function AppText({ children, style, ...numberOfLines }) {
  return (
    <Text style={[defaultStyles.text, style]} {...numberOfLines}>
      {children}
    </Text>
  );
}

export default AppText;
