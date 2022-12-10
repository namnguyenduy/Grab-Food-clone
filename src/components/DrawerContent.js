import React, { useContext, useState, useEffect } from "react";
import { View, Text, Alert, Switch, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Avatar, Button, Icon } from "@rneui/themed";
import { signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

import { colors } from "../global/styles";
import { auth, db } from "../../firebase";
import { SignInContext } from "../contexts/authContext";

const DrawerContent = (props) => {
  const [user, setUser] = useState({});
  const customersCollectionRef = collection(db, "customers");
  const { signIn, dispatchSignedIn } = useContext(SignInContext);

  const getCustomersByEmail = (customers) => {
    const customer = customers.find((customer) => customer.email === signIn?.user?.email);
    setUser(customer);
  };
  useEffect(() => {
    const getCustomers = async () => {
      const customersCollection = await getDocs(customersCollectionRef);
      const customers = customersCollection.docs.map((doc) => doc.data());
      getCustomersByEmail(customers);
    };
    getCustomers();
  }, []);
  const logout = async () => {
    try {
      await signOut(auth).then(() => {
        dispatchSignedIn({ type: "SIGN_OUT" });
      });
    } catch (error) {
      Alert.alert(error.code, error.message);
    }
  };

  return (
    <View className="flex-1 ">
      <DrawerContentScrollView {...props}>
        <View style={{ backgroundColor: colors.primary }}>
          <View className="flex-row items-center pl-5 py-[10px]">
            <Avatar
              rounded
              size={75}
              avatarStyle={styles.avatar}
              source={{
                uri: "https://tophinhanhdep.com/wp-content/uploads/2021/10/Anime-Boys-Cute-Wallpapers.jpg",
              }}
            />
            <View className="ml-[10px]">
              <Text
                className="font-bold, text-lg"
                style={{ color: colors.cardBackground }}
              >
                Nguyễn Duy Nam
              </Text>
              <Text className="text-sm" style={{ color: colors.cardBackground }}>
                {signIn?.user?.email}
              </Text>
            </View>
          </View>

          <View className="flex-row justify-evenly pb-[5px]">
            <View className="flex-row">
              <View className="items-center justify-center ml-[10px]">
                <Text
                  className="text-lg font-bold"
                  style={{ color: colors.cardBackground }}
                >
                  1
                </Text>
                <Text className="text-sm" style={{ color: colors.cardBackground }}>
                  Yêu thích
                </Text>
              </View>
            </View>

            <View className="flex-row">
              <View className="items-center justify-center ml-[10px]">
                <Text
                  className="text-lg font-bold"
                  style={{ color: colors.cardBackground }}
                >
                  0
                </Text>
                <Text className="text-sm" style={{ color: colors.cardBackground }}>
                  Giỏ hàng
                </Text>
              </View>
            </View>
          </View>
        </View>

        <DrawerItemList {...props} />
        <DrawerItem
          label="Thanh toán"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="credit-card-outline"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Chiêu thị"
          icon={({ color, size }) => (
            <Icon type="material-community" name="sale" color={color} size={size} />
          )}
        />
        <DrawerItem
          label="Cài đặt"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="cog-outline"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Trợ giúp"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="help-circle-outline"
              color={color}
              size={size}
            />
          )}
        />

        <View className="border-t" style={{ borderTopColor: colors.grey5 }}>
          <Text className="text-base pt-[10px] pl-5" style={{ color: colors.grey2 }}>
            Chế độ hiển thị
          </Text>
          <View className="flex-row items-center justify-between pl-5 py-[5px] pr-[10px]">
            <Text
              className="text-base pl-[10px] font-bold"
              style={{ color: colors.grey2 }}
            >
              Chế độ tối
            </Text>
            <View className="pr-[10px]">
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor="#f4f3f4"
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
      <DrawerItem
        label="Đăng xuất"
        icon={({ color, size }) => (
          <Icon
            type="material-community"
            name="logout-variant"
            color={color}
            size={size}
          />
        )}
        onPress={logout}
      />
    </View>
  );
};
export default DrawerContent;

const styles = StyleSheet.create({
  avatar: {
    borderWidth: 4,
    borderColor: colors.cardBackground,
  },
});
