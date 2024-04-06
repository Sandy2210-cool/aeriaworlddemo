import {StyleSheet, Image, View} from 'react-native';
import React, {useEffect} from 'react';
import {ImagePath} from '../CommonUtils/ImagePath';
import {string} from '../CommonUtils/Constant';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(string.login);
    }, 3000); //splash time
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={ImagePath.logo} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Background color can be customized
  },
  image: {
    width: '90%', // Adjust the width as needed
    resizeMode: 'contain',
  },
});

export default Splash;
