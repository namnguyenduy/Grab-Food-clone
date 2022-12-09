import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@rneui/themed";
import Currency from "react-currency-formatter";

import sanityClient from "../../sanity";
import { colors } from "../global/styles";
import { urlFor } from "../../sanity";
import {
  addToBasket,
  selectBasketItemsWithId,
  removeFromBasket,
} from "../features/basketSlice";

const DishRow = ({ dish }) => {
  const [isPressed, setIsPressed] = useState(false);
  const { id, name, price, image, short_description } = dish;
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, short_description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`p-4 bg-white border border-gray-200 ${isPressed && "border-b-0"}`}
      >
        <View className="bg-white shadow-sm m-[5px] p-[10px]">
          <View className="flex-row justify-between space-x-2">
            <View className="justify-between flex-1">
              <Text className="text-base font-bold" style={{ color: colors.grey1 }}>
                {name}
              </Text>
              <View>
                <Text
                  className="text-base mr-[2px]"
                  style={{ color: colors.grey3 }}
                  numberOfLines={2}
                >
                  {short_description ? short_description : "chưa có mô tả"}
                </Text>
              </View>
              <Text className="text-base text-black">
                <Currency quantity={price} currency="VND" pattern="##,### !" />
              </Text>
            </View>
            <View className="w-[100px] h-[100px]">
              <Image
                className="flex-1"
                source={{ uri: urlFor(image?.asset?._ref).url() }}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="px-4 bg-white">
          <View className="flex-row items-center pb-3 space-x-2">
            <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
              <Icon
                name="minuscircle"
                type="antdesign"
                size={40}
                color={items.length > 0 ? colors.primary : "gray"}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <Icon name="pluscircle" type="antdesign" size={40} color={colors.primary} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;

const styles = StyleSheet.create({});
