import React, { Component } from 'react';
import {
  Header,
  Left,
  Right,
  Item,
  Icon,
  Button,
  Spinner,
  Grid,
  Col,
  Row,
  StyleProvider
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import { View, Text, ListView, TextInput, Image, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash'; 
import { Input } from '../../components/common/Input';
import {
  post_publish,
  temp_save,
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
      const { theme } = this.props.navigation.state.params;
      const { draft } = this.props;
      var cur_draft = '';
      if (!_.isEmpty(draft)) {
        var cur_draft_obj = (_.find(draft, function(obj) {return obj.theme === theme;}));
        cur_draft = typeof cur_draft_obj != 'undefined' ? cur_draft_obj.text : '';
        // console.log(cur_draft);
      }
      return (
        <Input 
          onChangeText={(cur_draft) => this.props.temp_save(cur_draft, theme)}
          value={cur_draft}
        />
      );
    }
}

export { WriteComponent };

const mapStateToProps = (state, ownProps) => {
  const { post } = state;
  const { draft } = post;
    
  return {
    ...ownProps,
    draft,
  };
};

export const Write = connect(mapStateToProps, {
  temp_save,
})(WriteComponent);