import { Dimensions, ScrollView, Text, ToastAndroid, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Gallery from '../components/Gallery';
import Button from '../components/Button';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';
import * as Location from 'expo-location';
import * as Application from 'expo-application';
import axios from 'axios';
import { BASE_URL } from '../config';

const HomeScreen = () => {
	const navigation = useNavigation();
	const width = Dimensions.get('screen').width;

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	const helpClicked = async () => {
		//! Send Location if send then ok else show error
		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== 'granted') {
			return ToastAndroid.show('Permission not granted');
		}

		let location = await Location.getCurrentPositionAsync({});
		if (location === null) {
			return ToastAndroid.show('Error occured : Not able to get location');
		}

		let uniqueId = Application.androidId;
		let data = {
			uniqueId: uniqueId,
			latitude: location.coords.latitude,
			longitude: location.coords.longitude,
		};
		console.log(data);

		axios.post(`${BASE_URL}/request`, data).then((res) => {
			const { success, message } = res.data;
			if (!success) {
				return ToastAndroid.showWithGravity(
					`${message}, Please try again`,
					ToastAndroid.LONG,
					ToastAndroid.CENTER
				);
			}

			return ToastAndroid.showWithGravity(
				`${message}, Help arriving soon`,
				ToastAndroid.LONG,
				ToastAndroid.CENTER
			);
		});

		// console.log(location);
	};

	return (
		<SafeAreaView className=' flex-1 bg-white'>
			<ScrollView>
				<View
					className='rounded-full bg-accent-blue-mid absolute'
					style={{
						width: 2 * width,
						height: 2 * width,
						top: -0.5 * width,
						left: -0.5 * width,
					}}
				/>
				<View>
					{/* Header */}
					<View className='items-center justify-center mt-8 mb-3'>
						<Text className='text-accent-blue-extraDark text-4xl font-extrabold'>
							Help em
						</Text>
					</View>

					{/* Buttons */}
					<View className=' items-center my-3'>
						<Button
							title='Find'
							color='bg-accent-blue-extraDark'
							onpress={() => navigation.navigate(`Find`)}
							height='h-14'
						/>
						<Button
							title='Ask for Help'
							color='bg-orange'
							onpress={helpClicked}
							height='h-14'
						/>
					</View>

					<Gallery />
				</View>
				<Dashboard />
				<View className='items-center mb-10'>
					<Button
						title='Admin'
						color='bg-accent-blue-dark'
						onpress={() => navigation.navigate(`AdminLogin`)}
						height='h-14'
					/>
				</View>
				<Footer />
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
