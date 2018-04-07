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
                    <Icon style={styles.headerButtonsIconStyle} name='arrow-back' />
                  </Button>
                </Left>
              </Header>
            );
          }
        };
    }
    render() {
        return <Text>hello this is Search page</Text>
    }
}

export { WriteComponent };

const mapStateToProps = (state, ownProps) => {
    
    return {
      ownProps
    };
};

export const Write = connect(mapStateToProps, {
    
  })(WriteComponent);