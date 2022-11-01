import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";

import { title, colors, parameters } from "../../global/styles";

const SignInWelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View className="items-center">
        <Image
          source={require("../../../assets/grab-food-logo.png")}
          className="w-full h-20"
        />
        <Text className="w-3/4 text-2xl text-center">
          Siêu ứng dụng đáp ứng mọi nhu cầu ăn uống
        </Text>
      </View>
      <View className="justify-start h-1/2 mt-[15px]">
        <Image
          source={require("../../../assets/slide/slide3.jpg")}
          resizeMethod="resize"
          className="w-full h-full"
        />
      </View>
      <View className="justify-end mx-5 mt-[30px]">
        <Button
          title="Đăng nhập"
          buttonStyle={parameters.styleButton}
          titleStyle={parameters.buttonTitle}
          onPress={() => navigation.navigate("SignInScreen")}
        />
      </View>
      <View className="justify-end mx-5 mt-[15px]">
        <Button
          title="Hoặc đăng ký ngay"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignInWelcomeScreen;

const styles = StyleSheet.create({
  createButton: {
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.primary,
    height: 50,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
});
