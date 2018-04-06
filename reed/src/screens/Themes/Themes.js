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
} from '../../ducks/theme'
import {
  Tiles
} from '../../components/common';


class ThemesComponent extends Component {
  componentDidMount() {
    this.props.load_all_themes(0);
  };

  onTilePress () {
    console.log('Tile pressed!');
  };
  onClosedPress () {
    console.log('hi');
    
  };
  onOpenPress() {
    console.log('bye');
  }
  
  renderThemeTiles () {
    
    const { loaded_count, themes } = this.props;
    let sorted_themes = [];
    let show_closed = true;
    let show_open = true;

    if (themes) {
      sorted_themes = themes
    }
    return (
      <View style={{
        
      }}>
        <View style={{flexDirection: 'row',}}>
          <Button
            onPress={this.onClosedPress}
            style={show_closed ? {backgroundColor: 'grey'} : {backgroundColor: 'grey', opacity: 0.4}}
          >
            <Image source={icons.closed_mail}/>
          </Button>
          <Button
            onPress={this.onOpenPress}
            style={show_open ? {backgroundColor: 'grey'} : {backgroundColor: 'grey', opacity: 0.4}}
          >
            <Image source={icons.open_mail}/>
          </Button>
        </View>
        
        {/* <TouchableHighlight
          activeOpacity={1}
          style={ this.state.pressStatus ? styles.buttonPress : styles.button }
          onPress={this.onFilterPress.bind(this)}
        >
          <Image source={icons.closed_mail}/>
        </TouchableHighlight> */}
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
  const { themes, loaded_count } = theme;
  return {
    ...ownProps,
    themes,
    loaded_count
  };
};

export const Themes = connect(mapStateToProps, {
  load_all_themes,
})(ThemesComponent);
