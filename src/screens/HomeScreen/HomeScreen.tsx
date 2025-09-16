import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../Header/Header';
// import MainNews from '../MainNews/MainNews';
// import styles from './styles';
const HomeScreen = () => {
    const [textCont, setTextCont] = useState('HA'); // state not var
    const [counter, setCounter] = useState(0);
    function changeText() {
        console.log('Text Before: ', textCont);
        setTextCont('Hossam');
        setCounter(prevValue => {
            if (prevValue % 2 === 0) {
                return prevValue + 1;
            } else {
                return prevValue + 3;
            }
        });
        console.log('After ', textCont);
    }
    return (
        <View>
            <Header />
            <MainNews />
        {/* <View style={styles.content}>
            <Text style={styles.text}>{textCont}</Text>
            <Text style={styles.text}>{counter}</Text>
            <TouchableOpacity style={styles.btn} onPress={changeText}>
                |<Text style={styles.btnText}>Click Me</Text>
            </TouchableOpacity>
        </View> */}
        </View>
    );
};
export default HomeScreen;