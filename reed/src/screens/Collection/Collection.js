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
  save_post,
} from '../../ducks/post';
import {
  load_saved,
} from '../../ducks/profile';
import icons from '../../resources/img/icons'

const {
  cardImageStyle,
  cardHeaderStyle,
  cardItemStyle,
  savedImageStyle,
} = styles;

class CollectionComponent extends Component {

  componentDidMount() {
    const { theme } = this.props.navigation.state.params;
    this.props.load_post(theme.theme);
  }

  

  onSavedPress(pid, isSaved) {
    
    this.props.save_post(pid, isSaved);
    this.props.load_saved(this.props.saved);
  }

  renderPost() {
    const { postList, } = this.props;
    if (!_.isEmpty(postList)) {
      return _.map(postList, (post, index) => {
        var isSaved = post.isSaved;
        return (
          <Card
            key={index}
            style={cardImageStyle}
          >
            <CardItem
              Header style={cardHeaderStyle}
            >
              <Button
                style={{backgroundColor: 'white'}}
                onPress={() => this.onSavedPress(post.id, post.isSaved)}
              >
                { isSaved ? <Image source={icons.bookmarked} style={savedImageStyle}/> : <Image source={icons.bookmark} style={savedImageStyle}/>}
              </Button>
              <Text style={{fontFamily: 'Heiti SC', marginLeft: 10}}>
                {post.writer_username} 
              </Text>
            </CardItem>
            <CardItem
              style={cardItemStyle}
            >
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
    theme_author_phrase = 'by ' + theme_author;
    return (
      <ScrollView>
        <Card
            style={cardImageStyle}
          >
            <CardItem
              Header
              style={cardHeaderStyle}
            >
              <Text style={{fontFamily: 'Heiti SC', marginLeft: 10}}>
                {theme.theme}
              </Text>
            </CardItem>

            <CardItem
              style={cardItemStyle}
            >
              <View>
                <Text style={{fontFamily: 'Heiti SC',}}>
                  {theme_inspire}
                  {'\n'}
                </Text>
                <Text style={{ alignSelf: 'center', fontStyle: 'italic', fontWeight: '100', }}>
                  {theme_author_phrase}
                </Text>
              </View>
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
  const { post, theme, profile } = state;
  const { postList } = post;
  const { current_theme, current_theme_inspire, current_theme_author } = theme;
  const { saved } = profile;
  // console.log(postList);
  return {
    ...ownProps,
    postList,
    current_theme,
    current_theme_author,
    current_theme_inspire,
    saved,
  };
};

export const Collection = connect(mapStateToProps, {
  load_post,   
  save_post,
  load_saved,
})(CollectionComponent);