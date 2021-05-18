import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, View, StyleSheet} from 'react-native';

const DefaultTextInput = ({
  handleChangeText,
  value,
  placeholder,
  secureText,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={valueText => handleChangeText(valueText)}
        value={value}
        style={styles.defaultTextInput}
        placeholder={placeholder}
        secureTextEntry={secureText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  defaultTextInput: {
    height: 53,
    width: '100%',
    borderWidth: 1,
    borderColor: '#BEBAB3',
    borderRadius: 12,
    padding: 16,
    fontSize: 14,
    marginBottom: 16,
  },
});

DefaultTextInput.propTypes = {
  handleChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureText: PropTypes.bool,
};

export default DefaultTextInput;
