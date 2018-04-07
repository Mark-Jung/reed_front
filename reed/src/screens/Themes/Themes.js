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
import { NavigationActions } from 'react-navigation';
import { View, Text, ListView, TouchableHighlight, Image, RefreshControl, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import icons from '../../resources/img/icons';
import {
  load_all_themes,
  toggle_show_closed,
  toggle_show_open
} from '../../ducks/theme'
import {
  Tiles
} from '../../components/common';


class ThemesComponent extends Component {
  componentDidMount() {
    this.props.load_all_themes(0);
    this.props.toggle_show_closed();
    this.props.toggle_show_open();
  };

  onTilePress (theme) {
    console.log(theme);
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName: 'Collection',
      params: {
        theme
      }
    }));
  };
  
  renderThemeTiles () {
    const { loaded_count, themes, show_closed, show_open } = this.props;
    let sorted_themes = [];
    if (themes) {
      sorted_themes = themes
    }
    return (
      <View style={{
        
      }}>
        <View style={{flexDirection: 'row',}}>
          <Button
            onPress={this.props.toggle_show_closed}
            style={show_closed ? {backgroundColor: 'green', opacity: 0.4} : {backgroundColor: 'green'} }
          >
            <Image source={icons.closed_mail} style={{width:50, height: 50}}/>
          </Button>
          <Button
            onPress={this.props.toggle_show_open}
            style={show_open ?  {backgroundColor: 'green', opacity: 0.4} : {backgroundColor: 'green'}}
          >
            <Image source={icons.open_mail} style={{width:50, height: 50}}/>
          </Button>
        </View>
        
        <Tiles 
          themes={sorted_themes} 
          onTilePress={this.onTilePress.bind(this)} 
        />
      </View>
    );
  }
  render() {
    return (
      this.renderThemeTiles()
    );
  }
}

export { ThemesComponent };

const mapStateToProps = (state, ownProps) => {
  const { theme } = state;
  const { themes, loaded_count, show_closed, show_open } = theme;
  return {
    ...ownProps,
    themes,
    loaded_count,
    show_closed,
    show_open,
  };
};

export const Themes = connect(mapStateToProps, {
  load_all_themes,
  toggle_show_closed,
  toggle_show_open
})(ThemesComponent);
