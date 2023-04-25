import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const RegisterVictim = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	});

	return (
		<SafeAreaView className='flex-1'>
			<View className='items-center flex-1 justify-center'>
				<View className=' w-80 my-10 px-4 h-96 items-center justify-evenly rounded-md bg-white shadow-xl shadow-accent-blue-extraDark'>
					<View className='flex-row'>
						<View className=' h-10 w-1/3 justify-center items-cente'>
							<Text className='text-lg'>Shelter</Text>
						</View>
						<TextInput
							keyboardType='phone-pad'
							caretHidden={true}
							className='h-10 w-7/12 px-3 text-md rounded-sm border-[1px] border-accent-blue-extraDark'
							onChangeText={() => {}}
							placeholder={`Enter Selter Count`}
						/>
					</View>

					<View className='flex-row'>
						<View className=' h-10 w-1/3 justify-center items-cente'>
							<Text className='text-lg'>Saved</Text>
						</View>
						<TextInput
							keyboardType='phone-pad'
							caretHidden={true}
							className='h-10 w-7/12 px-3 text-md rounded-sm border-[1px] border-accent-blue-extraDark'
							onChangeText={() => {}}
							placeholder={`Enter Saved Count`}
						/>
					</View>

					<View className='flex-row'>
						<View className=' h-10 w-1/3 justify-center items-cente'>
							<Text className='text-lg'>Casualty</Text>
						</View>
						<TextInput
							keyboardType='phone-pad'
							caretHidden={true}
							className='h-10 w-7/12 px-3 text-md rounded-sm border-[1px] border-accent-blue-extraDark'
							onChangeText={() => {}}
							placeholder={`Enter Casualties`}
						/>
					</View>
					<TouchableOpacity
						className='bg-accent-blue-dark py-3 px-9 rounded-full'
						onPress={() => {}}
					>
						<Text className='text-lg font-bold text-white '>Done</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default RegisterVictim;
