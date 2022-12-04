import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
//import { useDispatch, useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import { Icon } from "@rneui/themed";

// import { selectRestaurant } from "../features/restaurantSlice";
// import {
//   removeFromBasket,
//   selectBasketItems,
//   selectBasketTotal,
// } from "../features/basketSlice";
//import { urlFor } from "../sanity";

const BasketScreen = () => {
  const navigation = useNavigation();
  //const restaurant = useSelector(selectRestaurant);
  //const items = useSelector(selectBasketItems);
  //const basketTotal = useSelector(selectBasketTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  //const dispatch = useDispatch();

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <View>
              <Text className="text-lg font-bold text-center">Basket</Text>
              {/* <Text className="text-center text-gray-400">{restaurant.title}</Text> */}
              <Text className="text-center text-gray-400">Day la ten nha hang</Text>
            </View>

            <TouchableOpacity
              onPress={navigation.goBack}
              className="absolute bg-gray-100 rounded-full top-3 right-5"
            >
              <Icon
                name="close-circle-outline"
                type="material-community"
                color="#00CCBB"
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row items-center px-4 py-3 my-5 space-x-4 bg-white">
          <Image
            // source={require("../assets/images/logo/logo.jpg")}
            className="p-4 bg-gray-300 rounded-full h-7 w-7"
          />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
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
                // source={{
                //   uri: image,
                // }}
                className="w-12 h-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-400">
                <Currency quantity={items[0]?.price} />
              </Text>

              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 mt-5 space-y-4 bg-white">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              {/* <Currency quantity={basketTotal} /> */}
              11
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={1.23} />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold">
              {/* <Currency quantity={basketTotal + 1.23} /> */}
              12
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("PreparingOrderScreen")}
            className="rounded-lg bg-[#00CCBB] p-4"
          >
            <Text className="text-lg font-bold text-center text-white">Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
