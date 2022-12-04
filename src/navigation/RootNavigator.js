import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./authStack";
import AppStack from "./appStack";
import { SignInContext } from "../contexts/authContext";
import { RestaurantContextProvider } from "../contexts/restaurantContext";
import { BasketContextProvider } from "../contexts/basketContext";

const RootNavigator = () => {
  const { signIn } = useContext(SignInContext);
  return (
    <NavigationContainer>
      {signIn.userToken === null ? (
        <AuthStack />
      ) : (
        <RestaurantContextProvider>
          <BasketContextProvider>
            <AppStack />
          </BasketContextProvider>
        </RestaurantContextProvider>
      )}
    </NavigationContainer>
  );
};
export default RootNavigator;
