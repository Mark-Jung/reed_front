import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
const {
    inputStyle
} = styles;


export const Input = ({onChangeText, value}) => {
    return (
      <TextInput
        editable={true}
        multiline={true}
        numberOfLines={12}
        maxLength={500}
        value={value}
        autoCorrect={false}
        autoCapitalize={'none'}
        returnKeyType={'next'}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    );
  }