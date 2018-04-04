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
import { View, Text, ListView, TouchableOpacity, Image, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import {
  load_current_theme,
} from '../../ducks/theme';


const {
  themeStyle,
  homeContainerStyle,
} = styles;


class HomeComponent extends Component {

  componentDidMount() {
    this.props.load_current_theme();
  }
  render() {
    const { current_release_time, current_theme, current_theme_author, current_theme_inspire, error_message } = this.props;
    return (
      <View style={homeContainerStyle}>
        <Text style={themeStyle}>{current_theme}</Text>
      </View>
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