import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Colors} from '../CommonUtils/Colors';

const Button = ({
  buttonText,
  buttonContainer,
  onPress,
  buttonTextStyle,
  img,
  imageStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, buttonContainer]}
      onPress={onPress}>
      {img ? (
        <Image
          source={img}
          style={[{height: 20, width: 20, tintColor: 'white'}, imageStyle]}
        />
      ) : null}
      <Text style={[styles.buttonTextStyle, buttonTextStyle]}>
        {buttonText.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 13,
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    // justifyContent:'space-between',
    marginVertical: 10,
  },
  buttonTextStyle: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 1,

    textAlign: 'center',

    // lineHeight: 27,
    color: 'white',
    marginLeft: 5,
  },
});
