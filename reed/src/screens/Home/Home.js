import React, { Component } from 'react';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Spinner,
  Grid,
  Col,
  Row,
  StyleProvider
} from 'native-base';
import styles from './styles';
import { View, Text, ListView, TouchableOpacity, Image, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import {
  load_current_theme,
} from '../../ducks/theme';
import icons from '../../resources/img/icons';

const {
  wrapperStyle,
  slide1Style,
  themeStyle,
  slide2Style,
  inspireStyle,
  authorStyle,
  logoStyle
} = styles;

class HomeComponent extends Component {

  componentDidMount() {
    this.props.load_current_theme();
  }
  render() {
    const { current_release_time, current_theme, current_theme_author, current_theme_inspire, error_message } = this.props;
    return (
      <Swiper style={wrapperStyle} loop={false} activeDotColor={'#6FCD97'}>
        <View style={slide1Style}>
          <Image style={logoStyle} source={icons.demoapp_typewriter} style={{width: 90, height: 90}}/>
          <Text style={{...themeStyle, fontFamily: 'Heiti SC',}}>{current_theme}</Text>
        </View>
        <View style={slide2Style}>
           <Image style={logoStyle} source={icons.demoapp_typewriter} style={{width: 90, height: 90}}/>  
          <Text style={{...inspireStyle, fontFamily: 'Heiti SC',}}>{current_theme_inspire}</Text>
          <Text style={{...authorStyle, fontFamily: 'Heiti SC',}}>{current_theme_author}</Text>
        </View>
      </Swiper>
    );

  }
}

export { HomeComponent };

const mapStateToProps = (state, ownProps) => {
  const { theme } = state;
  const { current_release_time, current_theme, current_theme_author, current_theme_inspire, error_message } = theme;
    return {
      ...ownProps,
      current_release_time,
      current_theme,
      current_theme_author,
      current_theme_inspire,
      error_message
    };
};

export const Home = connect(mapStateToProps, {
  load_current_theme,
})(HomeComponent);