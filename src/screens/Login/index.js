import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {View, Image, TouchableHighlight, Text, StyleSheet} from 'react-native';

import DefaultButton from '../../components/DefaultButton';
import DefaultTextInput from '../../components/DefaultTextInput';

import SocialNetworkButton from '../../components/SocialNetworkButton';

import api from '../../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleChangeText = valueText => {
    setEmail(valueText);
  };

  const handleLogin = () => {
    api
      .get('/users')
      .then(res => {
        res.data.map(user => {
          if (user.email === email && user.password === password) {
            navigation.navigate('Home');
          } else {
            alert('Usuário ou senha inválidos!');
          }
        });
      })
      .catch(err => console.log('deu erro hein ', err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstItem}>
        <Image
          style={styles.loginImage}
          source={require('../../assets/img/login-image.png')}
        />
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Login com redes sociais</Text>
        <View style={styles.sectionSocialNetworks}>
          <SocialNetworkButton
            img="facebook"
            onPress={() => alert('facebook')}
          />
          <SocialNetworkButton
            img="instagram"
            onPress={() => alert('instagram')}
          />
          <SocialNetworkButton img="google" onPress={() => alert('google')} />
        </View>
      </View>
      <View style={styles.secondItem}>
        <View style={{width: '100%'}}>
          <DefaultTextInput
            handleChangeText={valueText => handleChangeText(valueText)}
            placeholder="E-mail"
            value={email}
          />

          <DefaultTextInput
            handleChangeText={valueText => setPassword(valueText)}
            placeholder="Senha"
            value={password}
            secureText
          />
        </View>
        <View style={styles.sectionBtns}>
          <TouchableHighlight
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.textInput}>Esqueceu a senha?</Text>
          </TouchableHighlight>
          <DefaultButton onPress={() => handleLogin()} text="Entrar" />
          <TouchableHighlight onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.textInput}>Cadastrar</Text>
          </TouchableHighlight>
        </View>
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
  secondItem: {
    width: '100%',
    alignItems: 'center',
    padding: 16,
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
  textInput: {
    fontSize: 14,
    fontWeight: '500',
    color: '#78746D',
  },
  sectionBtns: {
    width: '100%',
    alignItems: 'center',
  },
});

export default Login;
