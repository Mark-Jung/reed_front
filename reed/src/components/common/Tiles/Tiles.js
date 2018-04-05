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


const renderTiles = (themes, onTilePress) => {
  return _.map(themes, (item, index) => {
    let icon = '';
    if (item.written) {
      icon = icons.sealed_mail;
    } else {
      icon = icons.open_mail;
    }
    let margin = width / (3 * 10);
    let size = (width) / 3;
    return (
        <TouchableOpacity
            onPress={() => {
            onTilePress();
            }}
            style={{...slideImageStyle, width: size, height: size, marginHorizontal: 0,}}
            key={index}
        >
            <Card>
                <CardItem header style={{flexDirection: "row", flexWrap: "wrap"}}>
                    <Text>
                        {item.release_time}
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
    <View style={{justifyContent: "flex-start", flexDirection: "row", flexWrap: "wrap", marginTop: 30}}>
      {renderTiles(themes, onTilePress)}
    </View>
  );
};

export { Tiles };
