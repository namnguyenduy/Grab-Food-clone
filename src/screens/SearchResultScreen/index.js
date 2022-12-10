import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@rneui/themed";

import { SearchResultCard } from "../../components";
import restaurantData from "../../assets/data/restaurantsData.json";
import { colors } from "../../global/styles";
import sanityClient from "../../../sanity";

const SCREEN_WIDTH = Dimensions.get("window").width;

const SearchResultScreen = ({ navigation, route }) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const { idCategory, nameCategory } = route.params;

  const restaurantFilterByCategory = (restaurant) => {
    const filterRestaurant = restaurant.filter((restaurant) => {
      return restaurant.categories.some((category) => {
        return category.id === idCategory;
      });
    });
    setRestaurantData(filterRestaurant);
  };
  const getRestaurant = async () => {
    const data = await sanityClient.fetch(
      `*[_type == "restaurant"] {
        ...,
        categories[]->{
          ...
        } | order(id asc),
        dishes[]->{
          ...,
          categories[]-> {
            ...
          }
        }
      }`,
      { idCategory }
    );
    restaurantFilterByCategory(data);
  };
  useEffect(() => {
    getRestaurant();
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <StatusBar backgroundColor={colors.cardBackground} />
      <View className="pt-[10px] items-start pl-[10px] bg-white">
        <Icon
          name="arrow-left"
          type="material-community"
          size={30}
          color={colors.grey1}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View className="flex-1">
        <FlatList
          showsVerticalScrollIndicator={false}
          initialNumToRender={2}
          style={{ backgroundColor: colors.cardBackground }}
          data={restaurantData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SearchResultCard
              screenWidth={SCREEN_WIDTH}
              idCategory={idCategory}
              restaurantsData={item}
              onPressRestaurantCard={() => {
                navigation.navigate("RestaurantHomeScreen", {
                  id: item.id,
                });
              }}
            />
          )}
          ListHeaderComponent={
            <View className="bg-white mb-[10px] px-[10px]">
              <Text
                className="text-xl  py-[15px] font-bold"
                style={{ color: colors.grey1 }}
              >
                {restaurantData.length} kết quả tìm kiếm cho danh mục {nameCategory}
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({});
