import React, { Component } from 'react';
import {
  Header,
  Left,
  Right,
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
import { NavigationActions } from 'react-navigation';
import { View, Text, ListView, TouchableOpacity, Image, RefreshControl } from 'react-native';
import { connect } from 'react-redux';

import {
  post_publish,
} from '../../ducks/post';


// const {

// } = styles;


class WriteComponent extends Component {
    static navigationOptions({ navigation }) {
        return {
          header: (headerProps) => {
            return (
              <Header>
                <Left>
                  <Button
                    transparent
                    onPress={() => {
                      headerProps.navigation.dispatch(NavigationActions.back());
                    }}
                  >
                    <Icon style={{}} name='arrow-back' />
                  </Button>
                </Left>
                <Right>
                  <Button
                    transparent
                    // onPress={() => {
                    //   this.props.
                    // }}
                  >
                    <Text>
                      Publish
                    </Text>
                  </Button>
                </Right>
              </Header>
            );
          }
        };
    }
    render() {
        return (
          <Text>
            Hello this is the write page.
          </Text>
        );
    }
}

export { WriteComponent };

const mapStateToProps = (state, ownProps) => {
    
    return {
      ...ownProps,

    };
};

export const Write = connect(mapStateToProps, {
    
  })(WriteComponent);