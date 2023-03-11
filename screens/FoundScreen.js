import { View, Text, Dimensions } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const FoundScreen = () => {
  const navigation = useNavigation();
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="items-center flex-1 bg-white">
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
      <View className="items-center mt-4 mb-7 w-5/6 py-5 shadow-lg shadow-accent-blue-extraDark bg-white">
        <Text className="text-accent-blue-dark text-2xl font-semibold">
          MATCH FOUND
        </Text>
      </View>
      <View className="w-5/6 px-6 py-10 shadow-lg shadow-accent-blue-extraDark bg-white">
        <View className="flex-row mb-3">
          <Text className="text-accent-blue-extraDark text-lg font-bold mr-3">
            Name :
          </Text>
          <Text className="text-accent-blue-dark text-lg"> Victim name </Text>
        </View>
        <View className="flex-row mb-3">
          <Text className="text-accent-blue-extraDark text-lg font-bold mr-3">
            Phone :
          </Text>
          <Text className="text-accent-blue-dark text-lg"> 9868 245 637 </Text>
        </View>
        <View className="flex-row mb-3">
          <Text className="text-accent-blue-extraDark text-lg font-bold mr-3">
            Aadhar :
          </Text>
          <Text className="text-accent-blue-dark text-lg">
            6438 2445 6137 8937
          </Text>
        </View>
        <View className="flex-row mb-3">
          <Text className="text-accent-blue-extraDark text-lg font-bold mr-3">
            Age :
          </Text>
          <Text className="text-accent-blue-dark text-lg"> 45 </Text>
        </View>
        <View className="flex-row mb-3">
          <Text className="text-accent-blue-extraDark text-lg font-bold mr-3">
            Gender :
          </Text>
          <Text className="text-accent-blue-dark text-lg"> Male </Text>
        </View>
        <View className="flex-row mb-3">
          <Text className="text-accent-blue-extraDark text-lg font-bold mr-3">
            Shelter :
          </Text>
          <Text className="text-accent-blue-dark text-lg"> Shelter-II </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FoundScreen;
