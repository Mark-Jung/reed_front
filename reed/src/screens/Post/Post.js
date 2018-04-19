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
  StyleProvider,
  Fab,
  Card,
  CardItem,
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import { View, Text, ScrollView, TouchableOpacity, Image, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

class PostComponent extends Component {

  
  render() {
    // const { theme } = this.props.navigation.state.params;
    // const { postList } = this.props;
    // console.log(theme.written);
    const { post } = this.props.navigation.state.params;

    return (
      <View style={{flex:1, backgroundColor: '#C0DBCB'}}>
        <Text>
          {post.theme}
        </Text>
        <Text>
          {post.content}
        </Text>
        <Text>
          {post.created}
        </Text>
      </View>
    );
  }
}

export { PostComponent };

const mapStateToProps = (state, ownProps) => {
  
  return {
    ...ownProps,
  };
};

export const Post = connect(mapStateToProps, {
})(PostComponent);