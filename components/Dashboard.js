import { View, Text } from "react-native";
import React from "react";

const Dashboard = () => {
  return (
    <View className="items-center mt-6 mb-16">
      <View className="flex-row h-80 w-[90vw]">
        <View className="w-[60%] items-center py-10 justify-evenly bg-accent-blue-extraDark ">
          <Text className="text-lg font-bold text-accent-blue-light">
            Shelter Count
          </Text>
          <Text className="text-lg font-bold text-accent-blue-light">
            Saved
          </Text>
          <Text className="text-lg font-bold text-accent-blue-light">
            Casualities
          </Text>
        </View>
        <View className="w-[40%] items-center my-5 py-5 justify-evenly bg-accent-blue-dark">
          <Text className="text-lg font-bold text-white">52</Text>
          <Text className="text-lg font-bold text-white">135</Text>
          <Text className="text-lg font-bold text-white">8</Text>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
