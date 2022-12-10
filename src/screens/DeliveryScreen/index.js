import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { Icon } from "@rneui/themed";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

import { selectRestaurant } from "../../features/restaurantSlice";
// import restaurantDatas from "../../assets/data/restaurantsData.json";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());

  const [arriver, setArriver] = useState("0h0");
  const arriveTimeFormat = (hours) => {
    const hour = Math.floor(hours);
    const minute = Math.floor((hours - hour) * 60);
    setArriver(`${hour}h${minute}`);
  };
  // const restaurant = restaurantDatas[0];
  useEffect(() => {
    setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
    }, 1000);
    const arriveTime = restaurant.deliveryTime / 60 + hours + minutes / 60;

    arriveTimeFormat(arriveTime);
  }, [hours, minutes]);

  return (
    <View className="flex-1 bg-primary">
      <SafeAreaView className="z-50">
        <View className="flex-row items-center justify-between p-5">
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <Icon name="close" type="material-community" color="white" size={30} />
          </TouchableOpacity>
          <Text className="text-lg font-light text-white">Hỗ trợ</Text>
        </View>

        <View className="z-50 p-6 mx-5 my-2 bg-white rounded-md shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Ước lượng thời gian tới</Text>
              <Text className="text-4xl font-bold">{arriver}</Text>
            </View>
            <Image
              source={require("../../../assets/images/delivery.webp")}
              className="w-20 h-20"
            />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Món ăn của bạn ở {restaurant.name} đã được chuẩn bị
          </Text>
        </View>
      </SafeAreaView>

      {restaurant.long && restaurant.lat && (
        <MapView
          initialRegion={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          className="z-0 flex-1 mt-10"
          mapType="mutedStandard"
        >
          <Marker
            coordinate={{
              latitude: restaurant.lat,
              longitude: restaurant.long,
            }}
            title={restaurant.name}
            description={restaurant.short_description}
            identifier="origin"
            pinColor="#00CCBB"
          />
        </MapView>
      )}

      <SafeAreaView className="flex-row items-center space-x-5 bg-white h-28">
        <Image
          source={require("../../../assets/images/driver.png")}
          className="w-12 h-12 p-4 ml-5 bg-gray-300 rounded-full"
        />
        <View className="flex-1">
          <Text className="text-lg">Nguyễn Duy Nam</Text>
          <Text className="text-gray-400">Giao hàng</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Gọi</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
