 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import screenNames from '../screenNames';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import FavoriteArtSc from '../../screens/FavoriteArtSc/FavoriteArtSc';
import Ionicons from 'react-native-vector-icons/Ionicons';
import stackNames from '../Stacks/StackNames';
import HomeStack from '../Stacks/HomeStack';

const myTap = createBottomTabNavigator();

export default function mainTap() {
    return (
        <myTap.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <myTap.Screen 
            //name={screenNames.homescreen} component={HomeScreen}
            name={stackNames.HomeStack} component={HomeStack}
                options={{
                    tabBarIcon: ({color}) =>(
                         <Ionicons name="home" size={24} color={color} />
                    ),
                    tabBarActiveTintColor: 'green',
                    tabBarInactiveTintColor: 'gray',
                }}
            />
            <myTap.Screen name={screenNames.favoriteArticles} component={FavoriteArtSc}
                options={{
                    tabBarLabel: 'Favorites',
                     tabBarIcon: ({color}) =>(
                         <Ionicons name="heart" size={24} color={color} />
                    ),
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'gray',
                }}
            />
        </myTap.Navigator>
    )
}
