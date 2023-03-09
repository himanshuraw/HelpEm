import { View, Text } from "react-native";
import React from "react";

const Button = ({ data, color }) => {
  return (
    <View
      className={`w-11/12 h-12 ${color} items-center justify-evenly rounded-3xl my-3 shadow-md shadow-[#000]`}
    >
      <Text className="text-white text-lg font-semibold">{data}</Text>
    </View>
  );
};

export default Button;
