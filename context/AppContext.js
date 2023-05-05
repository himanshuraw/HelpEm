import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { BASE_URL } from '../config';
import { ToastAndroid } from 'react-native';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [userToken, setUserToken] = useState(null);
	const [userInfo, setUserInfo] = useState(null);

	const [victimFound, setVictimFound] = useState(null);

	const login = (name, password) => {
		setIsLoading(true);

		axios
			.post(`${BASE_URL}/admin/login`, {
				name: name,
				password: password,
			})
			.then((res) => {
				let userInfo = res.data;
				setUserInfo(userInfo);
				setUserToken(userInfo.token);

				AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
				AsyncStorage.setItem('userToken', userInfo.token);

				console.log(userInfo.token);
			})
			.catch((e) => {
				ToastAndroid.show('Incorrect username or password', ToastAndroid.LONG);
			});
		setIsLoading(false);
	};

	const logout = () => {
		setIsLoading(true);
		setUserToken(null);
		AsyncStorage.removeItem('userInfo');
		AsyncStorage.removeItem('userToken');
		setIsLoading(false);
	};

	const isLoggedIn = async () => {
		try {
			setIsLoading(true);
			let userInfo = await AsyncStorage.getItem('userInfo');
			let userToken = await AsyncStorage.getItem('userToken');
			userInfo = JSON.parse(userInfo);

			if (userInfo) {
				setUserToken(userToken);
				setUserInfo(userInfo);
			}

			setIsLoading(false);
		} catch (e) {
			console.log(`isLogged in error ${e}`);
		}
	};

	const putVictim = (data) => {
		setVictimFound(data);
	};

	useEffect(() => {
		isLoggedIn();
	}, []);

	return (
		<AppContext.Provider
			value={{ login, logout, isLoading, userToken, putVictim, victimFound }}
		>
			{children}
		</AppContext.Provider>
	);
};
