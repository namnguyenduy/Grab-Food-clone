import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon, withBadge } from "@rneui/themed";
import { useSelector } from "react-redux";

import { colors, parameters } from "../global/styles";
import { selectBasketItems } from "../features/basketSlice";

const HomeHeader = ({ navigation }) => {
  const items = useSelector(selectBasketItems);
  const BadgeIcon = withBadge(items.length)(Icon);

  return (
    <SafeAreaView
      className="flex-row py-[10px] items-center justify-between"
      style={styles.header}
    >
      <View className="ml-[15px]">
        <Icon
          type="material-community"
          name="menu"
          color={colors.cardBackground}
          size={32}
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
      <View>
        <Text className="text-2xl font-bold" style={{ color: colors.cardBackground }}>
          Grab Food
        </Text>
      </View>
      <View className="mr-[15px]">
        <BadgeIcon
          type="feather"
          name="shopping-bag"
          size={32}
          color={colors.cardBackground}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    height: parameters.headerHeight,
  },
});
