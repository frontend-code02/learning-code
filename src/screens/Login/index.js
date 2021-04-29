import React from 'react';
import {View, Image, TouchableHighlight, Text, StyleSheet} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../assets/img/login-image.png')} />
      </View>
      <Text>Login</Text>
      <Text>Login com redes sociais</Text>
      <View>
        <TouchableHighlight onPress={() => {}} underlayColor="#6599EA">
          <Image source={require('../../assets/icons/facebook-icon.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {}} underlayColor="#6599EA">
          <Image source={require('../../assets/icons/insta-icon.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {}} underlayColor="#6599EA">
          <Image source={require('../../assets/icons/google-icon.png')} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 52,
  },
});

export default Login;
