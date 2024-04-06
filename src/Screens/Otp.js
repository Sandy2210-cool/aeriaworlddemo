import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OTPVerificationScreen from '../Components/OTPVerificationScreen';

const Otp = props => {
  let otpCode = props?.route?.params?.otp;
  return (
    <View style={styles.container}>
      <OTPVerificationScreen otpCode={otpCode} />
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
