import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImagePath} from '../CommonUtils/ImagePath';

const CommonLogo = () => {
  return (
    <View>
      <Image source={ImagePath.logo} style={styles.logo} />
    </View>
  );
};

export default CommonLogo;

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
    resizeMode: 'contain',
  },
});
