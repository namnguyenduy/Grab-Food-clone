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

      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={title}>Đăng nhập</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <View style={styles.textInput}>
          <View>
            <Icon type="material" name="email" iconStyle={{ color: colors.grey3 }} />
          </View>
          <TextInput
            style={{ flex: 1, marginLeft: 10 }}
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
            style={{ flex: 1, marginLeft: 10 }}
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

      <View style={{ marginLeft: 30 }}>
        <Text style={{ ...styles.text, textDecorationLine: "underline" }}>
          Quên mật khẩu ?
        </Text>
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 25 }}>
        <Button
          title="Đăng nhập"
          buttonStyle={parameters.styleButton}
          titleStyle={parameters.buttonTitle}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 30,
          marginBottom: 20,
          marginHorizontal: 30,
        }}
      >
        <Text style={{ flex: 1, height: 2, backgroundColor: colors.grey1 }}></Text>
        <Text style={{ marginHorizontal: 20, fontSize: 20 }}>hoặc</Text>
        <Text style={{ flex: 1, height: 2, backgroundColor: colors.grey1 }}></Text>
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <View style={{ alignItems: "center" }}>
          <SocialIcon
            title="Tiếp tục với Facebook"
            button
            type="facebook"
            style={styles.socialIcon}
            onPress={() => {}}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <SocialIcon
            title="Tiếp tục với Google"
            button
            type="google"
            style={styles.socialIcon}
            onPress={() => {}}
          />
        </View>

        <View style={{ marginTop: 15 }}>
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
    // alignContent: "center",
    // justifyContent: "center",
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
