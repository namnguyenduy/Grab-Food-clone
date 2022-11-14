import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import SearchScreen from "../screens/SearchScreen";
import SearchResultScreen from "../screens/SearchResultScreen";

const ClientSearch = createStackNavigator();

const ClientStack = () => {
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
    </ClientSearch.Navigator>
  );
};

export { ClientStack };
