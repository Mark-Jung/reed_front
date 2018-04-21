import { Dimensions } from 'react-native';

export default {
    wrapperStyle: {
    },
    slide1Style: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#C5DACC'
    },
    themeStyle: {
        fontWeight: '400',
        fontSize: 24,
        color: 'black',
        alignSelf: 'center',
        paddingTop: 200,
    },
    slide2Style: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#C5DACC'
    },
    inspireStyle: {
        fontWeight: '400',
        fontSize: 24,
        color: 'black',
        alignSelf: 'center',
        paddingTop: 170,
    },
    authorStyle: {
        fontWeight: '400',
        fontSize: 24,
        color: 'black',
        alignSelf: 'center',
    },
    logoStyle: {
        marginTop: -100,
    },
    cardStyle: {
        backgroundColor: '#fefaef',
        width: Dimensions.get("window").width*0.8,
        height: Dimensions.get("window").height*0.62,
        borderRadius: 20,
    }

};