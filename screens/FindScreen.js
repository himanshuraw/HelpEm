import { Dimensions, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Find from "../components/Find";

const FindScreen = () => {
  const navigation = useNavigation();

  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;

  const [aadhar, setAadhar] = useState("");
  const [phone, setPhone] = useState("");

  const searchByAadhar = () => {
    navigation.navigate("Found");
  };

  const searchByPhone = () => {
    navigation.navigate("Found");
  };

  const handleAadhar = (newText) => {
    setAadhar(newText);
  };

  const handlePhone = (newText) => {
    setPhone(newText);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className=" bg-white">
      <View
        className="bg-accent-blue-dark absolute rotate-45"
        style={{
          height,
          width: (2 * width) / 3,
          left: 50,
          top: -75,
        }}
      />
      <View
        className="bg-accent-blue-mid absolute rotate-45"
        style={{
          height: height * 2,
          width: width / 6,
          left: 100,
          top: -150,
        }}
      />
      <View className=" justify-center h-full">
        <Find
          name="aadhar"
          searchBy={searchByAadhar}
          handleText={handleAadhar}
        />
        <Find name="phone" searchBy={searchByPhone} handleText={handlePhone} />
      </View>
    </SafeAreaView>
  );
};

export default FindScreen;
