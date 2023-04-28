import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { BASE_URL, SOCKET_URL } from '../config';
import Button from '../components/Button';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import Hr from '../components/Hr';

const socket = io.connect(SOCKET_URL);

const HelpRequest = () => {
	const { userToken } = useContext(AppContext);
	const [requestData, setRequestData] = useState([]);
	const navigation = useNavigation();

	useLayoutEffect(() => {
		fetchData();
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	let config = {
		headers: { Authorization: userToken },
	};

	useEffect(() => {
		socket.on('recieve_request', (data) => {
			setRequestData(data);
		});
	}, [socket]);

	const fetchData = () => {
		axios
			.get(`${BASE_URL}/admin/helpRequest`, config)
			.then((res) => {
				let response = res.data;
				setRequestData(response);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleDelete = (id) => {
		axios.delete(`${BASE_URL}/admin/helpRequest/${id}`, config);
		fetchData();
	};

	return (
		<SafeAreaView>
			<ScrollView>
				<View className='bg-accent-blue-extraDark rounded-b-3xl mx-2'>
					<Text className='text-center mt-8 text-3xl font-bold text-white'>
						Help Requests
					</Text>
					<View className='items-center my-4'>
						<Button
							title='Fetch request data'
							color='bg-white'
							onpress={fetchData}
							height='h-12'
							textColor='black'
						/>
					</View>
				</View>
				{requestData.length == 0 ? (
					<View className=' justify-center items-center h-64'>
						<Text> No request available</Text>
					</View>
				) : (
					<View className='flex flex-row flex-wrap justify-start gap-4 mx-1 mt-3'>
						{requestData.map((req) => (
							<View
								className='bg-white border border-accent-blue-extraDark shadow-lg shadow-accent-blue-dark my-1 p-4 w-[45%] justify-around rounded-xl'
								key={req.uniqueId}
							>
								<View className='py-1'>
									<Text className='font-semibold text-accent-blue-extraDark'>
										ID:
									</Text>
									<Text className='text-accent-blue-dark'>{req.uniqueId}</Text>
								</View>
								<View className='py-1'>
									<Text className='font-semibold text-accent-blue-extraDark'>
										Longitude:
									</Text>
									<Text className='text-accent-blue-dark'>{req.longitude}</Text>
								</View>
								<View className='py-1'>
									<Text className='font-semibold text-accent-blue-extraDark'>
										Latitude:
									</Text>
									<Text className='text-accent-blue-dark'>{req.latitude}</Text>
								</View>
								<TouchableOpacity
									className='mt-3 py-1 items-center border border-red rounded-md'
									onPress={() => handleDelete(req.uniqueId)}
								>
									<AntDesign name='delete' size={24} color='red' />
								</TouchableOpacity>
							</View>
						))}
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	);
};

export default HelpRequest;
