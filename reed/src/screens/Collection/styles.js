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
        flex: 1, 
        justifyContent: 'center',
        borderRadius: 20,
    },
    savedImageStyle: {
        width: 20,
        height: 20,
    }
}