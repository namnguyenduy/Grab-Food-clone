import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import RestaurantHeader from "../../components/RestaurantHeader";

const RestaurantHomeScreen = ({ navigation, route }) => {
  const { id, restaurant } = route.params;
  return (
    <SafeAreaView>
      <RestaurantHeader id={id} navigation={navigation} />
    </SafeAreaView>
  );
};

export default RestaurantHomeScreen;

const styles = StyleSheet.create({});
