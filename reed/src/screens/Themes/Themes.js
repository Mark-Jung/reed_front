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
import { View, Text, ScrollView, TouchableHighlight, Image, RefreshControl, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import icons from '../../resources/img/icons';
import {
  load_all_themes,
  toggle_show_closed,
  toggle_show_open
} from '../../ducks/theme'
import {
  Tiles
} from '../../components/common';
const {
  buttonStyle
} = styles;


class ThemesComponent extends Component {
  componentDidMount() {
    this.props.load_all_themes(0);
    this.props.toggle_show_closed();
    this.props.toggle_show_open();
  };

  onTilePress (theme) {
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName: 'Collection',
      params: {
        theme
      }
    }));
  };
  
  
  renderThemeTiles () {
    const { loaded_count, themes, show_closed, show_open, closed_themes, open_themes } = this.props;
    var sorted_themes = [];
    if (show_closed && show_open) {
      sorted_themes = themes;
    } else if (show_closed) {
      sorted_themes = closed_themes;
    } else if (show_open) {
      sorted_themes = open_themes;
    }
    // console.log(sorted_themes);
    return (
      <View style={{
        backgroundColor: '#C0DBCB'
      }}>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Button
            onPress={this.props.toggle_show_closed}
            style={show_closed ? {...buttonStyle, backgroundColor: '#DBEDD3', opacity: 0.4, marginLeft: 105} : {...buttonStyle, backgroundColor: '#DBEDD3', marginLeft: 105} }
          >
            <Image source={icons.closed_mail} style={{width:20, height: 20}}/>
          </Button>
          <Button
            onPress={this.props.toggle_show_open}
            style={show_open ?  {...buttonStyle, backgroundColor: '#DBEDD3', opacity: 0.4, marginLeft: 75} : {...buttonStyle, backgroundColor: '#DBEDD3', marginLeft: 75}}
          >
            <Image source={icons.open_mail} style={{width:20, height: 20}}/>
          </Button>
        </View>
        <ScrollView style={{backgroundColor: '#C0DBCB'}}>
          <Tiles 
            themes={sorted_themes} 
            onTilePress={this.onTilePress.bind(this)} 
          />
        </ScrollView>
      </View>
    );
  }
  render() {
    return (
      <View 
        style={{backgroundColor:'#C0DBCB'}}
      >
        <Image source={icons.demoapp_typewriter} style={{width: 90, height: 90, alignSelf: 'center', paddingBottom: 0, marginBottom: 0}}/>
        {this.renderThemeTiles()}
      </View>
    );
  }
};

export { ThemesComponent };

const mapStateToProps = (state, ownProps) => {
  const { theme } = state;
  const { themes, loaded_count, show_closed, show_open, sorted_themes, closed_themes, open_themes } = theme;
  return {
    ...ownProps,
    themes,
    loaded_count,
    show_closed,
    show_open,
    closed_themes,
    open_themes
  };
};

export const Themes = connect(mapStateToProps, {
  load_all_themes,
  toggle_show_closed,
  toggle_show_open
})(ThemesComponent);
