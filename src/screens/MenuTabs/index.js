import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import React from "react";

import { MenuCard } from "../../components";
import menuData from "../../assets/data/menuData.json";
import menuDetailedData from "../../assets/data/menuDetailedData.json";

const Route1 = ({ navigation }) => {
  return (
    <View className="flex-1">
      <View className="mt-[5px] pb-5">
        <FlatList
          className="bg-white"
          data={menuDetailedData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
            // onPress={() => navigation.navigate("PreferenceScreen", { id: item.id })}
            >
              <MenuCard menu={item} />
              {isPressed && (
                <View className="px-4 bg-white">
                  <View className="flex-row items-center pb-3 space-x-2">
                    <TouchableOpacity
                      disabled={!items.length}
                      onPress={removeItemFromBasket}
                    >
                      <MinusCircleIcon
                        size={40}
                        color={items.length > 0 ? "#00CCBB" : "gray"}
                      />
                    </TouchableOpacity>
                    <Text>{items.length}</Text>
                    <TouchableOpacity onPress={addItemToBasket}>
                      <PlusCircleIcon size={40} color="#00CCBB" />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </TouchableOpacity>
          )}
          initialNumToRender={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const Route2 = () => <View style={styles.scene} />;
const Route3 = () => <View style={styles.scene} />;
const Route4 = () => <View style={{ ...styles.scene, backgroundColor: "green" }} />;
const Route5 = () => <View style={styles.scene} />;
const Route6 = () => <View style={styles.scene} />;
const Route7 = () => <View style={styles.scene} />;
const Route8 = () => <View style={styles.scene} />;

export { Route1, Route2, Route3, Route4, Route5, Route6, Route7, Route8 };

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: "#673ab7",
  },
});
