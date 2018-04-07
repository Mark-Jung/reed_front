import _ from 'lodash';
import React from 'react';
import { TouchableOpacity, Image as RNImage, View, Dimensions } from 'react-native';
import { Card, CardItem, Text } from 'native-base';
const { width } = Dimensions.get("window");

import icons from '../../../resources/img/icons';
import styles from './styles';
const {
    slideImageStyle,
    themeTextStyle,
    wrapperStyle,
    themeIconStyle
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
    
        let icon = '';
        if (item.written) {
          icon = icons.sealed_mail;
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
                    onTilePress(item.theme);
                }}
                style={{...slideImageStyle, width: size, height: size, marginHorizontal: 0,}}
                key={index}
            >
                <Card>
                    <CardItem header style={{flexDirection: "row", flexWrap: "wrap"}}>
                        <Text>
                            {month}, {day}, {year}, {sunmoon}
                        </Text>
                        <RNImage source={icon} style={themeIconStyle} />
                    </CardItem>
                    <CardItem>
                        <Text style={themeTextStyle}>
                            {item.theme}
                        </Text>
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
