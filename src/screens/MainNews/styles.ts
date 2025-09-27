import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        marginHorizontal: 10,
        borderRadius: 20,
        overflow: 'hidden',
        width :355,
        
    },
    whitecont: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        padding: 10,
        marginTop: 100,
        margin: 20,
        borderRadius: 10,
    },
    redcontin: {
        backgroundColor: 'rgba(255, 0, 0, 0.7)',
        borderRadius: 10,
        alignSelf: 'flex-start',
        padding: 2,
        // paddingHorizontal:5,
        // paddingVertical:5,
    },
    textRED: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white'
    },
    nameWIGHT: {
        color: 'black',
        marginTop: 10,
    },
    listContainer:{
        marginTop : 30,
    }
  
});