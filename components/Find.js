import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Find = ({ name, searchBy, handleText }) => {
  return (
    <View className=" h-52 bg-white shadow-2xl shadow-accent-blue-extraDark mx-10 my-5 rounded-2xl p-7">
      <Text className="text-xl font-medium text-accent-blue-extraDark mb-5">
        Find by {name} number
      </Text>
      <TextInput
        keyboardType="phone-pad"
        caretHidden={true}
        className="h-9 w-full mb-5 px-3 text-md rounded-sm border-[1px] border-accent-blue-extraDark"
        onChangeText={handleText}
        placeholder={`Enter ${name} number`}
      />
      <View className="w-full items-end">
        <TouchableOpacity onPress={searchBy}>
          <View className="h-10 w-10 justify-center items-center bg-bone rounded-full">
            <AntDesign name="search1" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      {/* <Text>{name}</Text> */}
    </View>
  );
};

export default Find;
