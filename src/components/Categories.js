import { View, Text, StyleSheet, Pressable, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";

import sanityClient from "../../sanity";
import { urlFor } from "../../sanity";
import { colors } from "../global/styles";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [indexCheck, setIndexCheck] = useState(0);

  useEffect(() => {
    sanityClient
      .fetch(
        `
     *[_type == "category" ] | order(id asc)
    `
      )
      .then((data) => {
        setCategoriesData(data);
      });
  }, []);

  const CategoriesRender = ({ item, index }) => (
    <Pressable onPress={() => setIndexCheck(item?.id)} key={item?.id}>
      <View
        className="justify-center items-center p-[5px] m-[10px] w-20 h-[100px] rounded-md"
        style={
          indexCheck === item?.id
            ? { ...styles.smallCardSelected }
            : { ...styles.smallCard }
        }
      >
        <Image
          className="h-[60px] w-[60px] rounded-full"
          source={{ uri: urlFor(item?.image?.asset?._ref).url() }}
        />
        <View>
          <Text
            className="mt-[10px]"
            style={
              indexCheck === item?.id
                ? { ...styles.smallCardTextSelected }
                : { ...styles.smallCardText }
            }
          >
            {item.name}
          </Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.horizontalCard}>
      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Danh mục</Text>
      </View>

      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={categoriesData}
          keyExtractor={(item) => item?.id}
          extraData={indexCheck}
          renderItem={CategoriesRender}
          initialNumToRender={2}
        />
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  headerText: {
    color: colors.grey1,
    fontSize: 22,
    fontWeight: "bold",
  },
  headerTextView: {
    paddingVertical: 20,
  },
  smallCard: {
    backgroundColor: colors.grey4,
  },
  smallCardSelected: {
    backgroundColor: colors.primary,
  },
  smallCardTextSelected: {
    fontWeight: "bold",
    color: colors.cardBackground,
  },
  smallCardText: {
    fontWeight: "bold",
    color: colors.grey2,
  },
  horizontalCard: {
    marginTop: 10,
    backgroundColor: "rgba(255,255,255,0.85)",
    paddingHorizontal: 15,
  },
});
