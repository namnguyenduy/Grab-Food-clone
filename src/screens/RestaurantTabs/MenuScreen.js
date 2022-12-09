import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

import menuData from "../../assets/data/menuData.json";
import specialData from "../../assets/data/specialData.json";
import { colors } from "../../global/styles";

const MenuScreen = ({ navigation, menus, idRestaurant, menusOfRestaurant }) => {
  return (
    <View className="flex-1 pt-5" style={{ backgroundColor: colors.cardBackground }}>
      <View className="mx-[10px]">
        <Text className="text-xl font-bold">Đặc biệt</Text>
        {specialData.map((item) => (
          <View key={item.key} className="px-[10px]">
            <TouchableOpacity>
              <View
                className="flex-row items-center border-b p-[10px] space-x-1"
                style={{ borderBottomColor: colors.grey3 }}
              >
                <Icon type="antdesign" name="star" color={colors.yellow} size={15} />
                <Text className="text-lg font-bold" style={{ color: colors.grey2 }}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View className="mt-5 mx-[10px]">
        <Text className="text-xl font-bold">Thực đơn</Text>
        {menus &&
          menus?.map((item) => {
            return (
              <View key={item?.id} className="px-[10px]">
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("MenuProductScreen", {
                      idRestaurant,
                      menusOfRestaurant,
                      idCategoryOfMenu: item?.id,
                    })
                  }
                >
                  <View
                    className="flex-row items-center border-b p-[10px] space-x-1"
                    style={{ borderBottomColor: colors.grey3 }}
                  >
                    <Text className="text-lg font-bold" style={{ color: colors.grey2 }}>
                      {item?.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
      </View>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
