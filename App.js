import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { LogBox } from "react-native";

import RootNavigator from "./src/navigation/RootNavigator";
import { SignInContextProvider } from "./src/contexts/authContext";

export default function App() {
  LogBox.ignoreLogs(["EventEmitter.removeListener"]);
  return (
    <SignInContextProvider>
      <View className="flex-1">
        <RootNavigator />
        <StatusBar style="auto" />
      </View>
    </SignInContextProvider>
  );
}
