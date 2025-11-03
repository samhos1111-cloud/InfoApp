import { StyleSheet } from "react-native";
import { fonts } from "../utils/helpers/constans";

export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'#f30a0aff',
        // alignItems:'center',
        paddingHorizontal: 16,
        paddingTop: 50,
        // justifyContent:'center',
    },
    formCont: {
        marginTop: 20,
    },
    inputCont: {
        marginBottom: 15,
    },
    input: {
        borderWidth: 2,
        borderColor: '#000000ff',
        // width:'80%',
        padding: 10,
        borderRadius: 5,
        fontFamily: fonts.Cairo,
        fontSize: 16,
    },
    lable: {
        fontFamily: fonts.Cairo,
        fontSize: 18,
        marginBottom: 5,
    },
    submitBtn: {
        backgroundColor: '#2196f3ff',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    submitText: { 
        fontFamily: fonts.CairoBold,
        fontSize: 18,
        color: '#ffffffff', 
        
    },
    title: {
        fontFamily: fonts.CairoBold,
        fontSize: 24,
        marginBottom: 10,
        textAlign: 'center',
    },
    note: {
        fontFamily: fonts.CairoLigh,
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',

    },
})