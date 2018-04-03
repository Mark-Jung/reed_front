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

class PostsComponent extends Component {
    render() {
        return <Text>hello this is Posts page</Text>
    }
}


export { PostsComponent };

const mapStateToProps = (state, ownProps) => {
    
    return {
      ownProps
    };
  };

export const Posts = connect(mapStateToProps, {
    
  })(PostsComponent);