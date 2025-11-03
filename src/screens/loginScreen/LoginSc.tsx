// import { useNavigation } from '@react-navigation/native';
// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import StackNames from '../../Navigation/Stacks/StackNames';

// export default function LoginScreen()  {
//   const {navigate}=useNavigation<navigation<mainStackParamList,StackNames.AuthStack>>();
//   return (
//     <TouchableOpacity 
//     style={{
//       // color :'red',
//       flex: 1,
//       justifyContent:'center',
//       alignItems:'center'
//     }}
// onPress={() => navigate(StackNames.MainTap)}

//         >
//       <Text >Welcome: Go to Home Screen</Text>
//     </TouchableOpacity>
//   )
// }   


import React, { useState } from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../Navigation/mainStack';
import StackNames from '../../Navigation/Stacks/StackNames';
import styles from './styles';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


type LoginScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  typeof StackNames.AuthStack
>;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  function handleLogin() {
    if(username =='Hossam' && password=='12345'){
      navigation.replace(StackNames.MainTap);
    }
    else{
      Alert.alert('Invalid username or password');
    }
  }

  const [username,setUsername]=useState();
  const [password,setPassword]=useState();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <Text style={styles.note}>if u have acount please login</Text>
      <View style={styles.formCont}>
        <View style={styles.inputCont}>
          <Text style={styles.lable}>Username:</Text>
          <TextInput style={styles.input} placeholder='enter your username' 
          onChangeText={(t) => setUsername(t)}
          />
          
        </View >
        <View style={styles.inputCont}>
          <Text style={styles.lable}>password:</Text>
          <TextInput style={styles.input}
            secureTextEntry={true}
            placeholder='enter your password'
            onChangeText={(p) => setPassword(p)}

            />
        </View >
      </View>

      <TouchableOpacity
        style={styles.submitBtn }

        onPress={handleLogin}
      >
        <Text style={styles.submitText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
