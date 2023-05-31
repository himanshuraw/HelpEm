import { View, Text } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';

import axios from 'axios';
import { BASE_URL } from '../config';

const Dashboard = () => {
	const [data, setData] = useState();

	const getData = () => {
		axios.get(`${BASE_URL}/count`).then((res) => {
			const dataObject = res.data;
			const newData = Object.entries(dataObject).map((x) => x);
			setData(newData);
		});
	};

	useLayoutEffect(() => {
		getData();
	}, []);

	return (
		<View className='items-center mt-6 mb-10'>
			<View className='flex-row h-80 w-[90vw]'>
				<View className='w-[60%] items-center py-10 justify-evenly bg-accent-blue-extraDark '>
					<Text className='text-lg font-bold text-accent-blue-light'>
						Shelter Count
					</Text>
					<Text className='text-lg font-bold text-accent-blue-light'>
						Saved
					</Text>
					<Text className='text-lg font-bold text-accent-blue-light'>
						Casualties
					</Text>
				</View>
				<View className='w-[40%] items-center my-5 py-5 justify-evenly bg-accent-blue-dark shadow-2xl shadow-black'>
					{data == undefined ? (
						<Text className='text-lg font-bold text-white'>0</Text>
					) : (
						data.map((x) => (
							<Text className='text-lg font-bold text-white' key={x[1].name}>
								{x[1].count}
							</Text>
						))
					)}
				</View>
			</View>
		</View>
	);
};

export default Dashboard;
