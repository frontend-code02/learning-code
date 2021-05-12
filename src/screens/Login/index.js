import React from 'react';
import {View, Image, TouchableHighlight, Text, StyleSheet} from 'react-native';
import SocialNetworkButton from '../../components/SocialNetworkButton';

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
        <SocialNetworkButton img="facebook" onPress={() => alert('facebook')} />
        <SocialNetworkButton
          img="instagram"
          onPress={() => alert('instagram')}
        />
        <SocialNetworkButton img="google" onPress={() => alert('google')} />
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
