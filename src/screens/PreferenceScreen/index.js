import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { Icon, CheckBox } from "@rneui/themed";
import { formatCurrency, getSupportedCurrencies } from "react-native-format-currency";

import { colors } from "../../global/styles";
import menuDetailedData from "../../assets/data/menuDetailedData.json";

const width = Dimensions.get("window").width;
const PreferenceScreen = ({ navigation, route }) => {
  const { id } = route.params;
  const { meal, details, price, preferenceData, required, minimum_quantity, counter } =
    menuDetailedData[id];

  const [preference, setPreference] = useState(preferenceData);
  const [checkCounter, setCheckCounter] = useState(counter);

  const currencyCodes = getSupportedCurrencies();
  const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] = formatCurrency({
    amount: Number(price),
    code: "VND",
  });
  return (
    <View className="flex-1">
      <StatusBar backgroundColor="#fff" />
      <ScrollView>
        <View className="h-[180px] overflow-hidden bg-primary relative">
          <View className="h-full">
            <Image
              className="h-full"
              resizeMode="cover"
              source={{
                uri: "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/VNITE2020121009134473450/detail/menueditor_item_8d89499397274ffab4f4eaa6e9397e8a_1619135557972548714.webp",
              }}
            />
          </View>
          <View className="absolute items-center justify-center w-full h-full"></View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute items-center justify-center w-10 h-10 bg-white rounded-full top-8 left-2"
          >
            <Icon
              name="arrow-left"
              type="material-community"
              color={colors.grey1}
              size={25}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.group} className="flex-row">
          <View style={{ width: width * 0.75 }}>
            <Text style={{ ...styles.preferenceText, color: colors.black }}>{meal}</Text>
            <Text className="text-sm mt-[5px]" style={{ color: colors.grey2 }}>
              {details}
            </Text>
          </View>
          <View className="items-end flex-1">
            <Text style={styles.preferenceText}>{valueFormattedWithoutSymbol}</Text>
          </View>
        </View>
        <View className=" p-[10px] mb-[10px]">
          {/* <View className="flex-row items-center justify-between">
            <Text  style={{ color: colors.black }}>
              Chọn loại đồ ăn
            </Text>
            <View>
              <Text className="font-bold p-[5px]" style={{ color: colors.grey2 }}>
                Bắt buộc
              </Text>
            </View>
          </View>

          <View className="mb-[10px]">
            <View className="flex-row items-center justify-between pr-[10px]">
              <View className="flex-row items-center">
                <CheckBox
                  center
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={true}
                  checkedColor={colors.primary}
                />
                <Text >------</Text>
              </View>
              <Text >{valueFormattedWithoutSymbol}</Text>
            </View>
          </View> */}

          <View>
            {preference.map((item, index) => (
              <View key={item.id} className="mb-[10px] bg-white py-[10px]">
                <View>
                  <View className="flex-row items-center justify-between">
                    <Text
                      className="font-bold p-[5px] text-base"
                      style={{ color: colors.black }}
                    >
                      {menuDetailedData[id].preferenceTitle[preference.indexOf(item)]}
                    </Text>
                    {required[preference.indexOf(item)] && (
                      <Text className="font-bold p-[5px]" style={{ color: colors.grey3 }}>
                        {minimum_quantity[preference.indexOf(item)]} bắt buộc
                      </Text>
                    )}
                  </View>

                  <View>
                    {item.map((options) => (
                      <TouchableOpacity
                        key={options.id}
                        onPress={() => {
                          const idPreference = preference.indexOf(item);
                          if (minimum_quantity[idPreference] !== null) {
                            const check = item.filter((items) =>
                              items.checked ? items : null
                            );
                            preference[idPreference].forEach((i) => {
                              if (i.id === options.id) {
                                if (check.length < minimum_quantity[idPreference]) {
                                  i.checked = !i.checked;
                                } else {
                                  i.checked = false;
                                }
                              }
                            });
                            counter[idPreference] = counter[idPreference] + 1;
                            setPreference([...preference]);
                            setCheckCounter([...counter]);
                          } else {
                            preference[idPreference].forEach((i) => {
                              if (i.id === options.id) {
                                i.checked = !i.checked;
                              }
                            });
                          }
                        }}
                      >
                        <View className="mb-[5px] border-b border-b-grey5">
                          <View className="flex-row items-center justify-between pr-[10px]">
                            <View className="flex-row items-center">
                              <CheckBox
                                center
                                checkedIcon="check-square-o"
                                uncheckedIcon="square-o"
                                checked={options.checked}
                                checkedColor={colors.primary}
                              />
                              <Text className="text-base" style={{ color: colors.grey1 }}>
                                {options.name}
                              </Text>
                            </View>
                            <Text className="text-base" style={{ color: colors.grey1 }}>
                              +{options.price}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View>
        <View
          className=" flex-row py-[10px] border-b-2 border-grey5 px-[15px] justify-center"
          style={{ backgroundColor: colors.cardBackground }}
        >
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.buttonQuantity}>
              <Icon name="remove" type="material" color={colors.primary} size={25} />
            </View>
          </TouchableWithoutFeedback>
          <Text className="mx-5 text-lg font-bold">1</Text>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.buttonQuantity}>
              <Icon name="add" type="material" color={colors.primary} size={25} />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View className="items-center p-[10px] bg-white">
          <TouchableOpacity
            className="items-center py-[15px] rounded-md w-80 bg-primary"
            onPress={() => navigation.navigate("PreparingOrderScreen")}
          >
            <Text className="font-bold font-lg" style={{ color: colors.cardBackground }}>
              Thêm vào giỏ hàng - 25.00
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PreferenceScreen;

const styles = StyleSheet.create({
  group: {
    backgroundColor: colors.cardBackground,
    padding: 10,
    marginBottom: 10,
  },
  preferenceText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonQuantity: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: colors.grey4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
});
