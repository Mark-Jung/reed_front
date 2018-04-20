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
import icons from '../../resources/img/icons'

const {
  cardImageStyle,
  cardHeader
} = styles;

class CollectionComponent extends Component {

  componentDidMount() {
    const { theme } = this.props.navigation.state.params;
    this.props.load_post(theme.theme);
  }



  renderPost() {
    const { postList, } = this.props;
    if (!_.isEmpty(postList)) {
      return _.map(postList, (post, index) => {
        
        return (
          <Card
            key={index}
            style={cardImageStyle}
          >
            <CardItem
              Header style={cardHeader}
            >
              <Image source={icons.bookmark}/>
              <Text style={{fontFamily: 'Heiti SC',}}>
                {post.writer_username} 
              </Text>
            </CardItem>
            <CardItem>
              <Text style={{fontFamily: 'Heiti SC',}}>
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
    // const { current_theme, current_theme_inspire, current_theme_author } = this.props;
    const { theme } = this.props.navigation.state.params;
    const { theme_inspire, theme_author } = theme;
    // console.log(current_theme);
    return (
      <ScrollView>
        <Card
            style={cardImageStyle}
          >
            <CardItem
              Header
            >
              <Icon/>
              <Text style={{fontFamily: 'Heiti SC',}}>
                {theme.theme}
              </Text>
            </CardItem>

            <CardItem>
              <Text style={{fontFamily: 'Heiti SC',}}>
                {theme_inspire}
              </Text>
              <Text>
                {theme_author}
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
    // console.log(theme.written);

    return (
      <View style={{flex:1, backgroundColor: '#C0DBCB'}}>
        {this.renderCollection()}
        {theme.written ? <View></View>:<Fab
          active={theme.written}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#FCECB8', alignContent: 'center', justifyContent: 'center' }}
          position="bottomRight"
          onPress={() => {
            this.props.navigation.dispatch(NavigationActions.navigate({
              routeName: 'Write',
              params: {
                theme: theme.theme
              }
            }));
          }}>
          <Text style={{fontFamily: 'Heiti SC', fontSize: 30, color:'black'}}>+</Text>
        </Fab>}
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