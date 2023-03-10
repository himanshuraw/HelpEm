import { Dimensions, ScrollView, Text, View } from "react-native";

import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Gallery from "../components/Gallery";
import Button from "../components/Button";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";

const HomeScreen = () => {
  const navigation = useNavigation();
  const width = Dimensions.get("screen").width;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className=" flex-1 bg-white">
      <ScrollView>
        <View
          className="rounded-full bg-accent-blue-mid absolute"
          style={{
            width: 2 * width,
            height: 2 * width,
            top: -0.5 * width,
            left: -0.5 * width,
          }}
        ></View>
        {/* Header */}
        <View className="items-center justify-center mt-8 mb-3">
          <Text className="text-accent-blue-extraDark text-4xl font-extrabold">
            Help em
          </Text>
        </View>

        {/* Buttons */}
        <View className=" items-center my-3">
          <Button title="Find" color="bg-accent-blue-extraDark" to="Find" />
          <Button title="Ask for Help" color="bg-orange" to="Help" />
        </View>

        {/* Gallery */}
        <Gallery />

        {/* Dashboard */}
        <Dashboard />

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
