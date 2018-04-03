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


// const {

// } = styles;


class HomeComponent extends Component {
    render() {
        return <Text>hello this is mark</Text>
    }
}

export { HomeComponent };

const mapStateToProps = (state, ownProps) => {
    
    return {
      ownProps
    };
  };

export const Home = connect(mapStateToProps, {
    
  })(HomeComponent);