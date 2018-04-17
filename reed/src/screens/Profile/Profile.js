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
} from 'native-base';
import styles from './styles';
import { View, Text, ListView, TouchableOpacity, Image, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import {
  Tiles
} from '../../components/common/';

import {
  load_profile
} from '../../ducks/profile';

const {
  followInfoStyle,
  followNumberStyle,
  upperStyle,
  followButtonStyle,
  nameStyle,
  nameContainerStyle,
} = styles;




class ProfileComponent extends Component {
  componentDidMount() {
    this.props.load_profile('mark');
  }

  renderTabs() {
    return (
      <Tabs initialPage={0} tabBarUnderlineStyle={{backgroundColor: 'grey'}}>
          <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
            {/* <Tile
              
            /> */}
            <Text>
              nihao
            </Text>
          </Tab>
          <Tab heading={<TabHeading> <Icon name="bookmarks" style={{color: 'white'}}/> </TabHeading>}>
            <Text>
              bookmarked
            </Text>
          </Tab>
        </Tabs>
    );
  }

  renderFollowInfo(following_count, followed_by_count, username, uid) {
    return (
      <View
        style={{flexDirection: 'row'}}
      >
        <View
          style={nameContainerStyle}
        >
          <View
            style={nameStyle}
          >
            <Text>
              {username}
            </Text>
          </View>
        </View>

        <View
          style={followInfoStyle}
        >
          <View>
            <Text
              style={followNumberStyle}
            >
              {followed_by_count}
            </Text>
            <Button
              style={followButtonStyle}
            >
              <Text
                style={{fontSize: 12}}
              >
                Subscribers
              </Text>
            </Button>
          </View>

          <View
            style={{marginRight:35}}
          >
            <Text
              style={followNumberStyle}
            >
              {following_count}
            </Text>
            <Button
              style={{...followButtonStyle}}
            >
              <Text
                style={{
                  fontSize: 12
                }}
              >
                Subscribed
              </Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }

  renderIntro(username, intro){
    return (
      <View>
          <Text>
            {intro}
          </Text>
      </View>
    );
  }

  render() {
    const { username, following_count, followed_by_count, intro, uid } = this.props;
    return (
      <View
        style={{backgroundColor: '#C5DACC', flex: 1}}
      >
        <View
          style={upperStyle}
        >
          {this.renderFollowInfo(following_count, followed_by_count, username, uid)}
        </View>
        {this.renderIntro(username, intro)}

        {this.renderTabs()}

      </View>
    );
  }
}

export { ProfileComponent };

const mapStateToProps = (state, ownProps) => {
    const { profile } = state;
    const { username, following_count, followed_by_count, intro, uid } = profile;
    return {
      ...ownProps,
      username,
      following_count,
      followed_by_count,
      intro,
      uid
    };
};

export const Profile = connect(mapStateToProps, {
  load_profile,
  })(ProfileComponent);
  