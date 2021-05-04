import React from 'react';
import {View, Image, TouchableHighlight, Text, StyleSheet} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstItem}>
        <Image
          style={styles.loginImage}
          source={require('../../assets/img/login-image.png')}
        />
      </View>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Login com redes sociais</Text>
      <View style={styles.sectionSocialNetworks}>
        <TouchableHighlight
          style={styles.socialNetworkBtn}
          onPress={() => {}}
          underlayColor="#6599EA">
          <Image source={require('../../assets/icons/facebook-icon.png')} />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.socialNetworkBtn}
          onPress={() => {}}
          underlayColor="#6599EA">
          <Image source={require('../../assets/icons/insta-icon.png')} />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.socialNetworkBtn}
          onPress={() => {}}
          underlayColor="#6599EA">
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
  firstItem: {
    alignItems: 'center',
  },
  loginImage: {
    width: 343,
    height: 253,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Rubik',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 8,
  },
  sectionSocialNetworks: {
    flexDirection: 'row',
  },
  socialNetworkBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginHorizontal: 6,
  },
});

export default Login;
