import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import CountDown from "react-native-countdown-component";

import { colors } from "../global/styles";
import FoodCard from "./FoodCard";

const SCREEN_WIDTH = Dimensions.get("window").width;
const Featured = ({ id, title, restaurants, navigation }) => {
  return (
    <View style={styles.horizontalCard} key={id}>
      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>{title}</Text>
      </View>

      {id !== "fd37490e-eff7-44c5-9da9-a9a572c952e2" ? (
        <View>
          {id === "56e2e91c-f20f-439f-81ff-c059cbe3e45c" && (
            <View className="flex-row items-center">
              <Text className="text-base ml-[15px]">Ưu đãi trong </Text>
              <CountDown
                until={3600}
                size={14}
                digitStyle={{ backgroundColor: colors.lightgreen }}
                timeLabelStyle={{ color: colors.lightgreen, fontWeight: "bold" }}
                separatorStyle={{ color: "#1CC625" }}
                digitTxtStyle={{ color: colors.cardBackground }}
                timeToShow={["M", "S"]}
                timeLabels={{ m: null, s: null }}
                showSeparator
              />
            </View>
          )}

          <FlatList
            className="my-[10px]"
            initialNumToRender={2}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={restaurants}
            keyExtractor={(item) => item?._id}
            renderItem={({ item }) => (
              <View className="mr-[5px]">
                <FoodCard
                  onPressFoodCard={() =>
                    navigation.navigate("RestaurantHomeScreen", {
                      id: item._id,
                    })
                  }
                  restaurantData={item}
                  screenWidth={SCREEN_WIDTH * 0.8}
                />
              </View>
            )}
          />
        </View>
      ) : (
        <View className="pt-[10px]">
          {restaurants.map((item) => (
            <View key={item?._id} className="pb-5">
              <FoodCard
                onPressFoodCard={() =>
                  navigation.navigate("RestaurantHomeScreen", {
                    id: item?._id,
                  })
                }
                restaurantData={item}
                screenWidth={SCREEN_WIDTH * 0.88}
              />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default Featured;

const styles = StyleSheet.create({
  headerText: {
    color: colors.grey1,
    fontSize: 22,
    fontWeight: "bold",
  },
  headerTextView: {
    paddingVertical: 20,
  },
  smallCard: {
    backgroundColor: colors.grey4,
  },
  smallCardSelected: {
    backgroundColor: colors.primary,
  },
  smallCardTextSelected: {
    fontWeight: "bold",
    color: colors.cardBackground,
  },
  smallCardText: {
    fontWeight: "bold",
    color: colors.grey2,
  },
  horizontalCard: {
    marginTop: 10,
    backgroundColor: "rgba(255,255,255,0.85)",
    paddingHorizontal: 15,
  },
});
