import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { SignInScreen } from "./src/screens/authScreens";

export default function App() {
  return (
    <View style={styles.container}>
      <SignInScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
