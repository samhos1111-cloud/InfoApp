import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        marginTop: 10,
        paddingHorizontal: 10,
        // flex: 1,
        // backgroundColor: '#4b2525c0',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        marginVertical: 10,
    },
    listCont: {
        marginTop: 30,
        marginHorizontal: 10,
    },
    cardCont: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderColor: 'red',
        paddingEnd: 10,
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 10,
        // justifyContent: 'space-between',
    },
    cardArticleName: {
        textAlign: 'left',
        flex: 1,
    },
    cardArticelImage: {
        width: 100,
        height: 100,
        borderRadius: 10,

    },

}) 