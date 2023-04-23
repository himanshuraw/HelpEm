import { Dimensions, View } from 'react-native';
import React, { useContext, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FindCard from '../components/FindCard';
import axios from 'axios';
import { BASE_URL } from '../config';
import { AppContext } from '../context/AppContext';

const FindScreen = () => {
	const navigation = useNavigation();

	const width = Dimensions.get('screen').width;
	const height = Dimensions.get('screen').height;

	const [aadhar, setAadhar] = useState('');
	const [phone, setPhone] = useState('');

	const { putVictim } = useContext(AppContext);

	const searchByAadhar = () => {
		axios
			.post(`${BASE_URL}/searchByAadhar`, {
				aadhar,
			})
			.then((res) => {
				let data = res.data;
				putVictim(data);
				console.log(data);
				navigation.navigate('Found');
			})
			.catch((e) => {
				console.log(`aadhar ${e}`);
			});
	};

	const searchByPhone = () => {
		axios
			.post(`${BASE_URL}/searchByPhone`, {
				phone,
			})
			.then((res) => {
				let data = res.data;
				putVictim(data);
				console.log(data);
				navigation.navigate('Found');
			})
			.catch((e) => {
				console.log(`phone ${e}`);
			});
	};

	const handleAadhar = (newText) => {
		setAadhar(newText);
	};

	const handlePhone = (newText) => {
		setPhone(newText);
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);
	return (
		<SafeAreaView className=' bg-white'>
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
			<View className=' justify-center h-full'>
				<FindCard
					name='aadhar'
					searchBy={searchByAadhar}
					handleText={handleAadhar}
				/>
				<FindCard
					name='phone'
					searchBy={searchByPhone}
					handleText={handlePhone}
				/>
			</View>
		</SafeAreaView>
	);
};

export default FindScreen;
