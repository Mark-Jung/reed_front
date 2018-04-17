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
          tintColor='black'
        /> :
        <RefreshControl
          refreshing={props.refreshing}
          onRefresh={props.onRefresh}
          colors={['black']}
        />
      }
    />
  );
};