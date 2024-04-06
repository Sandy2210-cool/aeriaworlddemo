import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Routes from './src/Navigation/Routes';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <>
      <Routes />
      <Toast />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
