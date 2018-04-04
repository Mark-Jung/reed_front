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
import {
  load_profile
} from '../../ducks/profile'

// const {

// } = styles;


class ProfileComponent extends Component {
  componentDidMount() {
    this.props.load_profile('mark');
  }

  render() {
    const { username, following_count, followed_by_count, intro } = this.props;
    return (
      <View>
        <Text>
          username: {username}
        </Text>
        <Text>
          subscribed: {following_count}
        </Text>
        <Text>
          subscribers: {followed_by_count}
        </Text>
        <Text>
          intro: {intro}
        </Text>
      </View>
    );
  }
}

export { ProfileComponent };

const mapStateToProps = (state, ownProps) => {
    const { profile } = state;
    const { username, following_count, followed_by_count, intro } = profile;
    return {
      ...ownProps,
      username,
      following_count,
      followed_by_count,
      intro,
    };
};

export const Profile = connect(mapStateToProps, {
  load_profile,
  })(ProfileComponent);