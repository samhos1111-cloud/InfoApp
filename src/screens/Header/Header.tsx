import React from 'react';
import {Text, View, Image, StyleSheet } from 'react-native';
import {styles} from './styles';
export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/licensed-image1.jpeg')}
        style={styles.image}
      />
       <Text style={styles.title}>HA News</Text>
      <Image
      source={require('../../assets/images/bill.png')}
      style={styles.image} 
      />
    </View>
  );
}

