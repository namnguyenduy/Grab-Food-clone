import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "@rneui/themed";

import RootClientTabs from "./ClientTabs";
import { colors } from "../global/styles";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="ClientTabs"
        component={RootClientTabs}
        options={{
          headerShown: false,
          title: "trang chủ",
          drawerIcon: ({ focused, size }) => (
            <Icon
              type="material-community"
              name="home"
              color={focused ? "#7cc" : colors.grey2}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
