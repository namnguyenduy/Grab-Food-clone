import React from "react";
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

const SearchResultCard = ({ restaurantsData, onPressRestaurantCard }) => {
  const {
    restaurantName,
    deliveryAvailable,
    discountAvailable,
    discountPercent,
    numberOfReview,
    businessAddress,
    farAway,
    averageReview,
    images,
    deliveryTime,
    productData,
  } = restaurantsData;

  return (
    <View>
      <View className="bg-white mb-5">
        <TouchableOpacity onPress={onPressRestaurantCard}>
          <View className="mx-[10px] rounded-t-md">
            <View className="h-40">
              <ImageBackground className="h-full rounded-t-md" source={{ uri: images }} />

              <View className="absolute top-0 right-0 p-[2px] items-end justify-start rounded-tr-md rounded-bl-xl bg-primary">
                <View className="flex-row items-center space-x-1">
                  <Icon type="antdesign" name="star" color={colors.yellow} size={20} />
                  <Text className="text-xl font-bold text-white">{averageReview}</Text>
                </View>
                <Text className="text-xs text-white">({numberOfReview})</Text>
              </View>
            </View>

            <View className="flex-col mr-[5px] mb-[10px] mt[5px]">
              <View className="pt-[5px]">
                <Text className="text-lg font-bold" style={{ color: colors.grey1 }}>
                  {restaurantName}
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
                    {averageReview}
                  </Text>
                </View>
                <View className="flex-row ml-[5px]">
                  <Text className="text-xs" style={{ color: colors.grey3 }}>
                    ({numberOfReview})
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
            data={productData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ProductCard productsData={item} />}
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
