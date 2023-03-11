import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const FindCard = ({ name, searchBy, handleText }) => {
  return (
    <View className=" h-48 bg-white shadow-2xl shadow-accent-blue-extraDark mx-10 my-5 rounded-lg p-7">
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
          <View className="h-10 w-10 justify-center items-center bg-accent-blue-dark rounded-full">
            <AntDesign name="search1" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      {/* <Text>{name}</Text> */}
    </View>
  );
};

export default FindCard;
