import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground, Animated } from "react-native";
import { Icon } from "@rneui/themed";

import { colors } from "../global/styles";
import restaurantData from "../assets/data/restaurantsData.json";
import { urlFor } from "../../sanity";

const RestaurantHeader = ({ navigation, id, image }) => {
  const [liked, setLiked] = useState(false);
  const [counter, setCounter] = useState(-2);
  const [visible, setVisible] = useState(false);

  const index2 = 10;
  const currentValue = new Animated.Value(0);

  const likeHandler = () => {
    liked === false && setVisible(true);
    setLiked(!liked);
    setCounter(index2);
  };

  useEffect(() => {
    if (liked == true) {
      Animated.spring(currentValue, {
        toValue: 3,
        friction: 2,
        useNativeDriver: true,
      }).start(() => {
        Animated.spring(currentValue, {
          toValue: 1,
          friction: 2,
          useNativeDriver: true,
        }).start(() => {
          setVisible(false);
        });
      });
    }
  }, [liked]);

  return (
    <View className="h-[150px]">
      {image && (
        <ImageBackground className="h-full" source={{ uri: urlFor(image).url() }}>
          <View className="flex-row items-baseline justify-between">
            <View style={styles.circle}>
              <Icon
                name="arrow-left"
                type="material-community"
                size={25}
                color={colors.grey1}
                onPress={() => navigation.goBack()}
              />
            </View>

            <View style={styles.circle}>
              <Icon
                name={liked && index2 == counter ? "favorite" : "favorite-border"}
                type="material"
                size={30}
                color={colors.red}
                onPress={likeHandler}
              />
            </View>
          </View>
          <View className="items-center justify-center">
            {visible && index2 == counter && (
              <Animated.View style={{ transform: [{ scale: currentValue }] }}>
                <Icon name="favorite" type="material" size={40} color={colors.red} />
              </Animated.View>
            )}
          </View>
        </ImageBackground>
      )}
    </View>
  );
};

export default RestaurantHeader;

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9999,
    backgroundColor: colors.cardBackground,
  },
});
