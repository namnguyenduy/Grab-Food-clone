import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import DrawerNavigator from "./DrawerNavigator";
import RestaurantsMapScreen from "../screens/RestaurantsMapScreen";

const App = createStackNavigator();

const AppStack = () => {
  return (
    <App.Navigator>
      <App.Screen
        name="App"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <App.Screen
        name="RestaurantsMapScreen"
        component={RestaurantsMapScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </App.Navigator>
  );
};
export default AppStack;
