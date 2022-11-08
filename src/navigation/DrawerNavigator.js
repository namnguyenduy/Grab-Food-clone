import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "@rneui/themed";

import { colors } from "../global/styles";
import RootClientTabs from "./ClientTabs";
import BusinessConsoleScreen from "../screens/BusinessConsoleScreen";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="ClientTabs"
        component={RootClientTabs}
        options={{
          headerShown: false,
          title: "Trang chủ",
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
      <Drawer.Screen
        name="BusinessConsoleScreen"
        component={BusinessConsoleScreen}
        options={{
          headerShown: false,
          title: "Hồ sơ Doanh nghiệp",
          drawerIcon: ({ focused, size }) => (
            <Icon
              type="material"
              name="business"
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
