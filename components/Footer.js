import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View className="bg-accent-blue-extraDark h-24 flex-row justify-evenly">
      <View className=" justify-evenly">
        <Text className="text-white"> Contacts</Text>
      </View>
      <View className="justify-evenly">
        <View className="flex-row">
          <View className="mr-2">
            <AntDesign name="phone" size={24} color="white" />
          </View>
          <Text className="text-white">+91 7239 872 823</Text>
        </View>
        <View className="flex-row">
          <View className="mr-2">
            <AntDesign name="mail" size={24} color="white" />
          </View>
          <Text className="text-white">disastermanagement@gmail.com</Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;
