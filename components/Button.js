import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Button = ({ title, color, onpress }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={onpress}
      className={`w-11/12 h-14 ${color} items-center justify-evenly rounded-full my-3 shadow-md shadow-[#000]`}
    >
      <Text className="text-white text-lg font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
