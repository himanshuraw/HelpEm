import { View, Text, FlatList, Animated } from "react-native";
import React, { useRef, useState } from "react";
import slides from "../__dummyData";
import GalleryItem from "./GalleryItem";
import Paginator from "./Paginator";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View className="justify-center items-center mt-16">
      <Text className=" font-bold text-3xl text-center text-accent-blue-dark">
        Gallery
      </Text>
      <FlatList
        data={slides}
        renderItem={({ item }) => <GalleryItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <Paginator data={slides} scrollX={scrollX} />
    </View>
  );
};

export default Gallery;
