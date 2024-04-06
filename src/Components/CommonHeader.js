import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import {ImagePath} from '../CommonUtils/ImagePath';
import {Colors} from '../CommonUtils/Colors';
import {useNavigation} from '@react-navigation/native';
import {string} from '../CommonUtils/Constant';

const CommonHeader = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableHighlight onPress={() => navigation.goBack()}>
        <Image source={ImagePath.backArrow} style={styles.backArrow} />
      </TouchableHighlight>
      <Text style={styles.heading}>{props.title}</Text>
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    height: 70,
  },
  backArrow: {
    width: 30,
    height: 30,
    tintColor: Colors.black,
  },
  heading: {
    fontSize: 20,
    color: Colors.black,
    paddingLeft: 15,
  },
});
