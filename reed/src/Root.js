import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Modal, View, Text, Platform, BackHandler } from 'react-native';
import { Spinner, Container } from 'native-base';
import { connect } from 'react-redux';
import { HomeComponent } from './screens';

class Root extends Component {
//   componentDidMount() {
//     this.props.openUserPrefRealm();
//     BackHandler.addEventListener('hardwareBackPress', () => {
//       this.props.dispatch(NavigationActions.back());
//       return true;
//     });
//   }
    render() {
        return (
            <HomeComponent>
            </HomeComponent>
        );
    }
    
};
/*
  componentWillReceiveProps(nextProps) {
    const {
      autoLogin,
      currentSession,
      userPrefRealm,
      userPreferences,
      subscriptionSyncState,
      userInfoSyncState,
      currentUserUuid
    } = nextProps;
    const {
      subscriptionSyncing,
      needToSyncSubscription
    } = subscriptionSyncState;
    const {
      userSyncing,
      needToSyncUser
    } = userInfoSyncState;
    if (!currentSession && userPreferences && userPreferences.stayLoggedIn && userPreferences.savedSessionKey && !autoLogin.loading) {
      this.props.userLoginAuto({ userPrefRealm, sessionKey: userPreferences.savedSessionKey });
    }
    if (currentSession && needToSyncSubscription && !subscriptionSyncing) {
      this.props.userSubsSync({ os: Platform.OS, currentUserUuid });
    }
    if (currentSession && needToSyncUser && !userSyncing) {
      this.props.userInfoSync({ currentSession });
    }
  }

  
  render() {
    return (
      <Container>
        <AppNavigator
          navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
          })}
        />
        <Modal
          animationType='fade'
          transparent
          visible={this.props.autoLogin.loading}
        >
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center' }}>
            <Spinner />
            <Text style={{ color: '#fff' }}>로그인 중...</Text>
          </View>
        </Modal>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    currentSession,
    currentUserUuid,
    autoLogin,
    subscriptionSyncState,
    userInfoSyncState
  } = state.auth;
  const {
    userPrefRealm,
    userPreferences
  } = state.preferences;
  return {
    ...ownProps,
    nav: state.nav,
    userPrefRealm,
    userPreferences: userPreferences && userPreferences[0],
    currentSession,
    currentUserUuid,
    autoLogin,
    subscriptionSyncState,
    userInfoSyncState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ openUserPrefRealm, userLoginAuto, userSubsSync, userInfoSync }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
*/
export default (Root);