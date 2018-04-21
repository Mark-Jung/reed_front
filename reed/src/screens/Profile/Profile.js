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
  Tab,
  Tabs,
  TabHeading,
  Card,
  CardItem,
  Text,
  Left,
  Right,
} from 'native-base';
import styles from './styles';
import { NavigationActions } from 'react-navigation';
import _ from 'lodash';
import { View, ListView, TouchableOpacity, Image, RefreshControl, Dimensions, ScrollView, } from 'react-native';
import { connect } from 'react-redux';
import icons from '../../resources/img/icons';
const { width } = Dimensions.get("window");

import {
  load_profile,
  load_saved,
} from '../../ducks/profile';

const {
  followInfoStyle,
  followNumberStyle,
  upperStyle,
  followButtonStyle,
  nameStyle,
  nameContainerStyle,
  slideImageStyle,
  themeTextStyle,
} = styles;




class ProfileComponent extends Component {
  componentWillMount() {
    this.props.load_profile('mark');
    // while(this.props.saved == 'na'){}
    
  }

  renderTiles(source, onTilePress, showAuthor) {
    return _.map(source, (item, index) => {
      if (typeof item === 'undefined') {
          return (<View key={index}/>)
      }
      let margin = width / (3 * 40);
      let size = (width - margin * 6) / 3;
      return (
          <TouchableOpacity
              onPress={() => {
                  onTilePress(item);
              }}
              style={{...slideImageStyle, width: size, height: size, marginHorizontal: margin, justifyContent:'center', alignContent: 'center'}}
              key={index}
          >
              <Card
                  style={{ backgroundColor: '#F2F2F270'}}
              >
                <CardItem header style={{ backgroundColor: '#F2F2F270'}}>
                {showAuthor ? <Text style={{fontFamily: 'Heiti SC',}}>{item.writer_username}</Text> : <View/>}

                </CardItem>
                <CardItem style={{ backgroundColor: '#F2F2F270'}}>
                  
                  <Text style={{...themeTextStyle, fontFamily: 'Heiti SC',}}>
                      {item.theme}
                  </Text>
                  
                </CardItem>
                <CardItem footer style={{ backgroundColor: '#F2F2F270'}}>
                  
                </CardItem>
              </Card>
          </TouchableOpacity>
      );
    });
  }
  onTilePress(post){
    console.log(post);
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName: 'Post',
      params: {
        post
      }
    }));
  }

  renderWritten() {
    return (
      <ScrollView>
        <View style={{
          justifyContent: "flex-start", 
          flexDirection: "row", 
          flexWrap: "wrap",
          backgroundColor:'#C0DBCB',
        }}>
          {this.renderTiles(this.props.written, this.onTilePress.bind(this), false)}
        </View>
      </ScrollView>
    );
  }
  renderSaved() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#C0DBCB'}}>
        <View style={{
          justifyContent: "flex-start", 
          flexDirection: "row", 
          flexWrap: "wrap",
          backgroundColor:'#C0DBCB',
        }}>
          {this.renderTiles(this.props.saved_post, this.onTilePress.bind(this), true)}
        </View>
      </ScrollView>
    );
  }

  renderTabs() {
    return (
      <Tabs initialPage={0} tabBarUnderlineStyle={{backgroundColor: 'grey'}}>
          <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
            {this.renderWritten()}
          </Tab>
          <Tab heading={<TabHeading> <Icon name="bookmarks" /> </TabHeading>}>
            {/* <View style={{backgroundColor:'#C0DBCB'}}>
              {this.renderSaved()}
            </View> */}
            {this.renderSaved()}
          </Tab>
        </Tabs>
    );
  }

  

  renderIntro(intro, username){
    console.log(intro + username)
    return (
      <View
      style={{flexDirection: 'row', marginBottom: 10}}
      >
        <Left>
          <Image source={icons.sun} style={{width: 40, height:40, marginLeft: 70}}/>
        </Left>

        
        <Text style={{fontFamily: 'Heiti SC', marginLeft: 200, alignSelf:"center", fontSize: 12, fontStyle:'italic'}}>
          {username}'s words:
          {'\n'}
          {intro}
        </Text>
      </View>
    );
  }

  render() {
    const { username, following_count, followed_by_count, intro, uid, written, saved_post, saved } = this.props;
    if (this.props.saved != 'na' &&  _.isEmpty(this.props.saved_post)){
      this.props.load_saved(saved);
    }
    console.log(saved_post);

    return (
      <View
        style={{backgroundColor: '#C5DACC', flex: 1}}
      >
        <Image source={icons.demoapp_typewriter} style={{width: 90, height: 90, alignSelf: 'center'}}/>
        <View
          style={upperStyle}
        >
          {this.renderIntro(intro, username)}
        </View>

        {this.renderTabs()}

      </View>
    );
  }
}

export { ProfileComponent };

const mapStateToProps = (state, ownProps) => {
  const { profile } = state;
  const { username, following_count, followed_by_count, intro, uid, written, saved, saved_post } = profile;
  return {
    ...ownProps,
    username,
    following_count,
    followed_by_count,
    intro,
    uid,
    written,
    saved,
    saved_post,
  };
};

export const Profile = connect(mapStateToProps, {
  load_profile,
  load_saved,
})(ProfileComponent);
  