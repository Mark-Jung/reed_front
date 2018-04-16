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
  send_post,
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
              
            </Header>
          );
        }
      };
    }
    
    render() {
      const { theme } = this.props.navigation.state.params;
      const { draft } = this.props;
      var { cur_draft } = this.props;
      if (!_.isEmpty(draft) || cur_draft === '') {
        var cur_draft_obj = (_.find(draft, function(obj) {return obj.theme === theme;}));
        cur_draft = typeof cur_draft_obj != 'undefined' ? cur_draft_obj.text : '';
        // console.log("This is from extracting cur_draft: " + cur_draft);
      } 
      return (
        <View>
          <Input 
            onChangeText={(cur_draft) => {this.props.temp_save(cur_draft, theme);}}
            value={cur_draft}
          />
          <Right>
            <Button
              transparent
              onPress={() => {
                this.props.send_post(cur_draft, theme);
              }}
            >
              <Text>
                Publish
              </Text>
            </Button>
          </Right>
        </View>
        
      );
    }
}

export { WriteComponent };

const mapStateToProps = (state, ownProps) => {
  const { post } = state;
  const { draft, cur_draft } = post;
    
  return {
    ...ownProps,
    draft,
    cur_draft
  };
};

export const Write = connect(mapStateToProps, {
  temp_save,
  send_post
})(WriteComponent);