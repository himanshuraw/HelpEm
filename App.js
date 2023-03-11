import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FindScreen from "./screens/FindScreen";
import FoundScreen from "./screens/FoundScreen";
import HelpScreen from "./screens/HelpScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Find" component={FindScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="Found" component={FoundScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
