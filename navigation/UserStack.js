import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import FindScreen from '../screens/FindScreen';
import FoundScreen from '../screens/FoundScreen';
import AdminLogin from '../screens/AdminLogin';

const Stack = createNativeStackNavigator();

const UserStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Home' component={HomeScreen} />
			<Stack.Screen name='Find' component={FindScreen} />
			<Stack.Screen name='Found' component={FoundScreen} />
			<Stack.Screen name='AdminLogin' component={AdminLogin} />
		</Stack.Navigator>
	);
};

export default UserStack;
