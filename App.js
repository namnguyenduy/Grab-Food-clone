import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { SignInScreen, SignInWelcomeScreen } from "./src/screens/authScreens";

export default function App() {
  return (
    <View style={styles.container}>
      <SignInWelcomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
