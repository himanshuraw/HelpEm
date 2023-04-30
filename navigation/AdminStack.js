import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Victim from '../screens/Victim';
import AdminScreen from '../screens/AdminScreen';
import HelpRequest from '../screens/HelpRequest';
import RegisterAdmin from '../screens/RegisterAdmin';

const Stack = createNativeStackNavigator();

const AdminStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Admin' component={AdminScreen} />
			<Stack.Screen name='Victim' component={Victim} />
			<Stack.Screen name='HelpReq' component={HelpRequest} />
			<Stack.Screen name='RegisterAdmin' component={RegisterAdmin} />
		</Stack.Navigator>
	);
};

export default AdminStack;
