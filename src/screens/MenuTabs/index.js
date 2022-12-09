import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import React from "react";

import menuData from "../../assets/data/menuData.json";
import menuDetailedData from "../../assets/data/menuDetailedData.json";
import { DishRow } from "../../components";

const Route1 = ({ navigation, dishesData }) => {
  return (
    <View className="flex-1">
      <View className="mt-[5px] pb-5">
        {dishesData && (
          <FlatList
            className="bg-white"
            data={dishesData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <DishRow dish={item} />}
            initialNumToRender={2}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export { Route1 };

const styles = StyleSheet.create({});
