import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import RootNavigator from "./src/navigation/RootNavigator";

export default function App() {
  return (
    <View className="flex-1">
      <RootNavigator />
      <StatusBar style="auto" />
    </View>
  );
}
