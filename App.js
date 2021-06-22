import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from './src/screens/Login';
import Courses from './src/screens/Courses';
import ForgotPassword from './src/screens/ForgotPassword';
import Signup from './src/screens/Signup';

const App = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  function Home() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Courses" component={Courses} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    );
  }

  function Profile() {
    return <Text>Cursos</Text>;
  }

  function Settings() {
    return <Text>Configurações</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
