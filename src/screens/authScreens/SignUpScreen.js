import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { Formik } from "formik";
import { Icon, Button } from "@rneui/themed";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../../firebase";
import Header from "../../components/Header";
import { colors, parameters } from "../../global/styles";

const initialValues = {
  phone_number: "",
  name: "",
  email: "",
  password: "",
};
const SignUpScreen = ({ navigation }) => {
  const [visiblePassword, setVisiblePassword] = useState(true);

  const signUp = async (values) => {
    const { email, password } = values;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created successfully");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        Alert.alert("Email đã được sử dụng");
      } else if (error.code === "auth/invalid-email") {
        Alert.alert("Email không hợp lệ");
      } else {
        Alert.alert(error.code, error.message);
      }
    }
  };

  const handleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <View className="flex-1">
      <Header title="Đăng ký" type="arrow-left" navigation={navigation} />

      <ScrollView keyboardShouldPersistTaps="always">
        <Formik initialValues={initialValues} onSubmit={(values) => signUp(values)}>
          {(props) => (
            <View>
              <View className="mt-5">
                <View style={styles.textInput}>
                  <View>
                    <Icon
                      type="material"
                      name="phone"
                      iconStyle={{ color: colors.grey3 }}
                    />
                  </View>
                  <TextInput
                    className="flex-1 ml-[10px]"
                    placeholder="Số điện thoại"
                    keyboardType="number-pad"
                    onChangeText={props.handleChange("phone_number")}
                    value={props.values.phone_number}
                  />
                </View>
                <View style={styles.textInput}>
                  <View>
                    <Icon
                      type="material"
                      name="person"
                      iconStyle={{ color: colors.grey3 }}
                    />
                  </View>
                  <TextInput
                    className="flex-1 ml-[10px]"
                    placeholder="tên hiển thị"
                    onChangeText={props.handleChange("name")}
                    value={props.values.name}
                  />
                </View>
                <View style={styles.textInput}>
                  <View>
                    <Icon
                      type="material"
                      name="email"
                      iconStyle={{ color: colors.grey3 }}
                    />
                  </View>
                  <TextInput
                    className="flex-1 ml-[10px]"
                    placeholder="Email"
                    keyboardType="email-address"
                    onChangeText={props.handleChange("email")}
                    value={props.values.email}
                  />
                </View>
                <View style={styles.textInput}>
                  <View>
                    <Icon
                      type="material"
                      name="lock"
                      iconStyle={{ color: colors.grey3 }}
                    />
                  </View>
                  <TextInput
                    className="flex-1 ml-[10px]"
                    placeholder="Mật khẩu"
                    secureTextEntry={visiblePassword}
                    onChangeText={props.handleChange("password")}
                    value={props.values.password}
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

              <View className="mx-5 mt-[25px]">
                <Button
                  title="Đăng ký"
                  buttonStyle={parameters.styleButton}
                  titleStyle={parameters.buttonTitle}
                  onPress={props.handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>

        <View className="mt-[30px] mb-5 mx-[30px] items-center justify-between flex-row">
          <Text
            className="flex-1 h-[2px]"
            style={{ backgroundColor: colors.grey1 }}
          ></Text>
          <Text className="mx-5 text-xl">hoặc</Text>
          <Text
            className="flex-1 h-[2px]"
            style={{ backgroundColor: colors.grey1 }}
          ></Text>
        </View>

        <View className="mx-5">
          <View className="mt-[15px]">
            <Button
              title="Đăng nhập"
              buttonStyle={styles.createButton}
              titleStyle={styles.createButtonTitle}
              onPress={() => navigation.navigate("SignInScreen")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
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
