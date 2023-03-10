import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Button = ({ title, color, to }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(`${to}`)}
      className={`w-11/12 h-12 ${color} items-center justify-evenly rounded-3xl my-3 shadow-md shadow-[#000]`}
    >
      <Text className="text-white text-lg font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
