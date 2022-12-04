import React, { useLayoutEffect } from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import SearchScreen from "../screens/SearchScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import RestaurantHomeScreen from "../screens/RestaurantHomeScreen";
import MenuProductScreen from "../screens/MenuProductScreen";
import PreferenceScreen from "../screens/PreferenceScreen";
import PreparingOrderScreen from "../screens/PreparingOrderScreen";
import DeliveryScreen from "../screens/DeliveryScreen";

const ClientSearch = createStackNavigator();

const ClientStack = ({ navigation, route }) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName === "RestaurantHomeScreen" ||
      routeName === "MenuProductScreen" ||
      routeName === "PreferenceScreen" ||
      routeName === "PreparingOrderScreen" ||
      routeName === "Delivery"
    ) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);

  return (
    <ClientSearch.Navigator>
      <ClientSearch.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <ClientSearch.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={{
          headerShown: false,
        }}
      />
      <ClientSearch.Screen
        name="RestaurantHomeScreen"
        component={RestaurantHomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <ClientSearch.Screen
        name="MenuProductScreen"
        component={MenuProductScreen}
        options={{
          headerShown: false,
        }}
      />
      <ClientSearch.Screen
        name="PreferenceScreen"
        component={PreferenceScreen}
        options={{
          headerShown: false,
        }}
      />
      <ClientSearch.Screen
        name="PreparingOrderScreen"
        component={PreparingOrderScreen}
        options={{ presentation: "fullScreenModal", headerShown: false }}
      />
      <ClientSearch.Screen
        name="Delivery"
        component={DeliveryScreen}
        options={{ presentation: "fullScreenModal", headerShown: false }}
      />
    </ClientSearch.Navigator>
  );
};

export { ClientStack };
