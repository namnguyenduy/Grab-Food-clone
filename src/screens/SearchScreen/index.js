import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

import SearchComponent from "../../components/SearchComponent";
import filterData from "../../assets/data/filterData.json";
import { colors } from "../../global/styles";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SearchScreen = ({ navigation }) => {
  const listFilterRender = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("SearchResultScreen", { item: item.name })}
      >
        <View style={styles.imageView} className="items-center justify-center rounded-md">
          <ImageBackground
            className="w-full h-full bg-green-400 border rounded-md"
            source={{ uri: item.image }}
          >
            <View
              className="items-center justify-center w-full h-full"
              style={{ backgroundColor: "rgba(52, 52, 52,0.3)" }}
            >
              <Text className="text-lg text-cardBackground">{item.name}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const Footer = () => {
    return (
      <View className="my-5">
        <FlatList
          initialNumToRender={1}
          data={filterData}
          keyExtractor={(item) => item.id}
          renderItem={listFilterRender}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={<Text style={styles.listHeader}>Tất cả danh mục</Text>}
        />
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1">
      <SearchComponent />
      <View className="my-5">
        <FlatList
          contentContainerStyle={{ paddingBottom: 20 }}
          initialNumToRender={1}
          data={filterData}
          keyExtractor={(item) => item.id}
          renderItem={listFilterRender}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={<Text style={styles.listHeader}>Top danh mục</Text>}
          ListFooterComponent={<Footer />}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  imageView: {
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
    marginLeft: SCREEN_WIDTH * 0.035,
    marginBottom: SCREEN_WIDTH * 0.035,
  },
  listHeader: {
    fontSize: 18,
    color: colors.grey1,
    paddingBottom: 10,
    marginLeft: 12,
    fontWeight: "bold",
  },
});
