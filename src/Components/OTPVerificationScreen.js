import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import {string} from '../CommonUtils/Constant';
import ToastMessage, {generateRandomNumber} from '../Helper/Helper';
import Button from './Button';
import CommonHeader from './CommonHeader';
import CommonLogo from './CommonLogo';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const OTPVerificationScreen = props => {
  let otpCode = props?.otpCode;
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');
  const [resendOTP, setResendOTP] = useState('');
  const [disableResend, setDisableResend] = useState(true);

  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    let timer;
    if (disableResend) {
      timer = setInterval(() => {
        if (countdown > 0) {
          setCountdown(prevCount => prevCount - 1);
        } else {
          setDisableResend(false);
          clearInterval(timer);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [disableResend, countdown]);

  const handleOTPChange = otp => {
    setOtp(otp);
  };
  const resend = () => {
    const randomOTP = generateRandomNumber();
    setResendOTP(randomOTP);
    ToastMessage(
      'success',
      string.resend_otp,
      `Your OTP is ${randomOTP}`,
      '',
      '',
      '',
      () => {},
    );
    setDisableResend(false);
  };
  const handleVerifyOTP = () => {
    if (!otp.trim() || !/^\d+$/.test(otp.trim()) || otp.length !== 6) {
      ToastMessage('error', string.valid_otp, '', '', '', '', () => {});
      return;
    } else if (resendOTP !== '' && otp == resendOTP) {
      let data = {
        otp: otp,
      };
      navigation.navigate(string.home, {inputData: data});
      return;
    } else if (otp !== otpCode || otp !== resendOTP) {
      ToastMessage('error', string.otp_mismatch, '', '', '', '', () => {});
      return;
    } else {
      let data = {
        otp: otp,
      };
      navigation.navigate(string.home, {inputData: data});
    }
  };
  return (
    <>
      <View style={{flex: 1}}>
        <CommonHeader title={string.change_number} />
        <View style={styles.container}>
          <CommonLogo />
          <Text style={styles.heading}>{string.enter_otp}</Text>

          <OtpInputs
            style={styles.otpInput}
            autofillFromClipboard={true}
            code={otp}
            inputStyles={styles.otpfont}
            handleChange={code => handleOTPChange(code)}
            numberOfInputs={6}
            autoFocusOnLoad
            inputContainerStyles={styles.inputContainerStyles}
            focusStyles={{
              borderColor: 'black',
              borderWidth: 2,
            }}
          />
          <Text
            onPress={() => (disableResend ? {} : resend())}
            style={styles.resend}>
            {disableResend ? `Resend OTP (${countdown}s)` : 'Resend'}
          </Text>
          <Button
            buttonContainer={{width: '90%'}}
            buttonText="Verify"
            onPress={handleVerifyOTP}
          />
        </View>
      </View>
    </>
  );
};

export default OTPVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: -70,
  },

  inputContainerStyles: {
    borderWidth: 1,
    borderColor: 'grey',

    height: 45,
    width: 45,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  otpfont: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.black,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    color: Colors.black,
    textAlign: 'left',
    alignSelf: 'center',
    width: '90%',
  },
  resend: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'right',
    alignSelf: 'center',
    width: '90%',
  },
  otpInput: {
    width: '90%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  otpInputField: {
    width: 30,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: 'red',
  },
  otpInputHighlight: {
    borderColor: 'blue',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
