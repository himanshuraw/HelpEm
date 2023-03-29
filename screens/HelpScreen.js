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

  const handleSubmit = () => {
    
  }

  const [number, setNumber] = useState('');
  return (
    <SafeAreaView>

      <View className="w-5/6 self-center bg-accent-blue-mid px-5 py-10">
        <Text>
          Phone Number
        </Text>
        <TextInput
        className=" bg-red"
        placeholder="Enter Phone number"
        keyboardType="phone-pad"
        onChangeText= {(newtext) => {
          setNumber(newtext);
        }}/>

        <TouchableOpacity className="bg-bone self-center" onPress={handleSubmit}>
        <Text>
          Ok
        </Text>
      </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
};

export default HelpScreen;
