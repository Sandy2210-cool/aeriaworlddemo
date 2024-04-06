import {
  Alert,
  BackHandler,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LoginScreen from '../Components/LoginScreen';
import {Colors} from '../CommonUtils/Colors';

const Login = ({navigation}) => {
  const [currentScreen, setCurrentScreen] = useState('');

  useEffect(() => {
    const backAction = () => {
      if (currentScreen === 'Login') {
        Alert.alert('Exit App', 'Are you sure you want to exit?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'OK', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [currentScreen]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', event => {
      setCurrentScreen(event.data.state.routes[event.data.state.index].name);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <LoginScreen />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
