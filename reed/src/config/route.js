import React from 'react';
import { Dimensions, Image } from 'react-native';
import { TabNavigator, StackNavigator, TabBarBottom, NavigationActions } from 'react-navigation';
import styles from './styles';
import icons from '../resources/img/icons';
import {
  Home,
  Themes,
  Profile,
  Search,
  Write,
  Collection,
  Post
} from '../screens';

const {
  tabBarIconStyle,
  heartIconStyle,
} = styles;

const navigateOnce = (getStateForAction) => (action, state) => {
    const { type, routeName } = action;
    return (
      state &&
      type === NavigationActions.NAVIGATE &&
      routeName === state.routes[state.routes.length - 1].routeName
    ) ? state : getStateForAction(action, state);
};

const MainTabRouteConfig = {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={icons.event}
            style={[heartIconStyle, { tintColor }]}
          />
        ),
      }
    },
    Themes: {
      screen: Themes,
      navigationOptions: {
        tabBarLabel: 'Themes',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={icons.themes}
            style={[heartIconStyle, { tintColor }]}
          />
        ),
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'My Account',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={icons.profile}
            style={[heartIconStyle, { tintColor }]}
          />
        ),
      }
    },
  };

  const TabNavigatorConfigs = {
    swipeEnabled: false,
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      //This is where you set the highlight color for the bottom tab navigation 
      activeTintColor: 'black'
    },
    lazy: true
  };

  const MainTabNavigator = TabNavigator(MainTabRouteConfig, TabNavigatorConfigs);

  const AppRouteConfigs = {
    MainTabs: {
      screen: MainTabNavigator
    },
    Write: {
      screen: Write
    },
    Collection: {
      screen: Collection
    },
    Post: {
      screen: Post
    }

    // Login: {
    //   screen: Login,
    //   navigationOptions: {
    //     headerMode: 'none'
    //   }
    // }
  };

  const AppNavigator = StackNavigator(
    AppRouteConfigs,
    {
      headerMode: 'screen'
    }
  );
  
  AppNavigator.router.getStateForAction = navigateOnce(AppNavigator.router.getStateForAction);
  
  export { AppNavigator };
  





