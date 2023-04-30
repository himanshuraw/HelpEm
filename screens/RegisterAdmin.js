import { View, Text, TextInput, ToastAndroid } from 'react-native';
import React, { useContext, useLayoutEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import Hr from '../components/Hr';
import { BASE_URL } from '../config';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const RegisterAdmin = () => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const { userToken } = useContext(AppContext);

	const navigation = useNavigation();
	let config = {
		headers: { Authorization: userToken },
	};
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	const handleName = (newText) => {
		setName(newText);
	};
	const handlePassword = (newText) => {
		setPassword(newText);
	};

	const handleSubmit = () => {
		let data = {
			name: name,
			password: password,
		};
		axios
			.post(`${BASE_URL}/admin/register`, data, config)
			.then((res) => {
				let { success, message } = res.data;
				if (!success) {
					ToastAndroid.show(`${message}, Try again!!`, ToastAndroid.LONG);
					return;
				}
				ToastAndroid.show(`${message}`, ToastAndroid.LONG);
				navigation.navigate('Admin');
			})
			.catch((err) => {
				ToastAndroid.show(`Try Again!!`, ToastAndroid.LONG);
				console.log(err);
			});
	};

	return (
		<SafeAreaView className='flex-1'>
			<View className='m-auto'>
				<View className=' w-80 my-10 px-4 py-6 gap-y-3 rounded-md bg-white shadow-xl shadow-accent-blue-extraDark'>
					<View className='items-center my-5'>
						<Text className='text-xl font-semibold text-accent-blue-dark'>
							Register Admin
						</Text>
					</View>
					<Hr />
					<View className='gap-2'>
						<Text className='text-md'>Username</Text>
						<TextInput
							className='h-8 text-md px-2 rounded-sm border border-accent-blue-mid'
							onChangeText={handleName}
							placeholder={``}
						/>
					</View>

					<View className='gap-2'>
						<Text className='text-md'>Password</Text>
						<TextInput
							className='h-8 text-md px-2 rounded-sm border-[1px] border-accent-blue-mid'
							onChangeText={handlePassword}
							placeholder={``}
						/>
					</View>

					<View className='items-center'>
						<Button
							title='Submit'
							onpress={handleSubmit}
							color='bg-accent-blue-dark'
							height='h-10'
						/>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default RegisterAdmin;
