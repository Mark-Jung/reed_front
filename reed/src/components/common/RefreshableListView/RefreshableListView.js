import React from 'react';
import { ListView, RefreshControl, Platform } from 'react-native';

export const RefreshableListView = (props) => {
  return (
    <ListView
      {...props}
      refreshControl={
        (Platform.OS === 'ios') ?
        <RefreshControl
          refreshing={props.refreshing}
          onRefresh={props.onRefresh}
          tintColor='#e0258e'
        /> :
        <RefreshControl
          refreshing={props.refreshing}
          onRefresh={props.onRefresh}
          colors={['#e0258e']}
        />
      }
    />
  );
};