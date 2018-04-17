import _ from 'lodash';
import React from 'react';
import { TouchableOpacity, Image as RNImage, View, Dimensions } from 'react-native';
import { Card, CardItem, Text, Right } from 'native-base';
const { width } = Dimensions.get("window");

import icons from '../../../resources/img/icons';
import styles from './styles';
const {
    slideImageStyle,
    themeTextStyle,
    wrapperStyle,
    themeIconStyle,
    tileHeaderStyle,
} = styles;

const renderSorts = () => {
    return (
        <Text>
            wowowowowowowow1
        </Text>
    );
};

const renderTiles = (themes, onTilePress) => {
    return _.map(themes, (item, index) => {
        let all_months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        if (typeof item === 'undefined') {
            return (<View key={index}/>)
        }
        let icon = '';
        if (item.written) {
          icon = icons.closed_mail;
        } else {
          icon = icons.open_mail;
        }
        let margin = width / (3 * 10);
        let size = (width) / 3;
        let dt = new Date(item.release_time);
        let month_num = dt.getMonth();
        let day = dt.getDate();
        let year = dt.getFullYear();
        let time = dt.getHours();
        let month = all_months[month_num];
    
        if (time === 6) {
            sunmoon = 'Sun';
        }else {
            sunmoon = 'Moon';
        }
    
        return (
            <TouchableOpacity
                onPress={() => {
                    onTilePress(item);
                }}
                style={{...slideImageStyle, width: size, height: size, marginHorizontal: 0,}}
                key={index}
                
            >
                <Card
                    style={{ backgroundColor: '#F2F2F270'}}
                >
                    <CardItem header style={{...tileHeaderStyle, backgroundColor: '#F2F2F270'}}>
                        <Text style={{fontSize: 9}}>
                            {month} {day} {year} {sunmoon}
                        </Text>
                        
                    </CardItem>
                    <CardItem style={{ backgroundColor: '#F2F2F270'}}>
                        <Text style={themeTextStyle}>
                            {item.theme}
                        </Text>
                    </CardItem>
                    <CardItem footer style={{backgroundColor: '#F2F2F270'}}>
                        <Right style={{backgroundColor: '#F2F2F2100'}}>
                            <RNImage source={icon} style={themeIconStyle} />
                        </Right>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        );
      });
};

const Tiles = ({ themes, onTilePress }) => {
  return (
    <View style={{
        justifyContent: "flex-start", 
        flexDirection: "row", 
        flexWrap: "wrap"
        }}>
        {renderTiles(themes, onTilePress)}
    </View>
  );
};

export { Tiles };
