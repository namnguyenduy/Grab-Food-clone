import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./authStack";
import AppStack from "./appStack";
import { SignInContext } from "../contexts/authContext";

const RootNavigator = () => {
  const { signIn } = useContext(SignInContext);
  return (
    <NavigationContainer>
      {signIn.userToken === null ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};
export default RootNavigator;
