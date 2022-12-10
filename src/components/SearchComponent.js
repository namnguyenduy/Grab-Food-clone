import React, { useState, useRef, useEffect } from "react";
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
import filterData from "../assets/data/filterData.json";
import sanityClient from "../../sanity";
import { interpolateNode } from "react-native-reanimated";

const SearchComponent = () => {
  const [listSearchData, setListSearchData] = useState([]);
  const [text, setText] = useState("");
  const [categories, setCategories] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputFocus, setTextInputFocus] = useState(true);
  useEffect(() => {
    sanityClient
      .fetch(
        `
     *[_type == "category" ] | order(id asc)
    `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);
  useEffect(() => {
    setListSearchData(categories);
  }, []);

  const navigation = useNavigation();
  const textInput = useRef(0);

  const contains = ({ name }, query) => {
    return name.toLowerCase().includes(query.toLowerCase());
  };

  const handleSearch = (text) => {
    if (text.length > 0) {
      const dataSearch = listSearchData.filter((item) => contains(item, text));
      setListSearchData(dataSearch);
    } else {
      setListSearchData(categories);
    }
  };
  const searchListRender = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          Keyboard.dismiss;
          navigation.navigate("SearchResultScreen", {
            idCategory: item.id,
            nameCategory: item.name,
          });
          setModalVisible(false);
          setTextInputFocus(true);
        }}
      >
        <View className="flex-row p-[15px] items-center">
          <Text className="text-sm text-grey2">{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

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
              <View>
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
              </View>
              <TextInput
                className="w-[90%]"
                placeholder=""
                autoFocus={false}
                ref={textInput}
                onFocus={() => setTextInputFocus(true)}
                onBlur={() => setTextInputFocus(false)}
                onChangeText={(newText) => {
                  handleSearch(newText);
                  setText(newText);
                }}
                defaultValue={text}
              />
              <View>
                <Icon
                  name={textInputFocus ? "cancel" : null}
                  type="material"
                  className="mr-[10px]"
                  iconStyle={{ color: colors.grey3 }}
                  onPress={() => {
                    textInput.current.clear();
                    setListSearchData(categories);
                  }}
                />
              </View>
            </View>
          </View>

          <FlatList
            data={listSearchData}
            renderItem={searchListRender}
            keyExtractor={(item) => item.id}
          />
        </View>
      </Modal>
    </View>
  );
};
export default SearchComponent;
const styles = StyleSheet.create({});
