import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@rneui/themed";
import { TabView, TabBar } from "react-native-tab-view";

import RestaurantHeader from "../../components/RestaurantHeader";
import restaurantData from "../../assets/data/restaurantsData.json";
import { colors } from "../../global/styles";

const SCREEN_WIDTH = Dimensions.get("window").width;
const initialLayout = { width: SCREEN_WIDTH };

const RestaurantHomeScreen = ({ navigation, route }) => {
  const { id, restaurant } = route.params;

  const [routes] = useState([
    { key: "first", title: "Menu" },
    { key: "second", title: "Thông tin" },
    { key: "third", title: "Bình luận" },
    { key: "fourth", title: "Ảnh" },
  ]);

  const [index, setIndex] = useState(0);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorContainerStyle={{ backgroundColor: colors.primary }}
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
      style={styles.tab}
      labelStyle={styles.tabLabel}
      contentContainerStyle={styles.tabContainer}
    />
  );

  const renderScene = () => <View></View>;
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View>
          <RestaurantHeader id={id} navigation={navigation} />
          {restaurantData[id].discount && (
            <View className="p-[3px] items-center justify-center">
              <Text className="text-sm font-bold uppercase text-primary">
                giảm {restaurantData[id].discount}% cho đơn hàng trên 100k
              </Text>
            </View>
          )}
          <View className="flex-row flex-1 mt-[5px] mx-[10px] justify-between items-center">
            <View>
              <Text className="text-xl font-bold" style={{ color: colors.grey1 }}>
                {restaurantData[id].restaurantName}
              </Text>
              <Text className="text-sm" style={{ color: colors.grey3 }}>
                {restaurantData[id].foodType}
              </Text>
              <View className="flex-row items-center mt-[5px] space-x-1">
                <Icon type="antdesign" name="star" color={colors.yellow} size={15} />
                <Text style={styles.text3}>{restaurantData[id].averageReview}</Text>
                <Text style={styles.text3}>({restaurantData[id].numberOfReview})</Text>
                <Text style={{ color: colors.grey3 }}>&#8226;</Text>
                <Text style={styles.text3}>{restaurantData[id].farAway} km</Text>
              </View>
            </View>

            <View className="flex-row justify-around flex-1">
              <View className="items-center">
                <Text style={styles.text1}>Lấy</Text>
                <View className="items-center justify-around mt-[5px]">
                  <Text style={styles.text2}>{restaurantData[id].collectTime}</Text>
                  <Text style={styles.text3}>phút</Text>
                </View>
              </View>

              <View className="items-center">
                <Text style={styles.text1}>Giao</Text>
                <View className="items-center justify-around mt-[5px]">
                  <Text style={styles.text2}>{restaurantData[id].deliveryTime}</Text>
                  <Text style={styles.text3}>phút</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="shadow-md" style={{ backgroundColor: colors.cardBackground }}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            tabBarPosition="top"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantHomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    color: colors.grey3,
  },
  text1: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.grey1,
  },
  text2: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.grey1,
  },
  text3: {
    fontSize: 13,
    fontWeight: "bold",
    color: colors.grey1,
  },
  tabStyle: {
    width: SCREEN_WIDTH / 4,
    maxHeight: 45,
  },
  tab: {
    backgroundColor: colors.primary,
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabLabel: {
    fontWeight: "bold",
    color: colors.cardBackground,
  },
  tabContainer: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});
