import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./authStack";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};
export default RootNavigator;
