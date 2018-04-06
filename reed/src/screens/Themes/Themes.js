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
import { View, Text, ListView, TouchableOpacity, Image, RefreshControl } from 'react-native';
import { connect } from 'react-redux';

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
  }
  
  renderThemeTiles() {
    const { loaded_count, themes } = this.props;
    if (themes) {
      
    }
    return (
      <View style={{
        flex: 1,
        flexDirection:'row',
      }}>
        <Tiles 
          themes={themes} 
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
