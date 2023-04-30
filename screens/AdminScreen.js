import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ScrollView,
	Dimensions,
} from 'react-native';
import React, { useContext, useLayoutEffect, useState } from 'react';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import Dashboard from '../components/Dashboard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppContext } from '../context/AppContext';

const AdminScreen = () => {
	//? CHANGE USESTAES WITH REDUX : DISPATCH
	const navigation = useNavigation();
	const width = Dimensions.get('screen').width;
	const height = Dimensions.get('screen').height;

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	});

	const [shelterCount, setShelterCount] = useState();
	const [savedCount, setSavedCount] = useState();
	const [casualtiesCount, SetCasualtiesCount] = useState();

	const handleShelter = (count) => {
		setShelterCount(count);
	};

	const handleSaved = (count) => {
		setSavedCount(count);
	};

	const handleCasualty = (count) => {
		SetCasualtiesCount(count);
	};

	const updateValues = () => {
		console.log({ shelterCount, savedCount, casualtiesCount });
	};

	const { logout } = useContext(AppContext);

	return (
		<SafeAreaView>
			<ScrollView className='bg-white'>
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
				<View className='flex flex-row items-center justify-center mt-5 mx-4 py-4 rounded-lg border-4 border-accent-blue-extraDark bg-white'>
					<Text className='font-bold text-4xl text-accent-blue-extraDark'>
						A D M I N
					</Text>
				</View>
				<View className='mt-5'>
					<Dashboard />
				</View>

				{/* Register buttons */}
				<View className='flex-row'>
					<View className='w-1/2 items-center'>
						<Button
							title='Victim'
							color='bg-accent-blue-dark'
							onpress={() => navigation.navigate(`Victim`)}
							height='h-16'
						/>
					</View>
					<View className='w-1/2 items-center'>
						<Button
							title='Register Admin'
							color='bg-accent-blue-extraDark'
							onpress={() => navigation.navigate(`RegisterAdmin`)}
							height='h-16'
						/>
					</View>
				</View>

				{/* Set Counts */}
				<View className=' w-80 self-center my-10 px-4 h-96 items-center justify-evenly rounded-md bg-white shadow-xl shadow-accent-blue-extraDark'>
					<View className='flex-row'>
						<View className=' h-10 w-1/3 justify-center items-cente'>
							<Text className='text-lg'>Shelter</Text>
						</View>
						<TextInput
							keyboardType='phone-pad'
							caretHidden={true}
							className='h-10 w-7/12 px-3 text-md rounded-sm border-[1px] border-accent-blue-extraDark'
							onChangeText={handleShelter}
							placeholder={`Enter Selter Count`}
						/>
					</View>

					<View className='flex-row'>
						<View className=' h-10 w-1/3 justify-center items-cente'>
							<Text className='text-lg'>Saved</Text>
						</View>
						<TextInput
							keyboardType='phone-pad'
							caretHidden={true}
							className='h-10 w-7/12 px-3 text-md rounded-sm border-[1px] border-accent-blue-extraDark'
							onChangeText={handleSaved}
							placeholder={`Enter Saved Count`}
						/>
					</View>

					<View className='flex-row'>
						<View className=' h-10 w-1/3 justify-center items-cente'>
							<Text className='text-lg'>Casualty</Text>
						</View>
						<TextInput
							keyboardType='phone-pad'
							caretHidden={true}
							className='h-10 w-7/12 px-3 text-md rounded-sm border-[1px] border-accent-blue-extraDark'
							onChangeText={handleCasualty}
							placeholder={`Enter Casualties`}
						/>
					</View>
					<TouchableOpacity
						className='bg-accent-blue-dark py-3 px-9 rounded-full'
						onPress={updateValues}
					>
						<Text className='text-lg font-bold text-white '>Done</Text>
					</TouchableOpacity>
				</View>

				<View className='items-center justify-center mb-6 mx-4'>
					<Button
						title='Requests'
						color='bg-accent-blue-dark'
						onpress={() => navigation.navigate(`HelpReq`)}
						height='h-14'
					/>
					<Button
						title='Logout'
						color='bg-orange'
						onpress={logout}
						height='h-14'
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default AdminScreen;
