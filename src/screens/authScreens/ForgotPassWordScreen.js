import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { sendPasswordResetEmail } from "firebase/auth";

import { colors, parameters } from "../../global/styles";
import { auth } from "../../../firebase";

const ForgotPassWordScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleForgotPassWord = (email) => {
    setLoading(true);
    try {
      sendPasswordResetEmail(auth, email).then(() => {
        Alert.alert("Gửi mail thành công");
        setLoading(false);
      });
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        Alert.alert("Email không hợp lệ");
      } else {
        Alert.alert(error.code, error.message);
      }
      setLoading(false);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.circle}>
        <Icon
          name="arrow-left"
          type="material-community"
          size={25}
          color={colors.cardBackground}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View className="px-[10px] mt-5 mb-7">
        <Text className="text-xl text-center">Nhập email để đặt lại mật khẩu</Text>
      </View>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={({ email }) => {
          handleForgotPassWord(email);
        }}
      >
        {(props) => (
          <>
            <View style={styles.textInput}>
              <TextInput
                className="flex-1 ml-[10px]"
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={props.handleChange("email")}
                value={props.values.email}
              />
            </View>
            <View className="mx-5 mt-[25px]">
              <TouchableOpacity
                style={parameters.styleButton}
                onPress={props.handleSubmit}
              >
                {loading ? (
                  <ActivityIndicator size="large" color="#fff" />
                ) : (
                  <Text style={parameters.buttonTitleStyle}>Gửi mail</Text>
                )}
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default ForgotPassWordScreen;

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9999,
    backgroundColor: colors.primary,
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
