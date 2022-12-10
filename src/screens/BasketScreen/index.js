import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency, getSupportedCurrencies } from "react-native-format-currency";
import { Icon } from "@rneui/themed";
import Currency from "react-currency-formatter";

import { selectRestaurant } from "../../features/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../../features/basketSlice";
import { urlFor } from "../../../sanity";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-primary shadow-xs relative">
          <View>
            <View>
              <Text className="text-xl font-bold text-center text-white">Giỏ hàng</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-3 right-5"
          >
            <Icon name="close-thick" type="material-community" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <Text
            className="py-5 px-[10px] text-lg font-bold text-center"
            numberOfLines={2}
          >
            {restaurant.name}
          </Text>
        </View>

        <View className="flex-row items-center px-4 py-3 my-5 space-x-4 bg-white">
          <Image
            source={require("../../../assets/images/driver.png")}
            className="p-4 bg-gray-300 rounded-full h-7 w-7"
          />
          <Text className="flex-1">Giao trong {restaurant.deliveryTime} phút</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Thay đổi</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center px-5 py-3 space-x-3 bg-white"
            >
              <Text className="text-[#00CCBB]">{items.length} x</Text>
              <Image
                source={{
                  uri: urlFor(items[0]?.image).url(),
                }}
                className="w-12 h-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-400">
                <Currency quantity={items[0]?.price} currency="VND" pattern="##,### !" />
              </Text>

              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Xóa
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 mt-5 space-y-4 bg-white">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Tạm tính</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="VND" pattern="##,### !" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Phí giao hàng</Text>
            <Text className="text-gray-400">
              <Currency quantity={20000} currency="VND" pattern="##,### !" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Tổng tiền</Text>
            <Text className="font-extrabold">
              <Currency
                quantity={basketTotal + 20000}
                currency="VND"
                pattern="##,### !"
              />
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("PreparingOrderScreen")}
            className="p-4 rounded-lg bg-primary"
          >
            <Text className="text-lg font-bold text-center text-white">Đặt hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
