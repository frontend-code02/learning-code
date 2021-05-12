import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableHighlight, Image} from 'react-native';

// import { Container } from './styles';

const SocialNetworkButton = ({onPress, img}) => {
  let icon;

  if (img === 'facebook') {
    icon = require('../../assets/icons/facebook-icon.png');
  } else if (img === 'instagram') {
    icon = require('../../assets/icons/insta-icon.png');
  } else {
    icon = require('../../assets/icons/google-icon.png');
  }

  return (
    <View>
      <TouchableHighlight
        onPress={onPress}
        underlayColor="#6599EA"
        style={{width: 40, height: 40, borderRadius: 10, marginHorizontal: 6}}>
        <Image style={{width: 40, height: 40}} source={icon} />
      </TouchableHighlight>
    </View>
  );
};

SocialNetworkButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
};

export default SocialNetworkButton;
