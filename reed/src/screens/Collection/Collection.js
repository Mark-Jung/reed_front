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
import {
  load_post,
} from '../../ducks/post';

// const {

// } = styles;

class CollectionComponent extends Component {

  componentDidMount() {
    const { theme } = this.props.navigation.state.params;
    this.props.load_post(theme);
  }

  renderPost(post) {
    if(post) {
      return (
        <View>
          <Text>
            {post[0].anonymity}
          </Text>
          <Text>
            {post[0].content}
          </Text>
        </View>
      );
    } else {
      return (
        <Text>
          loading
        </Text>
      );
    }
    
  }

  renderCollection(theme, posts) {
    return (
      <ListView>
      </ListView>
    )
  }
  
  render() {
    const { theme, postList } = this.props.navigation.state.params;


    return (
      <View style={{flex:1}}>
        {this.renderPost(postList)}
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
      </View>
    );
  }
}

export { CollectionComponent };

const mapStateToProps = (state, ownProps) => {
  const { post } = state;
  const { postList } = post;
  // console.log(postList);
  return {
    ...ownProps,
    postList,
  };
};

export const Collection = connect(mapStateToProps, {
  load_post,   
})(CollectionComponent);