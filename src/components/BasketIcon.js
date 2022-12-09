import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  return (
    <View className="absolute z-50 w-full bottom-10">
      <TouchableOpacity
        onPress={() => navigation.navigate("BasketScreen")}
        className="flex-row items-center p-4 mx-5 space-x-1 rounded-lg bg-primary"
      >
        <Text className="px-2 py-1 text-lg font-extrabold text-white shadow-md bg-buttons">
          {items.length}
        </Text>
        <Text className="flex-1 text-lg font-extrabold text-center text-white">
          Giỏ hàng
        </Text>
        <Text className="text-lg font-extrabold text-white">
          <Currency quantity={basketTotal} currency="VND" pattern="##,### !" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
