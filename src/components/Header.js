import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@rneui/themed";

import { colors, parameters } from "../global/styles";

const Header = ({ title }) => {
  return (
    <SafeAreaView style={styles.header}>
      <View style={{ marginLeft: 20 }}>
        <Icon
          type="material-community"
          name="arrow-left"
          color={colors.headerText}
          size={28}
          onPress={() => {}}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    height: parameters.headerHeight,
    paddingVertical: 10,
  },
  headerText: {
    marginLeft: 30,
    color: colors.headerText,
    fontSize: 22,
    fontWeight: "bold",
  },
});
