import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Button from "./Button";

const Admin = () => {
  //? CHANGE USESTAES WITH REDUX : DISPATCH

  const [shelterCount, setShelterCount] = useState();
  const [savedCount, setSavedCount] = useState();
  const [casualtiesCount, SetCasualtiesCount] = useState();

  const handleShelter = (count) => {
    setShelterCount(count);
  };

  const handleSaved = (count) => {
    setSavedCount(count);
  };

  const handleCasualty = (count) => {
    SetCasualtiesCount(count);
  };

  const updateValues = () => {
    console.log({ shelterCount, savedCount, casualtiesCount });
  };

  return (
    <View>
      {/* Register buttons */}
      <View className="flex-row mt-8">
        <View className="w-1/2 items-center">
          <Button
            title="Register Victim"
            color="bg-accent-blue-dark"
            onpress={() => console.log(`Victim clicked`)}
          />
        </View>
        <View className="w-1/2 items-center">
          <Button
            title="Register Admin"
            color="bg-accent-blue-dark"
            onpress={() => console.log(`Admin clicked`)}
          />
        </View>
      </View>

      {/* Set Counts */}
      <View className=" w-80 self-center my-10 px-4 h-96 items-center justify-evenly rounded-md bg-white shadow-xl shadow-accent-blue-extraDark">
        <View className="flex-row">
          <View className=" h-10 w-1/3 justify-center items-cente">
            <Text className="text-lg">Shelter</Text>
          </View>
          <TextInput
            keyboardType="phone-pad"
            caretHidden={true}
            className="h-10 w-7/12 px-3 text-md rounded-sm border-[1px] border-accent-blue-extraDark"
            onChangeText={handleShelter}
            placeholder={`Enter Selter Count`}
          />
        </View>

        <View className="flex-row">
          <View className=" h-10 w-1/3 justify-center items-cente">
            <Text className="text-lg">Saved</Text>
          </View>
          <TextInput
            keyboardType="phone-pad"
            caretHidden={true}
            className="h-10 w-7/12 px-3 text-md rounded-sm border-[1px] border-accent-blue-extraDark"
            onChangeText={handleSaved}
            placeholder={`Enter Saved Count`}
          />
        </View>

        <View className="flex-row">
          <View className=" h-10 w-1/3 justify-center items-cente">
            <Text className="text-lg">Casualty</Text>
          </View>
          <TextInput
            keyboardType="phone-pad"
            caretHidden={true}
            className="h-10 w-7/12 px-3 text-md rounded-sm border-[1px] border-accent-blue-extraDark"
            onChangeText={handleCasualty}
            placeholder={`Enter Casualties`}
          />
        </View>
        <TouchableOpacity
          className="bg-accent-blue-dark py-3 px-9 rounded-full"
          onPress={updateValues}
        >
          <Text className="text-lg font-bold text-white ">Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Admin;
