import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import { colors } from "../global/styles";
import { urlFor } from "../../sanity";

const FoodCard = ({ onPressFoodCard, restaurantData, screenWidth }) => {
  const { name, farAway, review, image, deliveryTime } = restaurantData;

  return (
    <TouchableOpacity className="relative" onPress={onPressFoodCard}>
      <View
        className="mx-[10px] rounded-md border overflow-hidden"
        style={{ width: screenWidth, borderColor: colors.grey3 }}
      >
        <Image
          className="rounded-t-md h-[150px]"
          style={{ width: screenWidth }}
          source={{ uri: urlFor(image?.asset?._ref).url() }}
        />

        <View className="ml-[10px]">
          <View>
            <Text
              className="text-xl font-bold mt-[5px]"
              style={{ color: colors.grey1 }}
              numberOfLines={1}
            >
              {name}
            </Text>
          </View>

          <View className="flex-row items-center mt-[5px] pb-[5px]">
            <View className="flex-row">
              <Text className="text-xs font-bold" style={{ color: colors.grey3 }}>
                {`${deliveryTime} phút`}
              </Text>
            </View>
            <View className="px-[5px]">
              <Text style={{ color: colors.grey3 }}>&#8226;</Text>
            </View>

            <View className="flex-row flex-1">
              <Text
                className="text-xs font-bold px-[10px]"
                style={{ color: colors.grey3 }}
              >
                {`${farAway} km`}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        className="absolute t-0 p-[5px] right-[10px] items-center justify-center rounded-t-md rounded-bl-xl"
        style={{ backgroundColor: colors.primary }}
      >
        <Text className=" text-white text-xl font-bold -mt-[3px]">{review}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;
