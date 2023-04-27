import { View, Text } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { BASE_URL, SOCKET_URL } from '../config';
import Button from '../components/Button';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const socket = io.connect(SOCKET_URL);

const HelpRequest = () => {
	const { userToken } = useContext(AppContext);
	const [requestData, setRequestData] = useState([]);

	let config = {
		headers: { Authorization: userToken },
	};

	useEffect(() => {
		socket.on('recieve_request', (data) => {
			setRequestData(data);
		});
	}, [socket]);

	return (
		<View>
			<Text>HelpRequest</Text>
			{requestData.map((req) => (
				<View className='flex flex-row gap-4' key={req.uniqueId}>
					<Text>{req.longitude}</Text>
					<Text>{req.latitude}</Text>
				</View>
			))}
			<Button
				title='send req'
				color='bg-bone'
				onpress={() => {
					console.log(userToken);
					axios
						.get(`${BASE_URL}/admin/helpRequest`, config)
						.then((res) => {
							let response = res.data;
							setRequestData(response);
							console.log(requestData);
						})
						.catch((err) => {
							console.log(err);
						});
				}}
			/>
		</View>
	);
};

export default HelpRequest;
