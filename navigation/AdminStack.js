import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterVictim from '../screens/RegisterVictim';
import AdminScreen from '../screens/AdminScreen';
import HelpRequest from '../screens/HelpRequest';

const Stack = createNativeStackNavigator();

const AdminStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Admin' component={AdminScreen} />
			<Stack.Screen name='RegisterVictim' component={RegisterVictim} />
			<Stack.Screen name='HelpReq' component={HelpRequest} />
		</Stack.Navigator>
	);
};

export default AdminStack;
