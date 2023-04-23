import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import UserStack from './UserStack';
import AdminStack from './AdminStack';
import { AppContext } from '../context/AppContext';
import { ActivityIndicator, View } from 'react-native';

const AppNav = () => {
	const { isLoading, userToken } = useContext(AppContext);

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size={'large'} />
			</View>
		);
	}

	return (
		<NavigationContainer>
			{userToken !== null ? <AdminStack /> : <UserStack />}
		</NavigationContainer>
	);
};

export default AppNav;
