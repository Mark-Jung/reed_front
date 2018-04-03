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


class ProfileComponent extends Component {
    render() {
        return <Text>hello this is profile page</Text>
    }
}

export { ProfileComponent };

const mapStateToProps = (state, ownProps) => {
    
    return {
      ownProps
    };
};

export const Profile = connect(mapStateToProps, {
    
  })(ProfileComponent);