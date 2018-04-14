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
import styles from './styles';
import {
  load_post,
} from '../../ducks/post';

const {
  cardImageStyle,
} = styles;

class CollectionComponent extends Component {

  componentDidMount() {
    const { theme } = this.props.navigation.state.params;
    this.props.load_post(theme);
  }

  renderPost() {
    const { postList } = this.props;
    if (!_.isEmpty(postList)) {
      return _.map(postList, (post, index) => {
        return (
          <Card
            key={index}
            style={cardImageStyle}
          >
            <CardItem
              Header
            >
              <Icon/>
            </CardItem>
            <CardItem>
              <Text>
                {post.content}
              </Text>
            </CardItem>
          </Card>
        );
      }); 
    }
    else {
      return (
        <View>
          <Text>
            loading
          </Text>
        </View>
      );
    };
  }
    

  renderCollection() {
    const { current_theme, current_theme_inspire, current_theme_author } = this.props
    return (
      <ScrollView>
        <Card
            style={cardImageStyle}
          >
            <CardItem
              Header
            >
              <Icon/>
              <Text>
                {current_theme}
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                {current_theme_inspire}
              </Text>
              <Text>
                {current_theme_author}
              </Text>
            </CardItem>
          </Card>
        {this.renderPost()}
      </ScrollView>
    )
  }
  
  render() {
    const { theme } = this.props.navigation.state.params;
    const { postList } = this.props;
    // console.log(postList)

    return (
      <View style={{flex:1}}>
        {this.renderCollection()}
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
          <Icon name="share"/>
        </Fab>
      </View>
    );
  }
}

export { CollectionComponent };

const mapStateToProps = (state, ownProps) => {
  const { post, theme } = state;
  const { postList } = post;
  const { current_theme, current_theme_inspire, current_theme_author } = theme;
  // console.log(postList);
  return {
    ...ownProps,
    postList,
    current_theme,
    current_theme_author,
    current_theme_inspire,
  };
};

export const Collection = connect(mapStateToProps, {
  load_post,   
})(CollectionComponent);