import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from '../Screens/StartScreen/StartScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StartScreen"
        component={StartScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
