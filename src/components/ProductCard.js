import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Currency from "react-currency-formatter";

import { colors } from "../global/styles";
import { urlFor } from "../../sanity";

const ProductCard = ({ dishes }) => {
  const { name, price, image } = dishes;

  return (
    <View className="bg-white shadow-md w-[210px] p-[10px] m-[5px]">
      <View className="flex-row justify-between">
        <View className="justify-between w-[110px]">
          <Text className="text-base" style={{ color: colors.grey1 }}>
            {name}
          </Text>
          <Text className="text-base" style={{ color: colors.grey1 }}>
            <Currency quantity={price} currency="VND" pattern="##,### !" />
          </Text>
        </View>

        <View className="w-[75px] h-[65px] ">
          <Image
            className="w-full h-full"
            source={{ uri: urlFor(image?.asset?._ref).url() }}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
