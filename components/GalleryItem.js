import { View, Text, Image } from "react-native";
import React from "react";

const GalleryItem = ({ item }) => {
  return (
    <View className="h-[500px] w-[100vw] justify-center items-center">
      <View className="h-[475px] w-[82vw] justify-center items-center bg-white rounded-3xl">
        <Image
          source={item.image}
          className=" w-[75vw] h-[450px] object-contain rounded-xl"
        />
      </View>
    </View>
  );
};

export default GalleryItem;
