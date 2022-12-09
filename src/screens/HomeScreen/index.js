import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Icon } from "@rneui/themed";

import HomeHeader from "../../components/HomeHeader";
import { colors, parameters } from "../../global/styles";

import restaurantsData from "../../assets/data/restaurantsData.json";
import { Categories, Featured } from "../../components";
import sanityClient from "../../../sanity";

const HomeScreen = ({ navigation }) => {
  const [delivery, setDelivery] = useState(true);
  const [featuredCategories, setFeaturedCategories] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured"] {
          ...,
          restaurants[]-> {
            ...
          }
        } | order(id asc)
    `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <View className="flex-1">
      <HomeHeader navigation={navigation} />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <View
          className="flex-row mt-[5px] mx-[15px] pb-[5px] shadow-sm"
          style={{ backgroundColor: colors.cardBackground }}
        >
          <TouchableOpacity className="flex-1" onPress={() => setDelivery(true)}>
            <View
              className="items-center shadow-sm"
              style={{
                ...styles.deliveryButton,
                backgroundColor: delivery ? colors.buttons : colors.grey4,
              }}
            >
              <Text
                style={{
                  ...styles.deliveryText,
                  color: delivery ? colors.cardBackground : colors.primary,
                }}
              >
                Delivery
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1"
            onPress={() => {
              setDelivery(false);
              navigation.navigate("RestaurantsMapScreen");
            }}
          >
            <View
              className="items-center shadow-sm"
              style={{
                ...styles.deliveryButton,
                backgroundColor: delivery ? colors.grey4 : colors.buttons,
              }}
            >
              <Text
                style={{
                  ...styles.deliveryText,
                  color: delivery ? colors.primary : colors.cardBackground,
                }}
              >
                Pick up
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-between mt-[10px] mx-[15px]">
          <View
            className="flex-row items-center justify-center flex-1 py-2 rounded-full mr-7"
            style={{ backgroundColor: colors.grey4 }}
          >
            <View className="flex-row items-center">
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.grey1}
                size={26}
              />
              <Text className="ml-[5px]">Ngõ 6 Phạm Văn Đồng</Text>
            </View>
            <View
              className="flex-row items-center ml-5 px-[10px] py-[5px] rounded-full"
              style={{ backgroundColor: colors.cardBackground }}
            >
              <Icon
                type="material-community"
                name="clock-time-four"
                color={colors.grey1}
                size={26}
              />
              <Text className="ml-[5px]">Bây giờ</Text>
            </View>
          </View>
          <View>
            <Icon type="material-community" name="tune" color={colors.grey1} size={26} />
          </View>
        </View>

        <Categories />

        {featuredCategories?.map((featuredCategory) => (
          <Featured
            title={featuredCategory.name}
            id={featuredCategory.id}
            restaurants={featuredCategory.restaurants}
            navigation={navigation}
          />
        ))}
        {/* <View style={styles.horizontalCard}>
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Free ship bây giờ</Text>
          </View>

          <View>
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

            <FlatList
              className="my-[10px]"
              initialNumToRender={2}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={restaurantsData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View className="mr-[5px]">
                  <FoodCard
                    onPressFoodCard={() => {}}
                    restaurantData={item}
                    screenWidth={SCREEN_WIDTH * 0.8}
                  />
                </View>
              )}
            />
          </View>
        </View>

        <View style={styles.horizontalCard}>
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Ở đây luôn có ưu đãi</Text>
          </View>

          <View>
            <FlatList
              className="my-[10px]"
              initialNumToRender={2}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={restaurantsData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View className="mr-[5px]">
                  <FoodCard
                    onPressFoodCard={() => {}}
                    restaurantData={item}
                    screenWidth={SCREEN_WIDTH * 0.8}
                  />
                </View>
              )}
            />
          </View>
        </View>

        <View style={styles.horizontalCard}>
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Cửa hàng ở gần bạn</Text>
          </View>

          <View className="pt-[10px]">
            {restaurantsData.map((item) => (
              <View key={item.id} className="pb-5">
                <FoodCard
                  onPressFoodCard={() => {}}
                  restaurantData={item}
                  screenWidth={SCREEN_WIDTH * 0.88}
                />
              </View>
            ))}
          </View>
        </View> */}
      </ScrollView>

      {delivery && (
        <View className="absolute bottom-[10px] right-[15px] bg-white w-12 h-12 rounded-full items-center shadow-md">
          <TouchableOpacity
            className="justify-center flex-1"
            onPress={() => navigation.navigate("RestaurantsMapScreen")}
          >
            <Icon name="place" type="material" size={32} color={colors.primary} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 5,
    paddingVertical: 10,
  },
  deliveryText: {
    fontSize: 16,
    color: colors.cardBackground,
  },
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
