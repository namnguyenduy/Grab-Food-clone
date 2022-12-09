import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@rneui/themed";
import { TabView, TabBar } from "react-native-tab-view";
import { useDispatch } from "react-redux";

import { colors } from "../../global/styles";
import { RestaurantHeader } from "../../components";
import restaurantData from "../../assets/data/restaurantsData.json";
import { MenuScreen } from "../RestaurantTabs";
import sanityClient from "../../../sanity";
import { setRestaurantInfo } from "../../features/restaurantSlice";

const SCREEN_WIDTH = Dimensions.get("window").width;
const initialLayout = { width: SCREEN_WIDTH };

const RestaurantHomeScreen = ({ navigation, route }) => {
  const { id } = route.params;
  const dispatch = useDispatch();

  const [restaurant, setRestaurant] = useState([]);

  const getRestaurant = async () => {
    const data = await sanityClient.fetch(
      `*[_type == "restaurant" && id == $id] {
        ...,
        categories[]->{
          ...
        } | order(id asc),
        dishes[]->{
          ...,
          categories[]-> {
            ...
          }
        }
      }[0]`,
      { id }
    );
    dispatch(
      setRestaurantInfo({
        id: data.id,
        name: data.name,
        address: data.address,
        image: data.image,
        rating: data.rating,
        genre: data.categories,
        short_description: data.short_description,
        collectTime: data.collectTime,
        deliveryTime: data.deliveryTime,
        farAway: data.farAway,
        dishes: data.dishes,
      })
    );
    setRestaurant(data);
  };
  useEffect(() => {
    getRestaurant();
  }, []);

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

  const updateRoute = () => <View></View>;

  const menuPressed = () => {
    navigation.navigate("MenuProductScreen", {
      idRestaurant: id,
      menusOfRestaurant: restaurant.categories,
    });
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="pb-5" style={{ backgroundColor: colors.cardBackground }}>
          <RestaurantHeader
            image={restaurant?.image?.asset?._ref}
            id={id}
            navigation={navigation}
          />
          {restaurant?.discount > 0 && (
            <View className="p-[3px] items-center justify-center">
              <Text className="text-sm font-bold uppercase text-primary">
                giảm {restaurant?.discount}% cho đơn hàng trên 100k
              </Text>
            </View>
          )}
          <View className="py-[10px]">
            <View className="flex-row flex-1 mt-[5px] mx-[10px] justify-between">
              <View className="" style={{ width: SCREEN_WIDTH * 0.6 }}>
                <Text
                  className="w-full text-xl font-bold"
                  numberOfLines={2}
                  style={{ color: colors.grey1 }}
                >
                  {restaurant?.name}
                </Text>
                <Text className="text-sm" style={{ color: colors.grey3 }}>
                  {restaurant?.foodType?.map((type, index) => {
                    return index !== restaurant.length - 1 ? `${type}, ` : `${type}`;
                  })}
                </Text>
                <View className="flex-row items-center mt-[5px] space-x-1">
                  <Icon type="antdesign" name="star" color={colors.yellow} size={15} />
                  <Text style={styles.text3}>{restaurant?.rating}</Text>
                  <Text style={styles.text3}>({restaurant?.review})</Text>
                  <Text style={{ color: colors.grey3 }}>&#8226;</Text>
                  <Text style={styles.text3}>{restaurant?.farAway} km</Text>
                </View>
              </View>

              <View className="flex-row justify-around flex-1">
                <View className="items-center">
                  <Text style={styles.text1}>Lấy</Text>
                  <View className="items-center justify-around mt-[5px]">
                    <Text style={styles.text2}>{restaurant?.collectTime}</Text>
                    <Text style={styles.text3}>phút</Text>
                  </View>
                </View>

                <View className="items-center">
                  <Text style={styles.text1}>Giao</Text>
                  <View className="items-center justify-around mt-[5px]">
                    <Text style={styles.text2}>{restaurant?.deliveryTime}</Text>
                    <Text style={styles.text3}>phút</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="shadow-md" style={{ backgroundColor: colors.cardBackground }}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={updateRoute}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            tabBarPosition="top"
          />
        </View>
        {index === 0 && (
          <MenuScreen
            menus={restaurant?.categories}
            navigation={navigation}
            idRestaurant={id}
            menusOfRestaurant={restaurant?.categories}
          />
        )}
      </ScrollView>

      <TouchableOpacity>
        <View
          className="h-[50px] justify-center px-[5px]"
          style={{ backgroundColor: colors.primary }}
        >
          <View className="flex-row items-center justify-between">
            <Text
              className="pl-[3px] text-lg font-bold"
              style={{ color: colors.cardBackground }}
            >
              Giỏ hàng
            </Text>
            <View
              className="w-auto h-auto p-[5px] mr-[10px] rounded-full items-center justify-center "
              style={{ borderColor: colors.cardBackground, borderWidth: 1 }}
            >
              <Text
                className="text-lg font-bold"
                style={{ color: colors.cardBackground }}
              >
                0
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
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
