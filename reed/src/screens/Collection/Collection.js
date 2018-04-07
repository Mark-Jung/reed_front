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


class CollectionComponent extends Component {
    render() {
      const { theme } = this.props.navigation.state.params;
      return <Text>{theme}</Text>
    }
}

export { CollectionComponent };

const mapStateToProps = (state, ownProps) => {
    return {
      ...ownProps,
    };
};

export const Collection = connect(mapStateToProps, {
    
  })(CollectionComponent);