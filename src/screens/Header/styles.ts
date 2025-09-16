import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    //  alignItems: 'center', // علشان يوسّط الصورة
    //  marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent:'space-between',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:6,
  },
})