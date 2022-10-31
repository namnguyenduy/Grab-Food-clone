import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, Pressable } from "react-native";
import * as Animatable from "react-native-animatable";
import { Icon, SocialIcon, Button } from "@rneui/themed";

import { title, colors, parameters } from "../../global/styles";
import Header from "../../components/Header";

const SignInScreen = () => {
  const [visiblePassword, setVisiblePassword] = useState(true);

  const handleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  const textInput1 = useRef(1);
  const textInput2 = useRef(1);

  return (
    <View style={styles.container}>
      <Header title="Tài khoản" type="arrow-left" />

      <View className="ml-[5px] mt-[10px]">
        <Text style={title}>Đăng nhập</Text>
      </View>

      <View className="mt-5">
        <View style={styles.textInput}>
          <View>
            <Icon type="material" name="email" iconStyle={{ color: colors.grey3 }} />
          </View>
          <TextInput
            className="flex-1 ml-[10px]"
            placeholder="Email"
            keyboardType="email-address"
            ref={textInput1}
          />
        </View>
        <View style={styles.textInput}>
          <View>
            <Icon type="material" name="lock" iconStyle={{ color: colors.grey3 }} />
          </View>
          <TextInput
            className="flex-1 ml-[10px]"
            placeholder="Mật khẩu"
            secureTextEntry={visiblePassword}
            ref={textInput2}
          />
          <Pressable onPress={handleVisiblePassword}>
            {visiblePassword ? (
              <Icon
                type="material"
                name="visibility-off"
                iconStyle={{ color: colors.grey3 }}
              />
            ) : (
              <Icon
                type="material"
                name="visibility"
                iconStyle={{ color: colors.grey3 }}
              />
            )}
          </Pressable>
        </View>
      </View>

      <View className="ml-[30px]">
        <Text style={{ ...styles.text, textDecorationLine: "underline" }}>
          Quên mật khẩu ?
        </Text>
      </View>

      <View className="mx-5 mt-[25px]">
        <Button
          title="Đăng nhập"
          buttonStyle={parameters.styleButton}
          titleStyle={parameters.buttonTitle}
        />
      </View>

      <View className="mt-[30px] mb-5 mx-[30px] items-center justify-between flex-row">
        <Text className="flex-1 h-[2px]" style={{ backgroundColor: colors.grey1 }}></Text>
        <Text className="mx-5 text-xl">hoặc</Text>
        <Text className="flex-1 h-[2px]" style={{ backgroundColor: colors.grey1 }}></Text>
      </View>

      <View className="mx-5">
        <View className="items-center">
          <SocialIcon
            title="Tiếp tục với Facebook"
            button
            type="facebook"
            style={styles.socialIcon}
            onPress={() => {}}
          />
        </View>
        <View className="items-center mt-[10px]">
          <SocialIcon
            title="Tiếp tục với Google"
            button
            type="google"
            style={styles.socialIcon}
            onPress={() => {}}
          />
        </View>

        <View className="mt-[15px]">
          <Button
            title="Tạo tài khoản"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
          />
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: colors.grey3,
    fontSize: 16,
  },
  textInput: {
    padding: 10,
    paddingLeft: 15,
    marginHorizontal: 20,
    marginBottom: 20,

    borderBottomWidth: 1,
    borderBottomColor: colors.grey3,
    borderRadius: 10,

    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  socialIcon: {
    width: "100%",
    borderRadius: 50,
    height: 50,
  },
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
