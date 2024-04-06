import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import login from '../Screens/Login';
import {string} from '../CommonUtils/Constant';
import Otp from '../Screens/Otp';
import Home from '../Screens/Home';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={string.splash}
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={string.login}
          component={login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={string.otp}
          component={Otp}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={string.home}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
