import React, {useEffect, useState} from 'react';
import {Alert, BackHandler, Image, StyleSheet, View} from 'react-native';
import {string} from '../CommonUtils/Constant';
import {ImagePath} from '../CommonUtils/ImagePath';

const Home = ({navigation}) => {
  const [currentScreen, setCurrentScreen] = useState('');

  useEffect(() => {
    const backAction = () => {
      if (currentScreen === string.home) {
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
    <View style={styles.container}>
      <Image source={ImagePath.logo} style={styles.image} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '90%',
    resizeMode: 'contain',
  },
});
