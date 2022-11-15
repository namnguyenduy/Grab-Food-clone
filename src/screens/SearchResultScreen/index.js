import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SearchResultCard from "../../components/SearchResultCard";
import RestaurantData from "../../assets/data/restaurantsData.json";
import { colors } from "../../global/styles";

const SCREEN_WIDTH = Dimensions.get("window").width;

const SearchResultScreen = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <FlatList
          showsVerticalScrollIndicator={false}
          initialNumToRender={2}
          style={{ backgroundColor: colors.cardBackground }}
          data={RestaurantData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SearchResultCard screenWidth={SCREEN_WIDTH} restaurantsData={item} />
          )}
          ListHeaderComponent={
            <View className="bg-white mb-[10px]">
              <Text
                className="text-xl px-[10px] py-[15px] font-bold"
                style={{ color: colors.grey1 }}
              >
                {RestaurantData.length} kết quả tìm kiếm cho danh mục {item}
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchResultScreen;

const styles = StyleSheet.create({});
