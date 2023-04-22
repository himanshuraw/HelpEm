import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthProvider } from "./context/AuthContext";
import AppNav from './navigation/AppNav';

export default function App() {
  return (
    <AuthProvider>
      <AppNav/>
    </AuthProvider>
  );
}
