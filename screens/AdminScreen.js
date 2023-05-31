import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ScrollView,
	Dimensions,
	ToastAndroid,
} from 'react-native';
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import Dashboard from '../components/Dashboard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { BASE_URL } from '../config';

const AdminScreen = () => {
	//? CHANGE USESTAES WITH REDUX : DISPATCH
	const navigation = useNavigation();
	const width = Dimensions.get('screen').width;
	const height = Dimensions.get('screen').height;

	const { userToken } = useContext(AppContext);
	let config = {
		headers: { Authorization: userToken },
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	});

	const [shelterCount, setShelterCount] = useState();
	const [casualtiesCount, SetCasualtiesCount] = useState();

	const updateShelter = () => {
		let data = { count: shelterCount };
		axios
			.post(`${BASE_URL}/admin/count/shelter`, data, config)
			.then((res) => {
				let { success, payload } = res.data;
				success
					? ToastAndroid.show('Updated successfully', ToastAndroid.LONG)
					: ToastAndroid.show('Please try again', ToastAndroid.LONG);
			})
			.catch((err) => {
				console.log(err);
				ToastAndroid.show(
					'Server error while processing request',
					ToastAndroid.LONG
				);
			});
	};

	const updateCasualty = () => {
		let data = { count: casualtiesCount };
		axios
			.post(`${BASE_URL}/admin/count/casualty`, data, config)
			.then((res) => {
				let { success, payload } = res.data;
				success
					? ToastAndroid.show('Updated successfully', ToastAndroid.LONG)
					: ToastAndroid.show('Please try again', ToastAndroid.LONG);
			})
			.catch((err) => {
				console.log(err);
				ToastAndroid.show(
					'Server error while processing request',
					ToastAndroid.LONG
				);
			});
	};

	const handleShelter = (count) => {
		console.log(count);
		setShelterCount(count);
	};

	const handleCasualty = (count) => {
		SetCasualtiesCount(count);
	};

	const { logout } = useContext(AppContext);

	return (
		<SafeAreaView>
			<ScrollView className='bg-white'>
				<View
					className='bg-accent-blue-dark absolute rotate-45'
					style={{
						height,
						width: (2 * width) / 3,
						left: 50,
						top: -75,
					}}
				/>
				<View
					className='bg-accent-blue-mid absolute rotate-45'
					style={{
						height: height * 2,
						width: width / 6,
						left: 100,
						top: -150,
					}}
				/>
				<View className='flex flex-row items-center justify-center mt-5 mx-4 py-4 rounded-lg border-4 border-accent-blue-extraDark bg-white'>
					<Text className='font-bold text-4xl text-accent-blue-extraDark'>
						A D M I N
					</Text>
				</View>
				<View className='mt-5'>
					<Dashboard />
				</View>

				{/* Register buttons */}
				<View className='flex-row'>
					<View className='w-1/2 items-center'>
						<Button
							title='Victim'
							color='bg-accent-blue-dark'
							onpress={() => navigation.navigate(`Victim`)}
							height='h-16'
						/>
					</View>
					<View className='w-1/2 items-center'>
						<Button
							title='Register Admin'
							color='bg-accent-blue-extraDark'
							onpress={() => navigation.navigate(`RegisterAdmin`)}
							height='h-16'
						/>
					</View>
				</View>

				{/* Set Counts */}
				<View className='gap-4 my-4 mx-2'>
					{/*  */}
					<View className='bg-white shadow-md shadow-accent-blue-extraDark mx-3 rounded-lg'>
						<View className='flex-row py-3 px-5  gap-3 items-center'>
							<Text className='py-3 font-bold text-lg w-1/4'>Shelter</Text>
							<TextInput
								className='bg-white rounded-md border border-accent-blue-extraDark grow px-4'
								onChangeText={handleShelter}
								keyboardType='number-pad'
							/>

							<TouchableOpacity
								onPress={updateShelter}
								className='bg-accent-blue-dark rounded-md px-3 py-2 items-center '
							>
								<Text className='text-white font-bold'>Update</Text>
							</TouchableOpacity>
						</View>
					</View>

					{/*  */}
					<View className='bg-white shadow-md shadow-accent-blue-extraDark mx-3 rounded-lg'>
						<View className='flex-row py-3 px-5  gap-3 items-center'>
							<Text className='py-3 font-bold text-lg w-1/4'>Casualty</Text>
							<TextInput
								className='bg-white rounded-md border border-accent-blue-extraDark grow px-4'
								onChangeText={handleCasualty}
								keyboardType='number-pad'
							/>

							<TouchableOpacity
								onPress={updateCasualty}
								className='bg-accent-blue-dark rounded-md px-3 py-2 items-center '
							>
								<Text className='text-white font-bold'>Update</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>

				<View className='items-center justify-center mb-6 mx-4'>
					<Button
						title='Requests'
						color='bg-accent-blue-dark'
						onpress={() => navigation.navigate(`HelpReq`)}
						height='h-14'
					/>
					<Button
						title='Logout'
						color='bg-orange'
						onpress={logout}
						height='h-14'
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default AdminScreen;
