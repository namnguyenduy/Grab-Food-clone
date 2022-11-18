import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { formatCurrency, getSupportedCurrencies } from "react-native-format-currency";

import { colors } from "../global/styles";

const ProductCard = ({ productsData }) => {
  const { name, price, image } = productsData;
  const currencyCodes = getSupportedCurrencies();
  const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] = formatCurrency({
    amount: Number(price),
    code: "VND",
  });

  return (
    <View className="bg-white shadow-md w-[210px] p-[10px] m-[5px]">
      <View className="flex-row justify-between">
        <View className="justify-between w-[110px]">
          <Text className="text-base" style={{ color: colors.grey1 }}>
            {name}
          </Text>
          <Text className="text-base" style={{ color: colors.grey1 }}>
            {valueFormattedWithoutSymbol}
          </Text>
        </View>

        <View className="w-[75px] h-[65px] ">
          <Image className="w-full h-full" source={{ uri: image }} />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
