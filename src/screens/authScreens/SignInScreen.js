import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, Pressable } from "react-native";
import * as Animatable from "react-native-animatable";
import { Icon } from "@rneui/themed";

import { title, colors } from "../../global/styles";
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

      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Vui lòng nhập email và mật khẩu</Text>
        <Text style={styles.text}>Hoặc đăng ký ngay!</Text>
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
});
