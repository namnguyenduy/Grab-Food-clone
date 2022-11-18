import { StyleSheet, Text, View, Dimensions, StatusBar } from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/themed";
import { TabView, TabBar } from "react-native-tab-view";

import {
  Route1,
  Route2,
  Route3,
  Route4,
  Route5,
  Route6,
  Route7,
  Route8,
} from "../MenuTabs";
import restaurantData from "../../assets/data/restaurantsData.json";
import menu from "../../assets/data/menu.json";
import { colors } from "../../global/styles";

const SCREEN_WIDTH = Dimensions.get("window").width;

const MenuProductScreen = ({ navigation, route }) => {
  const [routes] = useState(menu);
  const [index, setIndex] = useState(0);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorContainerStyle={{ backgroundColor: colors.primary }}
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
      style={styles.tab}
      labelStyle={styles.tabLabel}
      contentContainerStyle={styles.tabContainer}
    />
  );

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 1:
        return <Route1 name={navigation} />;
      case 2:
        return <Route2 name={navigation} />;
      case 3:
        return <Route3 name={navigation} />;
      case 4:
        return <Route4 name={navigation} />;
      case 5:
        return <Route5 name={navigation} />;
      case 6:
        return <Route6 name={navigation} />;
      case 7:
        return <Route7 name={navigation} />;
      case 8:
        return <Route8 name={navigation} />;
      default:
        return null;
    }
  };
  return (
    <View className="flex-1 pt-5">
      <StatusBar backgroundColor={colors.primary} />
      <View
        className="flex-row items-center p-[10px] top-0 left-0 right-0"
        style={{ backgroundColor: colors.primary }}
      >
        <Icon
          type="material-community"
          name="arrow-left"
          color={colors.cardBackground}
          size={25}
          onPress={() => navigation.goBack()}
        />
        <Text className="ml-10 text-lg font-bold text-cardBackground">Menu</Text>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={SCREEN_WIDTH}
        renderTabBar={renderTabBar}
        tabBarPosition="top"
        navigation={navigation}
        route={route}
      />
    </View>
  );
};

export default MenuProductScreen;

const styles = StyleSheet.create({});
