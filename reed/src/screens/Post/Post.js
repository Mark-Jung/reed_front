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
import icons from '../../resources/img/icons';
import styles from './styles';

const {
  cardImageStyle,
  cardHeaderStyle,
  cardItemStyle,
  savedImageStyle,
} = styles;

class PostComponent extends Component {

  render() {
    const { post } = this.props.navigation.state.params;

    return (
      <View
        style={{backgroundColor: '#C0DBCB', flex: 1}}
      >
        <Card
          style={{...cardImageStyle, }}
        >
          <CardItem
            Header style={cardHeaderStyle}
          >
            <Text style={{fontFamily: 'Heiti SC', marginLeft: 10}}>
              {post.theme} 
            </Text>
          </CardItem>
          <CardItem
            style={cardItemStyle}
          >
            <Text style={{fontFamily: 'Heiti SC',}}>
              {post.content}
            </Text>
          </CardItem>
        </Card>



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