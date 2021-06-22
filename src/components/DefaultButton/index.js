import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableHighlight, Text, StyleSheet} from 'react-native';

const DefaultButton = ({text, onPress}) => {
  return (
    <View style={{width: '100%'}}>
      <TouchableHighlight
        style={styles.contentButton}
        onPress={onPress}
        underlayColor="#E3561C">
        <Text style={styles.textButton}>{text}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  contentButton: {
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 16,
    marginTop: 16,
    height: 56,
    backgroundColor: '#E3562A',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 24,
    fontWeight: '500',
    color: '#FFF',
  },
});

DefaultButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default DefaultButton;
