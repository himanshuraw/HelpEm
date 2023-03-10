import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const FindScreen = () => {
  const navigation = useNavigation();

  const [aadhar, setAadhar] = useState("");
  const [phone, setPhone] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <View className=" justify-center h-full">
        <View className="items-center my-10 mx-4 py-8 px-3 bg-accent-blue-dark rounded-2xl">
          <Text className="text-2xl font-semibold text-white m-3">
            Find by Aadhar number
          </Text>
          <TextInput
            caretHidden={true}
            className="h-10 w-11/12 text-lg rounded-xl m-3 bg-white text-center"
            onChangeText={(newText) => setAadhar(newText)}
            placeholder="Enter Aadhar number"
          />
          <TouchableOpacity>
            <Text className="h-12 w-28 text-center text-xl m-2 p-2 text-accent-blue-extraDark bg-bone rounded-full">
              Search
            </Text>
          </TouchableOpacity>
          {/* <Text>{aadhar}</Text> */}
        </View>

        <View className="items-center my-10 mx-4 py-8 px-3 bg-accent-blue-dark rounded-2xl">
          <Text className="text-2xl font-semibold text-white m-3">
            Find by Phone number
          </Text>
          <TextInput
            caretHidden={true}
            className="h-10 w-11/12 text-lg rounded-xl m-3 bg-white text-center"
            onChangeText={(newText) => setPhone(newText)}
            placeholder="Enter Aadhar number"
          />
          <TouchableOpacity>
            <Text className="h-12 w-28 text-center text-xl m-2 p-2 text-accent-blue-extraDark bg-bone rounded-full">
              Search
            </Text>
          </TouchableOpacity>
          {/* <Text>{phone}</Text> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FindScreen;
