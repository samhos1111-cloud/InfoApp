import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import screenNames from '../../Navigation/screenNames';
import { useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../Navigation/mainStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import StackNames from '../../Navigation/Stacks/StackNames';


type HeaderNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  typeof StackNames.MainTap
>;

export default function Header() {

const navigation = useNavigation<HeaderNavigationProp>();

    function handleGOTOSetting() {
      navigation.navigate(screenNames.SettingScreen);
    }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleGOTOSetting}>
        <Image
          source={require('../../assets/images/licensed-image1.jpeg')}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.title}>HA News</Text>
      <Image
        source={require('../../assets/images/bill.png')}
        style={styles.image}
      />
    </View>
  );
}

