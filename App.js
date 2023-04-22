import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminLogin from "./screens/AdminLogin";
import FindScreen from "./screens/FindScreen";
import FoundScreen from "./screens/FoundScreen";
import HomeScreen from "./screens/HomeScreen";
import RegisterVictim from "./screens/RegisterVictim";
import { AuthProvider } from "./context/AuthContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Find" component={FindScreen} />
        <Stack.Screen name="Found" component={FoundScreen} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="RegisterVictim" component={RegisterVictim} />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}
