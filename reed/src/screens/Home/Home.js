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

const {
  wrapperStyle,
  slide1Style,
  themeStyle,
  slide2Style,
  inspireStyle,
  authorStyle
} = styles;

class HomeComponent extends Component {

  componentDidMount() {
    this.props.load_current_theme();
  }
  render() {
    const { current_release_time, current_theme, current_theme_author, current_theme_inspire, error_message } = this.props;
    return (
      <Swiper style={wrapperStyle} loop={false}>
        <View style={slide1Style}>
          <Text style={themeStyle}>{current_theme}</Text>
        </View>
        <View style={slide2Style}>
          <Text style={inspireStyle}>{current_theme_inspire}</Text>
          <Text style={authorStyle}>{current_theme_author}</Text>
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