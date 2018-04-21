import { Dimensions } from 'react-native';

export default {
    nameStyle: {
        borderRadius: 40, 
        backgroundColor: 'grey',
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardImageStyle: {
        width: Dimensions.get('window').width * 0.93,
        height: 200,
        borderRadius: 20,
        alignSelf: 'center',
        backgroundColor: '#fefaef',
    },
    cardHeaderStyle:{
        borderRadius: 20,
        backgroundColor: 'white',
    },
    cardItemStyle: {
        alignContent: 'center',
        backgroundColor: '#fefaef',
        justifyContent: 'center',
        flex: 1,
        borderRadius: 20,
    },
    savedImageStyle: {
        width: 20,
        height: 20,
    }
}