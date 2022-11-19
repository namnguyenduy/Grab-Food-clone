import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { formatCurrency, getSupportedCurrencies } from "react-native-format-currency";

import { colors } from "../global/styles";

const MenuCard = ({ menu }) => {
  const { meal, price, image, details } = menu;
  const currencyCodes = getSupportedCurrencies();
  const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] = formatCurrency({
    amount: Number(price),
    code: "VND",
  });
  return (
    <View className="bg-white shadow-sm m-[5px] p-[10px]">
      <View className="flex-row justify-between space-x-2">
        <View className="justify-between flex-1">
          <Text className="text-base font-bold" style={{ color: colors.grey1 }}>
            {meal}
          </Text>
          <View>
            <Text
              className="text-base mr-[2px]"
              style={{ color: colors.grey3 }}
              numberOfLines={2}
            >
              {details ? details : "chưa có mô tả"}
            </Text>
          </View>
          <Text className="text-base text-black">{valueFormattedWithoutSymbol}</Text>
        </View>
        <View className="w-[100px] h-[100px]">
          <Image className="flex-1" source={{ uri: image }} />
        </View>
      </View>
    </View>
  );
};

export default MenuCard;

const styles = StyleSheet.create({});
