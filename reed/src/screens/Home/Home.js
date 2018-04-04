import React, { Component } from 'react';
import {
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
import {
  load_current_theme,
} from '../../ducks/theme';


// const {

// } = styles;


class HomeComponent extends Component {

  componentDidMount() {
    this.props.load_current_theme();
  }

  render() {
    const { current_release_time, current_theme, current_theme_author, current_theme_inspire, error_message } = this.props;
    return (
      <Text>hello this is mark and this is the current theme: {current_theme}</Text>
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