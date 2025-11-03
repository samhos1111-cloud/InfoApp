import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/loginScreen/LoginSc';
import screenNames from '../screenNames';
import ArticleDetails from '../../screens/ArticalDetails/ArticleDetails';

const Stack = createStackNavigator();

export default function SheardStack() {
    return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={screenNames.ArticleDetails} component={ArticleDetails} />
    </Stack.Navigator>
    )
}