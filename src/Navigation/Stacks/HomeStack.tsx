import { createStackNavigator } from '@react-navigation/stack';
import loginScreen from '../../screens/loginScreen/LoginSc';
import screenNames from '../screenNames';
import ArticleDetails from '../../screens/ArticalDetails/ArticleDetails';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';


const Stack = createStackNavigator();

export default function HomeStack() {
    return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={screenNames.HomeScreen} component={HomeScreen} />

        {/* <Stack.Screen name={screenNames.ArticleDetails} component={ArticleDetails} /> */}
        
    </Stack.Navigator>
    )
}