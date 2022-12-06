import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import AuthStack from "./authStack";
import AppStack from "./appStack";
import { SignInContext } from "../contexts/authContext";
import { store } from "../../store";

const RootNavigator = () => {
  const { signIn } = useContext(SignInContext);
  return (
    <NavigationContainer>
      {signIn.userToken === null ? (
        <AuthStack />
      ) : (
        <Provider store={store}>
          <AppStack />
        </Provider>
      )}
    </NavigationContainer>
  );
};
export default RootNavigator;
