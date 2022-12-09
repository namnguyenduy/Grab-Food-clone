import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import DrawerNavigator from "./DrawerNavigator";
import RestaurantsMapScreen from "../screens/RestaurantsMapScreen";
import RestaurantHomeScreen from "../screens/RestaurantHomeScreen";
import PreparingOrderScreen from "../screens/PreparingOrderScreen";
import MenuProductScreen from "../screens/MenuProductScreen";
import DeliveryScreen from "../screens/DeliveryScreen";
import BasketScreen from "../screens/BasketScreen";

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
      <App.Screen
        name="RestaurantHomeScreen"
        component={RestaurantHomeScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <App.Screen
        name="MenuProductScreen"
        component={MenuProductScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <App.Screen
        name="BasketScreen"
        component={BasketScreen}
        options={{
          presentation: "modal",
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <App.Screen
        name="PreparingOrderScreen"
        component={PreparingOrderScreen}
        options={{
          presentation: "fullScreenModal",
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <App.Screen
        name="Delivery"
        component={DeliveryScreen}
        options={{
          presentation: "fullScreenModal",
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </App.Navigator>
  );
};
export default AppStack;
