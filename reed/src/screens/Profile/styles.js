import { Dimensions } from 'react-native';

export default {
    followInfoStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('window').width * 0.5,
    },

    followNumberStyle: {
        textAlign: 'center',
    },

    followButtonStyle: {
        height: 30,
        backgroundColor: '#E5E5E5',
        borderRadius: 35,
    },

    nameContainerStyle: {
        width: Dimensions.get('window').width * 0.5,
    },

    nameStyle: {
        borderRadius: 40, 
        backgroundColor: '#C4C4C4',
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
    },

    upperStyle: {
        flexDirection: 'row',
        backgroundColor: '#C5DACC',
        justifyContent: 'space-between',
    },
    
    wrapperStyle: {
    },
    slideImageStyle: {
        alignSelf: "flex-start",
        alignItems: 'center',
        justifyContent: 'center',
    },
    themeTextStyle:{
        fontSize: 12,
        textAlignVertical: "center",
        textAlign: "center",
    },
    
};