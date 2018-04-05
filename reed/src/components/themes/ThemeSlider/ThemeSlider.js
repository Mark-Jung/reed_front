import _ from 'lodash';
import React from 'react';
import { TouchableOpacity, Image as RNImage, View } from 'react-native';
import { Card, CardItem, Text } from 'native-base';
import Swiper from 'react-native-swiper';
import icons from '../../../resources/img/icons';
import styles from './styles';

const renderSlides = (themes, onThemePress) => {
  const {
    slideImageStyle,
    themeTextStyle,
    wrapperStyle,
    themeIconStyle
  } = styles;
  return _.map(themes, (item, index) => {
    let icon = '';
    if (item.written) {
      icon = icons.sealed_mail;
    } else {
      icon = icons.open_mail;
    }
    return (
      <Swiper 
        style={wrapperStyle} 
        loop={false} 
        key={`theme+${index}`}
        showPagination={false}
    >
        <TouchableOpacity
            onPress={() => {
            onThemePress(index);
            }}
            style={slideImageStyle}
        >
            <Card>
                <CardItem header>
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

        <TouchableOpacity
            onPress={() => {
            onThemePress(index);
            }}
            style={slideImageStyle}
        >
            <Card>
                <CardItem header>
                    <Text>
                        {item.release_time}
                    </Text>
                    <RNImage source={icon} style={themeIconStyle} />
                </CardItem>
                <CardItem>
                    <Text style={themeTextStyle}>
                        {item.theme_inspire}
                        {item.theme_author}
                    </Text>
                </CardItem>
            </Card>
        </TouchableOpacity>
      </Swiper>
    );
  });
};

const ThemeSlider = ({ themes, onThemePress }) => {
  return (
    <View>
      {renderSlides(themes, onThemePress)}
    </View>
  );
};

export { ThemeSlider };