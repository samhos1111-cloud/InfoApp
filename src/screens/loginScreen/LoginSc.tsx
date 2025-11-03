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


import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../Navigation/mainStack';
import StackNames from '../../Navigation/Stacks/StackNames';
import styles from './styles';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


// ✅ عرّف نوع الـ navigation اللي بينتمي للـ MainStack
type LoginScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  typeof StackNames.AuthStack
>;

export default function LoginScreen() {
  // ✅ استخدم النوع اللي فوق هنا
  const navigation = useNavigation<LoginScreenNavigationProp>();

  function handleLogin() {
    // منطق تسجيل الدخول هنا
    // بعد تسجيل الدخول الناجح، انتقل إلى الشاشة الرئيسية
    navigation.navigate(StackNames.MainTap);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <Text style={styles.note}>if u have acount please login</Text>
      <View style={styles.formCont}>
        <View style={styles.inputCont}>
          <Text style={styles.lable}>Username:</Text>
          <TextInput style={styles.input} placeholder='enter your username' />
        </View >
        <View style={styles.inputCont}>
          <Text style={styles.lable}>password:</Text>
          <TextInput style={styles.input}
            secureTextEntry={true}
            placeholder='enter your password' />
        </View >
      </View>

      <TouchableOpacity
        style={styles.submitBtn}

        onPress={() => navigation.navigate(StackNames.MainTap)}
      >
        <Text style={styles.submitText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
