import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Image, ImageBackground, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";
import Carousel from "react-native-snap-carousel";

import { title, colors, parameters } from "../../global/styles";
import { ListItemSubtitle } from "@rneui/base/dist/ListItem/ListItem.Subtitle";

const SignInWelcomeScreen = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const windowWidth = Dimensions.get("window").width;
  const carouselItems = [
    {
      image: require("../../../assets/slide/slide1.jpg"),
    },
    {
      image: require("../../../assets/slide/slide2.jpg"),
    },
    {
      image: require("../../../assets/slide/slide3.jpg"),
    },
    {
      image: require("../../../assets/slide/slide4.jpg"),
    },
    {
      image: require("../../../assets/slide/slide5.jpg"),
    },
  ];
  const renderCarouselItem = ({ item, index }) => {
    return (
      <View className="flex-1 ">
        <ImageBackground
          source={item.image}
          resizeMode="cover"
          className="justify-center flex-1"
        ></ImageBackground>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View className="items-center">
        <Image
          source={require("../../../assets/grab-food-logo.png")}
          className="w-full h-20"
        />
        <Text className="w-3/4 text-2xl text-center">
          Siêu ứng dụng đáp ứng mọi nhu cầu ăn uống
        </Text>
      </View>
      <View className="justify-start h-1/2 mt-[15px]">
        <View className="items-center justify-center flex-1 w-full px-5">
          <Carousel
            initialNumToRender={1}
            layout={"default"}
            ref={carouselRef}
            data={carouselItems}
            sliderWidth={windowWidth}
            itemWidth={windowWidth}
            renderItem={renderCarouselItem}
            onSnapToItem={(index) => setActiveIndex(index)}
            autoplay={true}
            loop={true}
          />
        </View>
      </View>
      <View className="justify-end mx-5 mt-[30px]">
        <Button
          title="Đăng nhập"
          buttonStyle={parameters.styleButton}
          titleStyle={parameters.buttonTitle}
          onPress={() => navigation.navigate("SignInScreen")}
        />
      </View>
      <View className="justify-end mx-5 mt-[15px]">
        <Button
          title="Hoặc đăng ký ngay"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
          onPress={() => navigation.navigate("SignUpScreen")}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignInWelcomeScreen;

const styles = StyleSheet.create({
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
