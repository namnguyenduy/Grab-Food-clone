import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Header from "./src/components/Header";
import { colors } from "./src/global/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="My Account" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
