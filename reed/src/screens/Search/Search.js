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


class SearchComponent extends Component {
    render() {
        return <Text>hello this is Search page</Text>
    }
}

export { SearchComponent };

const mapStateToProps = (state, ownProps) => {
    
    return {
      ownProps
    };
};

export const Search = connect(mapStateToProps, {
    
  })(SearchComponent);