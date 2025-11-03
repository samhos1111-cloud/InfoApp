import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/loginScreen/LoginSc';
import screenNames from '../screenNames';

const Stack = createStackNavigator();

export default function AuthStack() {
    return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={screenNames.LoginScreen} component={LoginScreen} />
    </Stack.Navigator>
    )
}