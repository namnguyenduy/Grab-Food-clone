import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  FlatList,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { colors } from "../global/styles";
import * as Animatable from "react-native-animatable";
import filterData from "../assets/data/filterData.json";

export default function SearchComponent() {
  const [data, setData] = useState(filterData);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputFocus, setTextInputFocus] = useState(true);

  const navigation = useNavigation();
  const textInput = useRef(0);
  return (
    <View className="items-center">
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View
          className="mt-[10px] h-[50px] w-[96%] rounded-full border flex-row items-center"
          style={{ backgroundColor: colors.grey5, borderColor: colors.grey4 }}
        >
          <Icon
            name="search"
            type="material"
            size={32}
            iconStyle={{ marginLeft: 5 }}
            className="text-2xl p-[5px]"
            style={{ color: colors.grey2 }}
          />
          <Text className="text-base">Bạn đang thèm ăn gì?</Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View className="flex-1">
          <View className="h-[70px] justify-center px-[10px] ">
            <View className="border-2 flex-row justify-evenly items-center px-[10px] border-grey3 rounded-md mx-0 h-4/5">
              <Animatable.View>
                <Icon
                  name={textInputFocus ? "arrow-back" : "search"}
                  onPress={() => {
                    if (textInputFocus) setModalVisible(false);
                    setTextInputFocus(true);
                  }}
                  className="text-2xl p-[5px] text-grey2"
                  type="material"
                  iconStyle={{ marginRight: 5 }}
                />
              </Animatable.View>
              <TextInput
                className="w-[90%]"
                placeholder=""
                autoFocus={false}
                ref={textInput}
              />
              <Animatable.View>
                <Icon
                  name={textInputFocus ? "cancel" : null}
                  type="material"
                  className="mr-[10px]"
                  iconStyle={{ color: colors.grey3 }}
                  onPress={() => {
                    textInput.current.clear();
                    // handleSearch();
                  }}
                />
              </Animatable.View>
            </View>
          </View>

          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss;
                  navigation.navigate("SearchResultScreen", { item: item.name });
                  setModalVisible(false);
                  setTextInputFocus(true);
                }}
              >
                <View className="flex-row p-[15px] items-center">
                  <Text className="text-sm text-grey2">{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});
