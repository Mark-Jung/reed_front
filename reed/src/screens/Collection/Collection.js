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
  Fab
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import { View, Text, ListView, TouchableOpacity, Image, RefreshControl } from 'react-native';
import { connect } from 'react-redux';

// const {

// } = styles;

class CollectionComponent extends Component {
    render() {
      const { theme } = this.props.navigation.state.params;
      
      return (
        <Fab
            active={true}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => {
              this.props.navigation.dispatch(NavigationActions.navigate({
                routeName: 'Write',
                params: {
                  theme
                }
              }));
            }}>
            <Icon name="share" />
          </Fab>
      );
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