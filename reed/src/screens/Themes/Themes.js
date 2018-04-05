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
  load_all_themes,
} from '../../ducks/theme'
import {
  ThemeSlider
} from '../../components/themes';


class ThemesComponent extends Component {
  componentDidMount() {
    this.props.load_all_themes(0);
  };

  onThemePress () {
    console.log('Theme pressed!');
  }
  
  renderThemeTiles() {
    const { loaded_count, themes } = this.props;
    let first = '';
    typeof themes[0] === 'undefined' ? first = 'hi' : first = themes[0].theme;

    return (
      <View style={{flex: 1, alignSelf: 'center',
      flexDirection: 'column',
      paddingTop: 10,
      justifyContent: 'space-between'}}>
        <Text>
          how many were loaded? {loaded_count}
        </Text>
        
        <Text>
          {first}
        </Text>
        <ThemeSlider 
          themes={themes} 
          onThemePress={this.onThemePress.bind(this)} 
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