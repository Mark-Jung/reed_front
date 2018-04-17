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
        height: Dimensions.get('window').height * 0.4,
        borderRadius: 10,
        alignSelf: 'center',
        
    },
    cardHearder:{
        borderRadius: 10,
    },
}