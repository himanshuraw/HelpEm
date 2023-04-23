import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Dimensions,
} from 'react-native';
import React, { useContext, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppContext } from '../context/AppContext';

const AdminLogin = () => {
	const navigation = useNavigation();

	const width = Dimensions.get('screen').width;
	const height = Dimensions.get('screen').height;

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const { login } = useContext(AppContext);

	return (
		<>
			<View
				className='bg-accent-blue-dark absolute'
				style={{
					height,
					width: (9 * width) / 10,
					left: width / 20,
				}}
			/>
			<View
				className='bg-accent-blue-mid absolute'
				style={{
					height: height,
					width: width / 6,
					left: 70,
				}}
			/>
			<SafeAreaView className='items-center justify-center flex-1'>
				<View className='w-5/6 px-6 py-10 shadow-xl shadow-accent-blue-extraDark bg-white rounded-md'>
					<View>
						<Text className='text-xl font-medium text-accent-blue-extraDark mb-5'>
							Name
						</Text>
						<TextInput
							placeholder='Enter name..'
							onChangeText={(newText) => {
								setName(newText);
							}}
							className='h-9 w-full mb-5 px-3 text-md rounded-sm border-[1px] border-accent-blue-extraDark'
						/>
					</View>
					<View>
						<Text className='text-xl font-medium text-accent-blue-extraDark mb-5'>
							Password
						</Text>
						<TextInput
							placeholder='Enter password..'
							onChangeText={(newText) => {
								setPassword(newText);
							}}
							className='h-9 w-full mb-5 px-3 text-md rounded-sm border-[1px] border-accent-blue-extraDark'
						/>
					</View>
					<View className='items-center'>
						<TouchableOpacity
							onPress={() => login(name, password)}
							className='w-40 h-10 bg-accent-blue-dark rounded-full justify-center items-center'
						>
							<Text className='text-white text-lg'>login</Text>
						</TouchableOpacity>
					</View>
				</View>
			</SafeAreaView>
		</>
	);
};

export default AdminLogin;
