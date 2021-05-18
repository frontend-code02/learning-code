import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableHighlight,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import DefaultTextInput from '../../components/DefaultTextInput';

import SocialNetworkButton from '../../components/SocialNetworkButton';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeText = valueText => {
    setEmail(valueText);
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
          <TouchableHighlight onPress={() => {}}>
            <Text style={styles.textInput}>Esqueceu a senha?</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {}}>
            <Text>Entrar</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {}}>
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
});

export default Login;
