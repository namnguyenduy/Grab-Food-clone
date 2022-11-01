import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { SignInScreen, SignInWelcomeScreen } from "../screens/authScreens";

const Auth = createStackNavigator();

const AuthStack = () => {
  return (
    <Auth.Navigator initialRouteName="SignInWelcomeScreen">
      <Auth.Screen
        name="SignInWelcomeScreen"
        component={SignInWelcomeScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Auth.Navigator>
  );
};
export default AuthStack;
