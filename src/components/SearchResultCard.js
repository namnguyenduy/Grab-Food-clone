import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Icon } from "@rneui/themed";

import { colors } from "../global/styles";
import ProductCard from "./ProductCard";
import { urlFor } from "../../sanity";

const SearchResultCard = ({ restaurantsData, onPressRestaurantCard, idCategory }) => {
  const { name, review, farAway, rating, image, deliveryTime, dishes } = restaurantsData;
  const [dishesFilter, setDishesFilter] = useState([]);
  const dishesFilterByCategory = (categoryId) => {
    const dishesFilter = dishes.filter((dish) => {
      return dish.categories.some((category) => category.id === categoryId);
    });
    setDishesFilter(dishesFilter);
  };
  useEffect(() => {
    dishesFilterByCategory(idCategory);
  }, []);

  return (
    <View>
      <View className="mb-5 bg-white">
        <TouchableOpacity onPress={onPressRestaurantCard}>
          <View className="mx-[10px] rounded-t-md">
            <View className="h-40">
              <ImageBackground
                className="h-full rounded-t-md"
                source={{ uri: urlFor(image?.asset?._ref).url() }}
              />

              <View className="absolute top-0 right-0 p-[2px] items-end justify-start rounded-tr-md rounded-bl-xl bg-primary">
                <View className="flex-row items-center space-x-1">
                  <Icon type="antdesign" name="star" color={colors.yellow} size={20} />
                  <Text className="text-xl font-bold text-white">{rating}</Text>
                </View>
                <Text className="text-xs text-white">({review})</Text>
              </View>
            </View>

            <View className="flex-col mr-[5px] mb-[10px] mt[5px]">
              <View className="pt-[5px]">
                <Text className="text-lg font-bold" style={{ color: colors.grey1 }}>
                  {name}
                </Text>
              </View>
              <View className="flex-row items-center mt-[5px] pb-[5px]">
                <View className="flex-row">
                  <Text className="text-xs font-bold" style={{ color: colors.grey3 }}>
                    {`${deliveryTime} phút`}
                  </Text>
                </View>
                <View className="mx-[5px]">
                  <Text style={{ color: colors.grey3 }}>&#8226;</Text>
                </View>
                <View className="flex-row">
                  <Text
                    className="text-xs font-bold px-[10px]"
                    style={{ color: colors.grey3 }}
                  >
                    {`${farAway} km`}
                  </Text>
                </View>
                <View className="mx-[5px]">
                  <Text style={{ color: colors.grey3 }}>&#8226;</Text>
                </View>
                <View className="flex-row items-center space-x-1">
                  <Icon type="antdesign" name="star" color={colors.yellow} size={12} />
                  <Text className="text-xs font-bold" style={{ color: colors.grey3 }}>
                    {rating}
                  </Text>
                </View>
                <View className="flex-row ml-[5px]">
                  <Text className="text-xs" style={{ color: colors.grey3 }}>
                    ({review})
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <View className="mt-[5px] pb-5 px-[10px]">
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={2}
            style={{ backgroundColor: colors.cardBackground }}
            data={dishesFilter}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ProductCard dishes={item} />}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchResultCard;

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "rgba(52, 52, 52,0.4)",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },
});
