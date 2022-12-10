import { StyleSheet, Text, View, Dimensions, StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
import { Icon } from "@rneui/themed";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";

import { Route1 } from "../MenuTabs";
import restaurantData from "../../assets/data/restaurantsData.json";
import menu from "../../assets/data/menu.json";
import { colors } from "../../global/styles";
import sanityClient from "../../../sanity";
import { BasketIcon } from "../../components";

const SCREEN_WIDTH = Dimensions.get("window").width;
const MenuProductScreen = ({ navigation, route }) => {
  const { menusOfRestaurant, idRestaurant, idCategoryOfMenu } = route.params;
  const lengthOfCategoryMenu = menusOfRestaurant.length;
  const [routes, setRoutes] = useState([]);
  const [index, setIndex] = useState(idCategoryOfMenu);
  const [dishesData, setDishesData] = useState([]);

  const filterDishesByCategory = (dishes, idCategory) => {
    const newDishes = dishes.filter((dish) => {
      return dish.categories.some(
        (category) =>
          routes[idCategory]?.title && category?.name == routes[idCategory]?.title
      );
    });
    setDishesData(newDishes);
  };
  const getDishesOfRestaurant = async () => {
    const data = await sanityClient.fetch(
      `*[_type == "restaurant" && id == $idRestaurant] {
        dishes[]->{
          ...,
          categories[]-> {
            ...
          }
        }
      }[0]`,
      { idRestaurant }
    );
    filterDishesByCategory(data.dishes, index);
  };
  useEffect(() => {
    getDishesOfRestaurant();
  }, [index]);

  useEffect(() => {
    const newRoutes = menusOfRestaurant.map((menu) => {
      return { key: menu?.id, title: menu?.name };
    });
    setRoutes(newRoutes);
  }, []);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorContainerStyle={{ backgroundColor: colors.primary }}
      tabStyle={{ ...styles.tabStyle, width: SCREEN_WIDTH / lengthOfCategoryMenu }}
      scrollEnabled={true}
      style={styles.tab}
      labelStyle={styles.tabLabel}
      contentContainerStyle={styles.tabContainer}
    />
  );

  const renderScene = ({ route }) => {
    for (let i in routes) {
      if (route.key == routes[i].key) {
        return <Route1 dishesData={dishesData} />;
      }
    }
  };
  return (
    <View className="flex-1 pt-5">
      <BasketIcon />
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

const styles = StyleSheet.create({
  tabStyle: {
    maxHeight: 45,
  },
  tab: {
    backgroundColor: colors.primary,
    justifyContent: "space-between",
    // alignItems: "center",
  },
  tabLabel: {
    fontWeight: "bold",
    color: colors.cardBackground,
  },
  tabContainer: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});
