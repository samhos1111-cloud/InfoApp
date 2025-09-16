// npx react-native run-android

import React from "react";
import {StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <HomeScreen/>
    </SafeAreaView>




  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", // لتوسيط العنصر 
  },
  text: {
    fontSize: 20,
    color: "#000", 
    paddingLeft: 20
  },
});

export default App;


// npx react-native start --reset-cache
