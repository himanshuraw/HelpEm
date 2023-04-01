import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";


const HelpScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleSubmit =() => {
    
    navigation.navigate('Home')
  }

  const [number, setNumber] = useState('');
  return (
    <SafeAreaView className="items-center flex-1 justify-center">

      <View className="w-5/6 h-1/3 bg-accent-blue-mid px-5 py-20 rounded-lg">
        <Text className="self-center text-2xl font-bold mb-10">
          Help arriving soon
        </Text>
        <TouchableOpacity className="bg-bone self-center rounded-lg" onPress={handleSubmit}>
        <Text className="px-10 py-3 text-xl font-bold ">
          Ok
        </Text>
      </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
};

export default HelpScreen;
