import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ToastAndroid,
} from 'react-native';
import React, { useContext, useLayoutEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import Hr from '../components/Hr';
import axios from 'axios';
import { BASE_URL } from '../config';
import { AppContext } from '../context/AppContext';

const Victim = () => {
	const navigation = useNavigation();
	const { userToken } = useContext(AppContext);

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [aadhar, setAadhar] = useState('');
	const [age, setAge] = useState('');
	const [gender, setGender] = useState('');
	const [shelter, setShelter] = useState('');

	let config = {
		headers: { Authorization: userToken },
	};

	const handleSubmit = () => {
		let data = {
			name: name,
			phone: phone,
			aadhar: aadhar,
			age: age,
			gender: gender,
			shelter: shelter,
		};
		console.log(userToken);
		axios
			.post(`${BASE_URL}/admin/victim/register`, data, config)
			.then((res) => {
				let response = res.data;
				ToastAndroid.show('Victim has been registered!', ToastAndroid.LONG);
				navigation.navigate('Admin');
			})
			.catch((err) => {
				ToastAndroid.show(
					'Error occurred please try again!',
					ToastAndroid.LONG
				);
			});
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	});

	const handleName = (newText) => {
		setName(newText);
	};

	const handlePhone = (newText) => {
		setPhone(newText);
	};

	const handleAadhar = (newText) => {
		setAadhar(newText);
	};

	const handleAge = (newText) => {
		setAge(newText);
	};

	const handleGender = (newText) => {
		setGender(newText);
	};

	const handleShelter = (newText) => {
		setShelter(newText);
	};

	return (
		<SafeAreaView className='flex-1'>
			<View className='m-auto'>
				<View className=' w-80 my-10 px-4 py-6 gap-y-3 rounded-md bg-white shadow-xl shadow-accent-blue-extraDark'>
					<View className='items-center my-5'>
						<Text className='text-xl font-semibold text-accent-blue-dark'>
							Register Victim
						</Text>
					</View>
					<Hr />
					<View className='gap-2'>
						<Text className='text-md'>Name</Text>
						<TextInput
							className='h-8 text-md px-2 rounded-sm border border-accent-blue-mid'
							onChangeText={handleName}
							placeholder={``}
						/>
					</View>

					<View className='gap-2'>
						<Text className='text-md'>Phone number</Text>
						<TextInput
							keyboardType='number-pad'
							className='h-8 text-md px-2 rounded-sm border-[1px] border-accent-blue-mid'
							onChangeText={handlePhone}
							placeholder={``}
						/>
					</View>

					<View className='gap-2'>
						<Text className='text-md'>Aadhar number</Text>
						<TextInput
							keyboardType='number-pad'
							className='h-8 text-md px-2 rounded-sm border-[1px] border-accent-blue-mid'
							onChangeText={handleAadhar}
							placeholder={``}
						/>
					</View>

					<View className='gap-2'>
						<Text className='text-md'>Age</Text>
						<TextInput
							keyboardType='number-pad'
							className='h-8 text-md px-2 rounded-sm border-[1px] border-accent-blue-mid'
							onChangeText={handleAge}
							placeholder={``}
						/>
					</View>

					<View className='gap-2'>
						<Text className='text-md'>Gender</Text>
						<TextInput
							className='h-8 text-md px-2 rounded-sm border-[1px] border-accent-blue-mid'
							onChangeText={handleGender}
							placeholder={``}
						/>
					</View>

					<View className='gap-2 my-3'>
						<Text className='text-md'>Shelter</Text>
						<TextInput
							keyboardType='number-pad'
							className='h-8 text-md px-2 rounded-sm border-[1px] border-accent-blue-mid '
							onChangeText={handleShelter}
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

export default Victim;
