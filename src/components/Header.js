import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@rneui/themed";

import { colors, parameters } from "../global/styles";

const Header = ({ title, type, navigation }) => {
  return (
    <SafeAreaView className="py-[10px] flex-row items-center" style={styles.header}>
      <View style={{ marginLeft: 20 }}>
        <Icon
          type="material-community"
          name={type}
          color={colors.headerText}
          size={28}
          onPress={() => navigation.goBack()}
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
    backgroundColor: colors.primary,
    height: parameters.headerHeight,
  },
  headerText: {
    marginLeft: 30,
    color: colors.headerText,
    fontSize: 22,
    fontWeight: "bold",
  },
});
