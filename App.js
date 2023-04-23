import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppProvider } from './context/AppContext';
import AppNav from './navigation/AppNav';

export default function App() {
	return (
		<AppProvider>
			<AppNav />
		</AppProvider>
	);
}
