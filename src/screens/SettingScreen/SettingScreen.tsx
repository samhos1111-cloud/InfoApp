import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import StackNames from "../../Navigation/Stacks/StackNames";


export default function SettingScreen() {
    const { reset } = useNavigation() as any;

    function handleLogout() {
        reset({
            index: 0,
            routes: [
                {
                    name: StackNames.AuthStack,
                }
            ],
        });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={handleLogout}>
                <Text>log out</Text>

            </TouchableOpacity>
        </View>
    );


}